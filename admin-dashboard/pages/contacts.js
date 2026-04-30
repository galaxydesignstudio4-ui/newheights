import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Protected from '../components/Protected';

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from('contacts').select('*').order('submitted_at', { ascending: false }).then(({ data }) => {
      setContacts(data || []);
      setLoading(false);
    });
  }, []);

  return (
    <Protected>
      <div style={{padding:40}}>
        <h1>Contact Submissions</h1>
        {loading ? <p>Loading...</p> : (
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(row => (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.message}</td>
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
