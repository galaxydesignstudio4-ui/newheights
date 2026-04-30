import Link from 'next/link';

export default function Home() {
  return (
    <div style={{padding:40}}>
      <h1>New Heights School Admin Dashboard</h1>
      <ul>
        <li><Link href="/content">Edit Content</Link></li>
        <li><Link href="/programs">Manage Programs</Link></li>
        <li><Link href="/gallery">Manage Gallery</Link></li>
        <li><Link href="/admissions">View Admissions</Link></li>
        <li><Link href="/contacts">View Contacts</Link></li>
      </ul>
    </div>
  );
}
