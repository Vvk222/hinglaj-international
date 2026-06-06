# Hinglaj International — Production Spec
**Version:** 1.0  
**Locked:** 2026-06-07  
**Status:** Ready for Development

---

## 1. Company Profile

| Field | Value |
|---|---|
| Company Name | Hinglaj International |
| Established | May 2026 |
| Address | 5, Sukhdevnagar Part-3, Nr. Rajmandir Cinema, Palanpur Hwy, Deesa – 385535 |
| Email | vivekbkhatri123@gmail.com |
| WhatsApp | +91 7383160557 |
| Certifications | IEC, GST, MSME, FSSAI, APEDA |

### Strategic Positioning
- Do NOT use legacy metrics ("30 years of experience", "established track record")
- Core pillars: **Next-Gen Supply Networks**, **100% Regulatory Compliance**, **State-of-the-Art Logistics Integration**, **Uncompromising Quality Verification**
- Hero angle: **"Ancient Indian Superfoods. Global-Grade Export Standards."**
- Target persona: International buyers, global procurement managers, institutional wholesalers, foreign distributors

---

## 2. Products

| # | Product | Category | MOQ | Packaging (Retail) | Packaging (Bulk) |
|---|---|---|---|---|---|
| 1 | Plain Makhana | Foxnuts / Superfood Snack | 1 MT | 100g Matte Zipper Pouch | 5kg Corrugated Box |
| 2 | Smoked Salt Makhana | Flavoured Foxnuts | 1 MT | 100g Matte Zipper Pouch | 5kg Corrugated Box |
| 3 | Peri Peri Makhana | Flavoured Foxnuts | 1 MT | 100g Matte Zipper Pouch | 5kg Corrugated Box |
| 4 | Cheese Makhana | Flavoured Foxnuts | 1 MT | 100g Matte Zipper Pouch | 5kg Corrugated Box |
| 5 | Salted Caramel Makhana | Flavoured Foxnuts | 1 MT | 100g Matte Zipper Pouch | 5kg Corrugated Box |
| 6 | Ashwagandha Root Extract | Ayurvedic / Health Supplement | 1 MT | 100g Matte Zipper Pouch | 5kg Corrugated Box |

**Images:** Placeholder slots only. Exact dimensions: `400x400px` product square, `800x500px` hero card. Designer drops in without touching code.

**Private Label:** Available — mention on product cards.

---

## 3. Target Export Markets

| Priority | Region | Markets |
|---|---|---|
| Tier 1 | North America | USA, Canada |
| Tier 1 | Europe | UK, Netherlands |
| Tier 1 | Middle East | UAE, Qatar |
| Tier 2 | South Asia | Nepal, Bangladesh, Maldives |
| Tier 2 | Oceania | Australia |
| Tier 3 | Global | Rest of World |

---

## 4. Design System

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#0A192F` | Background, navbar, cards |
| `--color-secondary` | `#D4AF37` | CTAs, badges, highlights, borders |
| `--color-accent` | `#00B4D8` | Micro-interactions, hover states, teal glows |
| `--color-surface` | `#112240` | Card surfaces, glassmorphism panels |
| `--color-text-primary` | `#E6F1FF` | Headlines, primary text |
| `--color-text-muted` | `#8892B0` | Subtext, captions |

### Typography
| Role | Font | Source | Weight |
|---|---|---|---|
| Display / Hero Headings | **Clash Display** | Fontshare CDN | 500, 600, 700 |
| Section Headings | **Clash Display** | Fontshare CDN | 500, 600 |
| Body Text | **Inter** | Google Fonts | 400, 500 |
| UI Labels / Buttons | **Inter** | Google Fonts | 500, 600 |

**Load order in `index.html`:**
```html
<!-- Clash Display -->
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap" rel="stylesheet" />
<!-- Inter -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
```

### Aesthetic Direction
- Aceternity UI / 21st.dev style premium dark glassmorphism
- Spotlight effects, moving border cards, background beams, noise textures
- Subtle animated gradients using primary + saffron gold
- Zero white backgrounds anywhere — full dark theme only
- Glassmorphism panels: `backdrop-blur-md`, `bg-white/5`, `border border-white/10`

---

## 5. Tech Stack

### Frontend
| Tool | Version | Purpose |
|---|---|---|
| React | 18.x | UI framework |
| Vite | 5.x | Build tool |
| Tailwind CSS | 3.x | Utility styling |
| shadcn/ui | Latest | Accessible component primitives |
| Framer Motion | 11.x | Component micro-interactions, page transitions |
| GSAP + ScrollTrigger | 3.x | Hero animation, scroll-triggered reveals |
| React Router | v6 | 12-page routing |
| Lucide React | Latest | Primary icon set |
| React Icons | Latest | Brand icons only (WhatsApp, LinkedIn, etc.) |
| EmailJS | @emailjs/browser | Frontend-only inquiry submission |

### Animation Split Rule (Strict)
- **Framer Motion owns:** Component entrance, hover states, loading screen, page transitions, button micro-states
- **GSAP owns:** Hero trade-route vector animation, scroll-triggered section reveals, staggered list animations
- No overlap. Never use both on the same element.

### Hosting
- **Platform:** Vercel (free tier)
- **Deploy:** Connect GitHub repo → auto-deploy on push to `main`
- **Domain:** `hinglaj-international.vercel.app` initially → custom domain via DNS when ready

### Environment Variables
```env
# .env.local (never commit to Git)
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_WHATSAPP_NUMBER=917383160557
```

---

## 6. EmailJS Setup Guide

> Complete this BEFORE deploying. Takes ~10 minutes.

**Step 1 — Create Account**
- Go to [emailjs.com](https://www.emailjs.com) → Sign Up (free)
- Free tier: 200 emails/month

**Step 2 — Add Email Service**
- Dashboard → Email Services → Add Service → Gmail
- Authenticate with `vivekbkhatri123@gmail.com`
- Copy the **Service ID** → paste into `VITE_EMAILJS_SERVICE_ID`

**Step 3 — Create Email Template**
- Dashboard → Email Templates → Create New
- Set **To Email:** `vivekbkhatri123@gmail.com`
- Template subject: `New Export Inquiry — {{company_name}}`
- Template body:
```
New B2B inquiry received on Hinglaj International.

Buyer Name: {{from_name}}
Company: {{company_name}}
Email: {{reply_to}}
Phone: {{phone}}
Country: {{country}}
Product Interest: {{product}}
Estimated Volume: {{volume}} MT/month
Message: {{message}}
```
- Copy the **Template ID** → paste into `VITE_EMAILJS_TEMPLATE_ID`

**Step 4 — Get Public Key**
- Dashboard → Account → General → Public Key
- Copy → paste into `VITE_EMAILJS_PUBLIC_KEY`

**Step 5 — Add to Vercel**
- Vercel Dashboard → Project → Settings → Environment Variables
- Add all 4 `VITE_` variables there (never rely only on `.env.local` in production)

---

## 7. Site Architecture — 12 Pages

| # | Route | Page | Status |
|---|---|---|---|
| 1 | `/` | Home | **Full build** |
| 2 | `/about` | About Us | Stub |
| 3 | `/products` | Products | Stub |
| 4 | `/industries` | Industries Served | Stub |
| 5 | `/global-presence` | Global Presence | Stub |
| 6 | `/export-process` | Export Process | Stub |
| 7 | `/quality-assurance` | Quality Assurance | Stub |
| 8 | `/certifications` | Certifications | Stub |
| 9 | `/gallery` | Gallery | Stub |
| 10 | `/testimonials` | Testimonials | Stub |
| 11 | `/faq` | FAQ | Stub |
| 12 | `/contact` | Contact Us | Stub |

Stub pages render: Navbar + `<ComingSoon />` component + Footer. Navigation fully functional on day one.

---

## 8. Home Page — Section Breakdown

### Section 1 — Premium Loading Screen
- Duration: 2.2 seconds
- Elements: Hinglaj International logotype (Clash Display 700), "Est. 2026" badge, animated progress bar in saffron gold (`#D4AF37`)
- Exit: Framer Motion fade + scale-up reveal of main content
- Trigger: Shown only on first load, not on route navigation

### Section 2 — Sticky Navbar
- Logo: "Hinglaj International" wordmark (Clash Display) + teal accent dot
- Links: Home, About, Products, Industries, Global Presence, Export Process, Quality, Certifications, Gallery, Testimonials, FAQ, Contact
- Right side: "Request a Quote" CTA button (saffron gold border)
- Scroll behavior: `backdrop-blur` + `bg-primary/80` on scroll past 80px
- Mobile: Hamburger → full-screen slide-in menu (Framer Motion)
- Scroll progress: 2px saffron gold line across top of viewport tracking scroll %

### Section 3 — Hero Section
- Background: GSAP-animated global trade grid (SVG dot matrix) with animated route vector lines connecting India to target markets
- Badge: "Est. 2026 — Digitally Native Exporter" pill with teal glow
- Headline: Clash Display 700, "Ancient Indian Superfoods. Global-Grade Export Standards."
- Subheadline: Inter 400, muted — positioning copy about APEDA/FSSAI compliance, next-gen logistics
- CTAs: "Request Export Quote" (saffron gold filled) + "View Our Products" (ghost border)
- Trust strip: 4 metrics — "Tier-1 Logistics Partner", "100% APEDA Verified", "11+ Export Corridors", "1 MT MOQ"
- Animation: GSAP stagger on text entrance, Framer Motion on trust strip counter

### Section 4 — About Company (The 2026 Pivot)
- Headline: "Built for the Next Generation of Global Trade"
- Copy: Positioned around bypassing legacy inefficiencies, transparent supply chains, digitally native compliance
- 3 feature cards (glassmorphism): Transparent Supply Chain / Compliance-First Operations / Precision Quality Control
- Certifications badge strip: IEC | GST | MSME | FSSAI | APEDA
- CTA: "Our Export Process →"

### Section 5 — Products Showcase Grid
- Layout: 3-column grid (desktop), 2-col (tablet), 1-col (mobile)
- 6 product cards with:
  - Placeholder image (400x400px slot)
  - Product name (Clash Display)
  - Category tag (Superfood Snack / Ayurvedic Extract)
  - MOQ badge: "Min. 1 MT"
  - Packaging: "100g Pouches | 5kg Bulk Box"
  - Hover: scale-up image zoom + saffron gold border glow
  - CTA button: "Request Technical Spec Sheet" (opens inquiry modal)
- Private Label note on each card

### Section 6 — Export Process & Quality Matrix
- 5-step interactive process:
  1. Inquiry & Volume Confirmation
  2. Independent Quality Inspection (SGS / Geo-Chem Ready)
  3. FSSAI + APEDA Documentation
  4. Customs Clearance & HS Code Filing
  5. Logistics Integration & Real-Time Tracking
- Visual: Horizontal stepper (desktop) / vertical accordion (mobile)
- Active step: saffron gold highlight + teal connector line
- Animation: GSAP ScrollTrigger reveals each step on scroll

### Section 7 — Floating Elements
- **WhatsApp Trade Desk:** Fixed bottom-right, WhatsApp green (#25D366) circle button, pulsing ring animation, tooltip "Chat with Trade Desk", links to `https://wa.me/917383160557`
- **Back to Top:** Fixed bottom-right (above WhatsApp), appears after 400px scroll, saffron gold arrow icon

---

## 9. Directory Structure

```
hinglaj-international/
├── public/
│   ├── favicon.ico
│   └── og-image.jpg                  # 1200x630 OG image
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── products/             # product image placeholders
│   ├── components/
│   │   ├── ui/                       # shadcn/ui primitives
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── home/
│   │   │   ├── LoadingScreen.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ProductsShowcase.jsx
│   │   │   └── ExportProcess.jsx
│   │   ├── shared/
│   │   │   ├── FloatingWhatsApp.jsx
│   │   │   ├── BackToTop.jsx
│   │   │   ├── ComingSoon.jsx        # stub page component
│   │   │   └── InquiryModal.jsx      # EmailJS form
│   │   └── effects/
│   │       ├── SpotlightCard.jsx     # Aceternity-style spotlight
│   │       ├── MovingBorder.jsx      # animated border card
│   │       └── BackgroundBeams.jsx   # hero background effect
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Industries.jsx
│   │   ├── GlobalPresence.jsx
│   │   ├── ExportProcess.jsx
│   │   ├── QualityAssurance.jsx
│   │   ├── Certifications.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── products.js               # product data array
│   ├── hooks/
│   │   └── useScrollProgress.js
│   ├── lib/
│   │   └── emailjs.js                # EmailJS init + send helper
│   ├── styles/
│   │   └── globals.css               # Tailwind base + custom tokens
│   ├── App.jsx
│   └── main.jsx
├── .env.local                        # never commit
├── .env.example                      # commit this — safe template
├── .gitignore
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 10. SEO Configuration

```html
<!-- index.html head -->
<title>Hinglaj International | Premium Makhana & Ashwagandha Exporter from India</title>
<meta name="description" content="Hinglaj International — APEDA & FSSAI certified exporter of premium Makhana (foxnuts) and Ashwagandha root extract. Serving USA, UK, UAE, Canada, Australia and 11+ global markets. Min. 1 MT MOQ." />
<meta name="keywords" content="makhana exporter, foxnut exporter India, ashwagandha export, APEDA certified exporter, Indian superfood export, bulk makhana supplier" />

<!-- Open Graph -->
<meta property="og:title" content="Hinglaj International | Premium Indian Superfood Exporter" />
<meta property="og:description" content="APEDA & FSSAI certified. Exporting premium Makhana and Ashwagandha to 11+ global markets. Est. 2026." />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
```

---

## 11. Key Constraints & Rules

1. **No legacy claims.** Never write "years of experience", "trusted since", or "decades of expertise"
2. **All backgrounds dark.** No white or light backgrounds anywhere on the site
3. **Framer Motion / GSAP split is strict.** Do not mix on the same element
4. **EmailJS keys never hardcoded.** Always read from `import.meta.env.VITE_*`
5. **Images are placeholders.** Build with exact pixel dimensions, `object-cover`, and a `bg-surface` fallback — no broken layouts when images are absent
6. **Stub pages must have working navigation.** `<ComingSoon />` renders within full layout (Navbar + Footer)
7. **Mobile-first.** Every section built mobile-first, then scaled up via Tailwind breakpoints
8. **Vercel deploy must pass.** No unused imports, no console.log in production, no TypeScript errors (JS only)

---

*Spec locked. Development may begin.*
