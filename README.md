# Reddy Constructions — Official Website

Premium construction company website built with Next.js 15, Tailwind CSS, and Supabase.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router, static export)
- **Styling**: Tailwind CSS 3
- **Email**: Resend API
- **Database**: Supabase (contact form storage)
- **Deployment**: Vercel (recommended)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/reddy-constructions.git
cd reddy-constructions
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example file and fill in your real values:

```bash
cp .env.example .env.local
```

Edit `.env.local` — see the [Environment Variables](#environment-variables) section below for what each key means.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

All variables are required for the contact form to work. The site will build and display correctly without them, but form submissions will fail.

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL (e.g. `https://xxxx.supabase.co`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side only, never expose to client) |
| `NEXT_PUBLIC_SITE_URL` | Full URL of the deployed site (e.g. `https://reddyconstructions.in`) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number with country code, no `+` (e.g. `917892899480`) |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) for sending contact form emails |
| `CONTACT_EMAIL` | Email address where contact form submissions are delivered |

---

## Scripts

```bash
npm run dev        # Start development server (Turbopack)
npm run build      # Production build
npm run start      # Serve production build locally
npm run lint       # ESLint check
```

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── api/contact/      # Contact form API route (Resend)
│   ├── projects/         # Ongoing & completed project pages
│   └── ...               # All other pages
├── components/
│   ├── animations/       # CSS-based scroll reveal components
│   ├── layout/           # Navbar, Footer, LenisProvider
│   ├── sections/         # Page sections (Hero, Services, Team, etc.)
│   └── ui/               # Shared UI components
├── data/                 # Static content (projects, services, company info)
├── lib/                  # Supabase client
├── styles/               # Global CSS
├── types/                # TypeScript interfaces
└── utils/                # Utility functions
public/
└── images/               # Project, staff, and achievement photos
```

---

## Deployment

### Vercel (recommended)

1. Push this repository to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Add all environment variables from `.env.example` in the Vercel dashboard
4. Deploy

### Environment variable checklist before deploying

- [ ] `RESEND_API_KEY` — generate a new key on resend.com (do not reuse dev keys)
- [ ] `CONTACT_EMAIL` — the inbox that receives enquiries
- [ ] `NEXT_PUBLIC_SITE_URL` — set to your production domain
- [ ] Supabase keys — from your Supabase project dashboard

---

## License

Private — all rights reserved. © Reddy Constructions 2021–present.
