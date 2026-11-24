# ZhuZhu Beauty & Nail Salon

A quiet-luxury, mobile-first website for ZhuZhu Beauty & Nail Salon in North Hollywood, California.

## Stack

- React 19 + Vite
- Framer Motion for restrained transitions
- Lenis for smooth scrolling (respects reduced-motion preferences)
- Lucide icons
- Custom responsive CSS with no utility framework runtime

## Local development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Deployment

The GitHub Actions workflow at `.github/workflows/deploy.yml` builds the Vite app and deploys the `dist` directory to GitHub Pages whenever `main` is updated. The Vite base path is configured for the project site:

`https://b-1-o.github.io/zhu-zhu/`

Repository Pages settings should use **GitHub Actions** as the build and deployment source.

## Site features

- Responsive editorial hero, philosophy, featured services, gallery and guest testimonials
- Interactive service accordion with matching imagery
- Direct links to the salon's online booking page, phone and map directions
- Concierge-style appointment enquiry that opens a pre-filled SMS draft; it does not send without the visitor's confirmation
- Live open/closed status calculated in the America/Los_Angeles time zone from the listed weekly hours
- Mobile navigation, accessible controls, reduced-motion support and a lightweight custom cursor accent on fine pointers

## Photography

The current editorial images are stock-photo placeholders used to establish the visual direction. Replace them with salon-approved interior and nail-work photography before treating the gallery as a portfolio of ZhuZhu's own work.

## Salon details

**ZhuZhu Beauty & Nail Salon**  
13104 1/2 Sherman Way  
North Hollywood, CA 91605  
(818) 863-3111

Online booking: https://zhuzhubeautynorthhollywood.zoca.com/booking

Business hours are maintained in `src/data.js`. Confirm holiday or special hours with the salon.
