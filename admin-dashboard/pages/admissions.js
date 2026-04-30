import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Protected from '../components/Protected';

export default function Admissions() {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from('admissions').select('*').order('submitted_at', { ascending: false }).then(({ data }) => {
      setAdmissions(data || []);
      setLoading(false);
    });
  }, []);

  return (
    <Protected>
      <div style={{padding:40}}>
        <h1>Admissions Submissions</h1>
        {loading ? <p>Loading...</p> : (
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Details</th>
                <th>Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {admissions.map(row => (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td><pre style={{whiteSpace:'pre-wrap',maxWidth:300}}>{JSON.stringify(row.details, null, 2)}</pre></td>
                  <td>{row.submitted_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Protected>
  );
}
