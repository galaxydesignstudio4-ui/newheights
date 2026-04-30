import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Link from 'next/link';

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    supabase.from('programs').select('*').order('order').then(({ data }) => {
      setPrograms(data || []);
    });
  }, []);

  return (
    <div style={{padding:40}}>
      <nav style={{marginBottom:32}}>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/gallery">Gallery</Link> | <Link href="/admissions">Admissions</Link> | <Link href="/contact">Contact</Link>
      </nav>
      <h1>Our Programs</h1>
      <div style={{display:'flex',flexWrap:'wrap',gap:24}}>
        {programs.map(row => (
          <div key={row.id} style={{width:260,background:'#fff',padding:16,borderRadius:8,boxShadow:'0 1px 4px #0001'}}>
            {row.image_url && <img src={row.image_url} alt={row.title} style={{width:'100%',borderRadius:6,marginBottom:8}}/>}
            <h3>{row.title}</h3>
            <p>{row.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
