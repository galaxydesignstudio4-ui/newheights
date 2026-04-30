import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) setError(error.message);
    else alert('Check your email for the login link!');
    setLoading(false);
  }

  return (
    <div style={{padding:40}}>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{padding:8,marginBottom:12,width:260}}
        /><br/>
        <button type="submit" disabled={loading} style={{padding:10,background:'#2E7D32',color:'#fff',border:'none',borderRadius:6}}>
          {loading ? 'Sending...' : 'Send Magic Link'}
        </button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  );
}
