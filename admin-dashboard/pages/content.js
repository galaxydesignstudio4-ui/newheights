
import { useEffect, useState, useRef } from 'react';
import { supabase } from '../lib/supabaseClient';
import Protected from '../components/Protected';

export default function Content() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // {id, value}
  const [uploading, setUploading] = useState(false);
  const aboutImgInput = useRef();
  const logoImgInput = useRef();

  const fetchContent = async () => {
    setLoading(true);
    const { data } = await supabase.from('content').select('*');
    setContent(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchContent();
  }, []);

  // Edit text value
  const handleEdit = (row) => setEditing({ id: row.id, value: row.value });
  const handleEditChange = (e) => setEditing(editing => ({ ...editing, value: e.target.value }));
  const handleEditSave = async () => {
    await supabase.from('content').update({ value: editing.value }).eq('id', editing.id);
    setEditing(null);
    fetchContent();
  };

  // Upload image and update content table
  const handleImageUpload = async (section, key, inputRef) => {
    const file = inputRef.current.files[0];
    if (!file) return alert('Please select an image file.');
    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${section}-${key}-${Date.now()}.${fileExt}`;
    const filePath = `${section}/${fileName}`;
    let { error: uploadError } = await supabase.storage.from('general').upload(filePath, file, { upsert: true });
    if (uploadError) {
      setUploading(false);
      return alert('Upload failed: ' + uploadError.message);
    }
    const { data: publicUrlData } = supabase.storage.from('general').getPublicUrl(filePath);
    const publicUrl = publicUrlData?.publicUrl;
    if (!publicUrl) {
      setUploading(false);
      return alert('Could not get public URL.');
    }
    // Upsert into content table
    await supabase.from('content').upsert({ section, key, value: publicUrl }, { onConflict: ['section', 'key'] });
    setUploading(false);
    fetchContent();
    if (inputRef.current) inputRef.current.value = "";
  };

  // Get value by section/key
  const getValue = (section, key) => {
    const row = content.find(r => r.section === section && r.key === key);
    return row ? row.value : '';
  };

  return (
    <Protected>
      <div style={{padding:40, maxWidth:600, margin:'0 auto'}}>
        <h1>Edit Site Content</h1>
        {loading ? <p>Loading...</p> : (
          <>
            <h2>About Page Image</h2>
            {getValue('about','image') && (
              <img src={getValue('about','image')} alt="About" style={{maxWidth:200,marginBottom:8,borderRadius:8}} />
            )}
            <div style={{display:'flex',gap:8,alignItems:'center',marginBottom:24}}>
              <input type="file" accept="image/*" ref={aboutImgInput} disabled={uploading} />
              <button onClick={() => handleImageUpload('about','image',aboutImgInput)} disabled={uploading}>Upload About Image</button>
            </div>

            <h2>Logo (Favicon)</h2>
            {getValue('logo','image') && (
              <img src={getValue('logo','image')} alt="Logo" style={{maxWidth:80,marginBottom:8,borderRadius:8}} />
            )}
            <div style={{display:'flex',gap:8,alignItems:'center',marginBottom:24}}>
              <input type="file" accept="image/*" ref={logoImgInput} disabled={uploading} />
              <button onClick={() => handleImageUpload('logo','image',logoImgInput)} disabled={uploading}>Upload Logo</button>
            </div>

            <h2>Other Content</h2>
            <table border="1" cellPadding="8">
              <thead>
                <tr>
                  <th>Section</th>
                  <th>Key</th>
                  <th>Value</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {content.map(row => (
                  (row.section === 'about' && row.key === 'image') || (row.section === 'logo' && row.key === 'image') ? null : (
                  <tr key={row.id}>
                    <td>{row.section}</td>
                    <td>{row.key}</td>
                    <td>
                      {editing && editing.id === row.id ? (
                        <input value={editing.value} onChange={handleEditChange} />
                      ) : row.value}
                    </td>
                    <td>
                      {editing && editing.id === row.id ? (
                        <>
                          <button onClick={handleEditSave}>Save</button>
                          <button onClick={() => setEditing(null)}>Cancel</button>
                        </>
                      ) : (
                        <button onClick={() => handleEdit(row)}>Edit</button>
                      )}
                    </td>
                  </tr>
                  )
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </Protected>
  );
}
