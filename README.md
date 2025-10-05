# ChatPersona AI Landing Page

A premium, AI-centered SaaS landing page for ChatPersona AI - an AI-powered platform that helps content creators boost their revenue through personalized AI personas.

## Features

- **Premium Design**: Modern, clean aesthetic with custom color palette and typography
- **Responsive Layout**: Optimized for mobile and desktop devices
- **Interactive Components**: Smooth animations and hover effects
- **Persona Showcase**: Categorized display of AI personas (Women, Men, LGBTQ+)
- **Pricing Tiers**: Clear subscription plans with feature comparison
- **Social Proof**: Testimonials and user statistics
- **Performance Optimized**: Built with Next.js 14 and modern web standards

## Design System

### Colors
- **Background**: `#F2E9F0` with gradient overlays
- **Primary Purple**: `#C26FD5`
- **Secondary Green**: `#DEF3A7`
- **CTA Orange**: `#FF5C00`
- **Purple Text**: `#A640BA`
- **Gradient Colors**: `#05AAEA`, `#AB6FC2`, `#DAFA80` (all at 55% opacity)

### Typography
- **Headings**: Rifton (premium, bold)
- **Body Text**: Manrope (clean, readable)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main landing page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Features.tsx        # Features and benefits
│   ├── Personas.tsx        # Persona showcase with filtering
│   ├── Pricing.tsx         # Pricing tiers
│   ├── Testimonials.tsx    # User testimonials and stats
│   └── Footer.tsx          # Footer with links
├── assets/                 # Persona images and demo screenshots
└── public/                 # Static assets
```

## Customization

The landing page is built with modularity in mind. Each section is a separate component that can be easily modified:

- **Colors**: Update `tailwind.config.js` for color changes
- **Content**: Modify component files for text and layout changes
- **Images**: Replace assets in the `assets/` folder
- **Styling**: Adjust CSS classes or add custom styles

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/product-dot/chatpersona-ai)

**One-Click Deploy**: Click the button above to deploy directly to Vercel with zero configuration!

### Manual Deployment

The project is ready for deployment on Vercel, Netlify, or any other Next.js hosting platform.

```bash
npm run build
npm start
```

### Environment Variables

**No environment variables required!** This is a static Next.js website that works out of the box.

## License

© 2024 ChatPersonas.ai. All rights reserved.

