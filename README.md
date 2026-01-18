# Lawrence Plumbing and Backflow, Inc. Website

A professional Next.js website for Lawrence Plumbing and Backflow, Inc., featuring modern design, responsive layout, and integrated Google Reviews.

## Features

- **Modern, Professional Design**: Clean layout with deep navy/charcoal color scheme
- **Responsive Layout**: Mobile-first design that works on all devices
- **Google Reviews Integration**: Displays real customer reviews from Google Business Profile
- **Service Showcase**: Comprehensive overview of plumbing and backflow services
- **Fast Performance**: Optimized for speed and SEO
- **TypeScript & Tailwind CSS**: Modern development stack

## Google Reviews Integration

This website fetches and displays real customer reviews from your Google Business Profile. See `GOOGLE_REVIEWS_SETUP.md` for detailed setup instructions.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Google Reviews (Optional):**
   - Copy `.env.local` and add your Google Places API key and Place ID
   - See `GOOGLE_REVIEWS_SETUP.md` for detailed instructions
   - If not configured, the site will show fallback testimonials

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to see the website

## Project Structure

```
src/
├── app/
│   ├── api/google-reviews/    # API route for Google Reviews
│   ├── globals.css            # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main homepage
├── components/
│   ├── Hero.tsx              # Hero section
│   ├── Testimonials.tsx      # Reviews/testimonials
│   ├── WhyUs.tsx             # Company differentiators
│   ├── Services.tsx          # Services overview
│   ├── HowItWorks.tsx        # Process explanation
│   └── Footer.tsx            # Site footer
└── lib/
    └── google-reviews.ts     # Google Reviews utilities
```

## Customization

### Content Updates
- Edit component files in `src/components/` to update content
- Modify service listings in `Services.tsx`
- Update company information in `Footer.tsx`

### Styling
- Colors and typography are configured in `globals.css`
- Component-specific styling uses Tailwind CSS classes
- Color scheme: Deep navy/charcoal with blue accents

### Contact Information
- Update phone numbers and contact info in `Footer.tsx` and `Hero.tsx`
- Add your actual business address and service area

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
This is a standard Next.js application and can be deployed to any platform supporting Node.js.

## Environment Variables

```env
# Google Places API (Optional)
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_api_key
NEXT_PUBLIC_GOOGLE_PLACE_ID=your_place_id
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
