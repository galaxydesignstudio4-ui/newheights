import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Link from 'next/link';

export default function Admissions() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', details: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const { error } = await supabase.from('admissions').insert([
      { ...form, details: { details: form.details } }
    ]);
    if (error) setError(error.message);
    else setSubmitted(true);
  }

  return (
    <div style={{padding:40}}>
      <nav style={{marginBottom:32}}>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/programs">Programs</Link> | <Link href="/gallery">Gallery</Link> | <Link href="/contact">Contact</Link>
      </nav>
      <h1>Admissions Form</h1>
      {submitted ? <p>Thank you for your submission!</p> : (
        <form onSubmit={handleSubmit} style={{maxWidth:400}}>
          <input required placeholder="Name" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} style={{width:'100%',marginBottom:12,padding:8}}/><br/>
          <input required type="email" placeholder="Email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} style={{width:'100%',marginBottom:12,padding:8}}/><br/>
          <input placeholder="Phone" value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))} style={{width:'100%',marginBottom:12,padding:8}}/><br/>
          <textarea required placeholder="Details" value={form.details} onChange={e=>setForm(f=>({...f,details:e.target.value}))} style={{width:'100%',marginBottom:12,padding:8}}/><br/>
          <button type="submit">Submit</button>
        </form>
      )}
      {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  );
}
