import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Link from 'next/link';

export default function Home() {
  const [hero, setHero] = useState(null);
  useEffect(() => {
    supabase.from('content').select('*').eq('section', 'hero').then(({ data }) => {
      if (data && data.length) {
        const heroObj = {};
        data.forEach(row => { heroObj[row.key] = row.value; });
        setHero(heroObj);
      }
    });
  }, []);

  return (
    <div style={{padding:40}}>
      <nav style={{marginBottom:32}}>
        <Link href="/about">About</Link> | <Link href="/programs">Programs</Link> | <Link href="/gallery">Gallery</Link> | <Link href="/admissions">Admissions</Link> | <Link href="/contact">Contact</Link>
      </nav>
      <h1>{hero?.heading || 'New Heights School'}</h1>
      <h2>{hero?.subtext}</h2>
      <p>{hero?.badge}</p>
      <div style={{marginTop:24}}>
        <Link href="/admissions"><button>Enroll Now</button></Link>
        <Link href="/about"><button style={{marginLeft:12}}>Discover More</button></Link>
      </div>
    </div>
  );
}
