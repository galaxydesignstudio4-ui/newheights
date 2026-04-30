import '../styles/globals.css';
import { useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

function setFavicon(url) {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = url;
}

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Try to fetch logo from content table (section: 'logo', key: 'image')
    supabase.from('content').select('value').eq('section', 'logo').eq('key', 'image').single().then(({ data }) => {
      if (data?.value) {
        setFavicon(data.value);
      }
    });
  }, []);
  return <Component {...pageProps} />;
}
