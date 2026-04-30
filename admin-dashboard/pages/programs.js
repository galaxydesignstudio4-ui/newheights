import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Protected from '../components/Protected';

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from('programs').select('*').order('order').then(({ data }) => {
      setPrograms(data || []);
      setLoading(false);
    });
  }, []);

  return (
    <Protected>
      <div style={{padding:40}}>
        <h1>Manage Programs</h1>
        {loading ? <p>Loading...</p> : (
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {programs.map(row => (
                <tr key={row.id}>
                  <td>{row.title}</td>
                  <td>{row.description}</td>
                  <td>{row.image_url ? <img src={row.image_url} alt="" width={80}/> : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Protected>
  );
}
