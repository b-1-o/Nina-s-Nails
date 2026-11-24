# ZhuZhu Beauty & Nail Salon

An editorial, quiet-luxury website for ZhuZhu Beauty & Nail Salon in North Hollywood, California.

## Stack

- React 19 + Vite
- Framer Motion for micro-interactions, magnetic booking links and image transitions
- GSAP + ScrollTrigger for reveal animations and scroll-linked effects
- Lenis connected to the GSAP ticker for smooth scrolling
- Lucide icons and responsive custom CSS

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Booking integration

All booking CTAs share the reusable `src/components/BookingButton.jsx` component. It accepts a `bookingUrl` prop and opens the external booking provider in a new tab.

ZhuZhu's currently verified booking destination is the salon's Zoca page:

https://zhuzhubeautynorthhollywood.zoca.com/booking

To change providers, update `BOOKING_URL` in `src/data.js` or pass a different `bookingUrl` to an individual `BookingButton`.

Booksy's official website widget uses a unique script generated inside the business's own Booksy account (Business Settings → Online Booking → Your Website). The salon's Booksy-specific widget code/profile URL is not currently present in this repository, so the site intentionally uses the verified Zoca booking destination instead of a guessed Booksy URL.

## Motion and accessibility

- Hero mouse parallax activates only for mouse pointers.
- Custom cursor is disabled on touch devices and when reduced motion is preferred.
- GSAP scroll reveals respect reduced-motion preferences.
- Interactive gallery opens an accessible lightbox with Escape and arrow-key controls.
- Booking actions are external links; there are no embedded booking forms or locally collected booking details.

## Photography

The editorial images are currently illustrative stock-photo placeholders. Replace them with salon-approved photographs before presenting the gallery as ZhuZhu's own portfolio.

## Salon details

**ZhuZhu Beauty & Nail Salon**  
13104 1/2 Sherman Way  
North Hollywood, CA 91605  
(818) 863-3111

Business hours are maintained in `src/data.js`. Confirm holiday and special hours with the salon.
