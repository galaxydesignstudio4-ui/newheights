
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Link from 'next/link';

export default function About() {
  const [about, setAbout] = useState('');
  const [aboutImg, setAboutImg] = useState('');
  useEffect(() => {
    // Fetch about text
    supabase.from('content').select('value').eq('section', 'about').eq('key', 'text').single().then(({ data }) => {
      setAbout(data?.value || '');
    });
    // Fetch about image (optional)
    supabase.from('content').select('value').eq('section', 'about').eq('key', 'image').single().then(({ data }) => {
      setAboutImg(data?.value || '');
    });
  }, []);

  return (
    <div style={{padding:40}}>
      <nav style={{marginBottom:32}}>
        <Link href="/">Home</Link> | <Link href="/programs">Programs</Link> | <Link href="/gallery">Gallery</Link> | <Link href="/admissions">Admissions</Link> | <Link href="/contact">Contact</Link>
      </nav>
      <h1>About New Heights School</h1>
      {aboutImg && (
        <div style={{maxWidth:400,margin:'0 auto 24px'}}>
          <img src={aboutImg} alt="About" style={{width:'100%',borderRadius:12,boxShadow:'0 2px 8px #0002'}} />
        </div>
      )}
      <p>{about}</p>
    </div>
  );
}
