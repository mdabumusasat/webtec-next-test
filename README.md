# Webtec - Business & Finance Consulting Next.js Template

A modern, professional business and finance consulting template built with Next.js 15, TypeScript, and React 18.

## 🚀 Features

- ✅ Built with Next.js 15 (App Router)
- ✅ TypeScript for type safety
- ✅ 7 Homepage variants
- ✅ Multiple inner pages (About, Services, Projects, Contact, Shop, etc.)
- ✅ Fully responsive design
- ✅ Dark mode support
- ✅ Smooth animations (WOW.js, Framer Motion)
- ✅ Contact forms with validation
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Accessibility enhanced

## 📋 Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

## 🛠️ Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
Webtec-next/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── elements/          # Reusable UI elements
│   ├── layout/            # Layout components (Header, Footer)
│   └── sections/          # Page sections
├── public/
│   ├── css/              # Stylesheets
│   ├── fonts/            # Font files
│   └── images/           # Images and assets
└── types/                # TypeScript type definitions
```

## 🎨 Available Pages

### Home Pages
- `/` - Home 1
- `/index-2` - Home 2
- `/index-3` - Home 3

### Inner Pages
- `/page-about` - About Us
- `/page-services` - Services
- `/page-service-details` - Service Details
- `/page-projects` - Projects
- `/page-project-details` - Project Details
- `/page-team` - Team
- `/page-team-details` - Team Member Details
- `/page-pricing` - Pricing
- `/page-faq` - FAQ
- `/page-testimonial` - Testimonials
- `/page-contact` - Contact
- `/news-grid` - News/Blog Grid
- `/news-details` - News/Blog Details
- `/shop-products` - Shop Products
- `/shop-products-sidebar` - Shop with Sidebar
- `/shop-product-details` - Product Details
- `/shop-cart` - Shopping Cart
- `/shop-checkout` - Checkout

## ⚙️ Configuration

### Contact Form Setup

The contact forms use the `/api/contact` endpoint. To integrate with your email service:

1. Open `app/api/contact/route.ts`
2. Implement your preferred email service (SendGrid, Mailgun, Resend, etc.)
3. Update the API logic with your credentials

Example with Resend:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'noreply@yourdomain.com',
  to: 'contact@yourdomain.com',
  subject: 'New Contact Form Submission',
  html: `<p>Name: ${body.form_name}</p>...`
});
```

### Dark Mode

Dark mode is controlled via the Layout component. Users can toggle between light and dark themes.

### Customization

1. **Colors**: Update `public/css/style.css` and `public/css/style-dark.css`
2. **Fonts**: Modify font imports in `app/layout.tsx`
3. **Images**: Replace images in `public/images/`
4. **Content**: Update component files in `components/sections/`

## 🔧 Technologies Used

- **Next.js 15** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Swiper** - Modern slider
- **WOW.js** - Scroll animations
- **Framer Motion** - Advanced animations
- **React CountUp** - Animated counters
- **Bootstrap 5** - CSS framework (customized)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

1. Delete `node_modules` and `.next` folders
2. Run `npm install` again
3. Run `npm run build`

### Form Submissions Not Working

1. Verify the `/api/contact` route is properly configured
2. Check browser console for errors
3. Ensure your email service credentials are correct

## 📝 License

This template is licensed for use according to ThemeForest's standard license terms.

## 🤝 Support

For support, please contact through ThemeForest or open an issue in the repository.

## 🔄 Updates

Check for updates regularly to get new features, bug fixes, and improvements.

---

Built with ❤️ using Next.js
