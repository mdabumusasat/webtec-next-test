# Webtec - Installation & Setup Guide

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**
- A code editor (VS Code recommended)
- Terminal/Command Line access

---

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies
Open terminal in the project folder and run:

```bash
npm install
```

This will install all required packages (~2-3 minutes).

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: **http://localhost:3000**

✅ You should see the homepage!

---

## 📁 Project Structure

```
Webtec-next/
├── app/                      # Next.js 15 App Directory
│   ├── api/                 # API routes
│   │   └── contact/         # Contact form endpoint
│   ├── layout.tsx           # Root layout (metadata, fonts)
│   ├── page.tsx             # Homepage (Home 1)
│   ├── index-2/             # Home 2 variant
│   ├── page-about/          # About page
│   ├── page-contact/        # Contact page
│   └── ...                  # Other pages
│
├── components/
│   ├── elements/            # Reusable components
│   │   ├── Preloader.tsx   # Loading screen
│   │   ├── ContactForm.tsx # Contact form
│   │   ├── Counter.tsx     # Animated counters
│   │   └── ...
│   ├── layout/              # Layout components
│   │   ├── Header1.tsx     # Main header
│   │   ├── Footer.tsx      # Main footer
│   │   └── Layout.tsx      # Page wrapper
│   └── sections/            # Page sections
│       ├── Home1/          # Homepage 1 sections
│       ├── Home2/          # Homepage 2 sections
│       └── ...
│
├── public/
│   ├── css/                # Stylesheets
│   ├── fonts/              # Custom fonts
│   └── images/             # Images and icons
│
├── types/                  # TypeScript definitions
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── next.config.mjs         # Next.js config
└── README.md               # Main documentation
```

---

## 🎨 Available Pages

### Home Pages (7 Variants)
| Route | Description |
|-------|-------------|
| `/` | Home 1 (Default) |
| `/index-2` | Home 2 |
| `/index-3` | Home 3 |


### Inner Pages
| Route | Description |
|-------|-------------|
| `/page-about` | About Us |
| `/page-services` | Services Grid |
| `/page-service-details` | Service Details |
| `/page-projects` | Projects/Portfolio |
| `/page-project-details` | Project Details |
| `/page-team` | Team Members |
| `/page-team-details` | Team Member Profile |
| `/page-pricing` | Pricing Plans |
| `/page-faq` | FAQ |
| `/page-testimonial` | Testimonials |
| `/page-contact` | Contact |

### Blog/News
| Route | Description |
|-------|-------------|
| `/news-grid` | Blog Grid |
| `/news-details` | Blog Post |

### Shop/E-commerce
| Route | Description |
|-------|-------------|
| `/shop-products` | Products Grid |
| `/shop-products-sidebar` | Products with Sidebar |
| `/shop-product-details` | Product Details |
| `/shop-cart` | Shopping Cart |
| `/shop-checkout` | Checkout |

### Utility
| Route | Description |
|-------|-------------|
| `/page-404` | 404 Error Page |

---

## ⚙️ Configuration

### 1. Contact Form Setup (IMPORTANT)

The contact forms need email service integration.

**Step 1:** Choose an email service:
- [Resend](https://resend.com/) - Recommended (modern, easy)
- [SendGrid](https://sendgrid.com/) - Popular, reliable
- [Mailgun](https://www.mailgun.com/) - Developer-friendly
- [NodeMailer](https://nodemailer.com/) - Self-hosted SMTP

**Step 2:** Install the package (example with Resend):
```bash
npm install resend
```

**Step 3:** Add API key to environment variables:
Create `.env.local` file in root:
```
RESEND_API_KEY=re_your_api_key_here
```

**Step 4:** Update `app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Send email
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Use your verified domain
      to: 'your-email@example.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.form_name || body.first_name}</p>
        <p><strong>Email:</strong> ${body.form_email || body.email}</p>
        <p><strong>Phone:</strong> ${body.phone || 'N/A'}</p>
        <p><strong>Message:</strong> ${body.form_message || body.message}</p>
      `
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
```

**Step 5:** Test the form:
```bash
npm run dev
```
Visit http://localhost:3000/page-contact and submit the form.

---

### 2. Site Metadata

Update site information in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Company Name - Business Consulting",
  description: "Your company description here",
};
```

---

### 3. Colors & Styling

**Primary Colors**: Edit `public/css/style.css`
```css
:root {
  --theme-color-1: #1a4137;  /* Primary color */
  --theme-color-2: #f7931e;  /* Secondary color */
}
```

**Dark Mode Colors**: Edit `public/css/style-dark.css`

---

### 4. Fonts

Fonts are configured in `app/layout.tsx`:

```typescript
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
```

To change fonts, import from `next/font/google`.

---

### 5. Images

Replace images in `public/images/`:
- `public/images/logo.png` - Main logo
- `public/images/white-logo.png` - Logo for dark backgrounds
- `public/images/black-logo.png` - Logo for light backgrounds
- `public/images/home-1/` - Homepage 1 images
- `public/images/home-2/` - Homepage 2 images
- etc.

---

## 🛠️ Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📦 Building for Production

### Step 1: Build the Project
```bash
npm run build
```

This creates an optimized production build in `.next/` folder.

### Step 2: Test Production Build Locally
```bash
npm run start
```

### Step 3: Deploy

**Deploy to Vercel (Recommended):**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Next.js
5. Add environment variables (RESEND_API_KEY, etc.)
6. Deploy!

**Deploy to Netlify:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

**Deploy to Custom Server:**
```bash
npm run build
npm run start
```
Use PM2 or similar for process management.

---

## 🎨 Customization Guide

### Change Homepage Content

Edit files in `components/sections/Home1/`:
- `Banner.tsx` - Hero section
- `About.tsx` - About section
- `Service.tsx` - Services section
- `Project.tsx` - Projects section
- etc.

### Add New Page

1. Create folder in `app/`: `app/my-new-page/`
2. Create `page.tsx`:
```typescript
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "My New Page",
  description: "Page description",
};

export default function MyNewPage() {
  return (
    <Layout>
      <h1>My New Page Content</h1>
    </Layout>
  );
}
```

3. Access at: `http://localhost:3000/my-new-page`

---

## 🐛 Troubleshooting

### Build Errors

**Error:** `Module not found: Can't resolve...`
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

**Error:** `Port 3000 is already in use`
```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Form Not Working

1. Check browser console for errors
2. Verify API route exists: `app/api/contact/route.ts`
3. Check environment variables in `.env.local`
4. Test API endpoint: `http://localhost:3000/api/contact`

### Images Not Loading

- Verify images exist in `public/images/`
- Use correct paths: `src="/images/logo.png"` (with leading slash)
- For Next.js Image component: `src={require("@/public/images/logo.png")}`

### TypeScript Errors

```bash
# Check for type errors
npm run build

# If errors persist, check tsconfig.json
```

---

## 🔧 Environment Variables

Create `.env.local` file:

```bash
# Email Service
RESEND_API_KEY=your_api_key_here
# or
SENDGRID_API_KEY=your_api_key_here

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Optional: Other services
# Add your API keys here
```

---

## 📱 Browser Support

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🆘 Getting Help

### Documentation
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs

### Common Issues
Check `THEMEFOREST-FIXES.md` for details on what was fixed.

### Support
For support with this template, contact through ThemeForest.

---

## ✅ Checklist After Installation

- [ ] Dependencies installed (`npm install`)
- [ ] Development server runs (`npm run dev`)
- [ ] Homepage loads at http://localhost:3000
- [ ] Contact form email configured
- [ ] Site metadata updated
- [ ] Images replaced with your content
- [ ] Colors customized
- [ ] Build succeeds (`npm run build`)
- [ ] Production server runs (`npm run start`)

---

**🎉 You're all set! Start building your website.**

For detailed fix information, see `THEMEFOREST-FIXES.md`

