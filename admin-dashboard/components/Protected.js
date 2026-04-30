import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Protected({ children }) {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const s = supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (!data.session) router.replace('/login');
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) router.replace('/login');
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, [router]);

  if (!session) return <p style={{padding:40}}>Checking authentication...</p>;
  return children;
}
