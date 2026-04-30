
import { useEffect, useState, useRef } from 'react';
import { supabase } from '../lib/supabaseClient';
import Protected from '../components/Protected';

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [caption, setCaption] = useState("");
  const fileInputRef = useRef();

  // Fetch gallery images
  const fetchGallery = async () => {
    setLoading(true);
    const { data } = await supabase.from('gallery').select('*').order('uploaded_at', { ascending: false });
    setGallery(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // Handle image upload
  const handleUpload = async (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    if (!file) return alert('Please select an image file.');
    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substr(2, 8)}.${fileExt}`;
    const filePath = `gallery/${fileName}`;

    // Upload to Supabase Storage (bucket: gallery)
    let { error: uploadError } = await supabase.storage.from('gallery').upload(filePath, file);
    if (uploadError) {
      setUploading(false);
      return alert('Upload failed: ' + uploadError.message);
    }

    // Get public URL
    const { data: publicUrlData } = supabase.storage.from('gallery').getPublicUrl(filePath);
    const publicUrl = publicUrlData?.publicUrl;
    if (!publicUrl) {
      setUploading(false);
      return alert('Could not get public URL.');
    }

    // Insert into gallery table
    const { error: insertError } = await supabase.from('gallery').insert([
      { image_url: publicUrl, caption }
    ]);
    setUploading(false);
    if (insertError) return alert('DB insert failed: ' + insertError.message);
    setCaption("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    fetchGallery();
  };

  return (
    <Protected>
      <div style={{padding:40}}>
        <h1>Manage Gallery</h1>
        <form onSubmit={handleUpload} style={{marginBottom:32,display:'flex',gap:12,alignItems:'center'}}>
          <input type="file" accept="image/*" ref={fileInputRef} disabled={uploading} />
          <input type="text" placeholder="Caption (optional)" value={caption} onChange={e => setCaption(e.target.value)} disabled={uploading} />
          <button type="submit" disabled={uploading}>{uploading ? 'Uploading...' : 'Upload Image'}</button>
        </form>
        {loading ? <p>Loading...</p> : (
          <div style={{display:'flex',flexWrap:'wrap',gap:24}}>
            {gallery.map(row => (
              <div key={row.id} style={{width:180,background:'#fff',padding:12,borderRadius:8,boxShadow:'0 1px 4px #0001'}}>
                <img src={row.image_url} alt={row.caption} style={{width:'100%',borderRadius:6}}/>
                <div style={{marginTop:8}}>{row.caption}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Protected>
  );
}
