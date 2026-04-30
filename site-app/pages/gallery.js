
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Link from 'next/link';

export default function Gallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    // Fetch all gallery images (public URLs already stored in gallery table)
    const fetchGallery = async () => {
      const { data } = await supabase.from('gallery').select('*').order('uploaded_at', { ascending: false });
      setGallery(data || []);
    };
    fetchGallery();
  }, []);

  return (
    <div style={{padding:40}}>
      <nav style={{marginBottom:32}}>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/programs">Programs</Link> | <Link href="/admissions">Admissions</Link> | <Link href="/contact">Contact</Link>
      </nav>
      <h1>Gallery</h1>
      <div style={{display:'flex',flexWrap:'wrap',gap:24}}>
        {gallery.map(row => (
          <div key={row.id} style={{width:180,background:'#fff',padding:12,borderRadius:8,boxShadow:'0 1px 4px #0001'}}>
            <img src={row.image_url} alt={row.caption} style={{width:'100%',borderRadius:6}}/>
            <div style={{marginTop:8}}>{row.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
