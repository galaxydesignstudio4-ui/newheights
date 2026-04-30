# New Heights School Admin Dashboard

This is the Next.js-based admin dashboard for managing your Supabase-powered site content, programs, gallery, admissions, and contacts.

## Getting Started

1. Open a terminal in this folder:
   ```sh
   cd admin-dashboard
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Features
- Edit site content
- Manage programs and gallery
- View admissions and contact submissions
- All data is synced with Supabase

## Configuration
- Supabase credentials are set in `.env.local` (already provided)
- Make sure your Supabase tables match the schema in `../supabase_schema.sql`

---

For deployment, push this folder to your GitHub repo and deploy with Vercel, Netlify, or your preferred platform.
