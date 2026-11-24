# ZhuZhu Beauty & Nail Salon

A mobile-first, quiet-luxury website for ZhuZhu Beauty & Nail Salon in North Hollywood, California.

## Stack

- React 19 + Vite
- Tailwind CSS v4 through the official Vite plugin
- Framer Motion for spring interactions, scroll reveals, accordion layout and swipe gestures
- Lenis for smooth wheel scrolling (native touch scrolling is preserved on phones)
- Lucide icons

## Development

npm install
npm run dev

Production build:

npm run build
npm run preview

## Booking destination

All booking actions use src/components/BookingWidget.jsx. It accepts a bookingUrl prop.

ZhuZhu's currently published booking page is Zoca:

https://zhuzhubeautynorthhollywood.zoca.com/booking

To switch to Booksy, pass the salon's confirmed Booksy profile URL to bookingUrl or update BOOKING_URL in src/data.js.

Booksy also offers an embedded website widget, but its code is unique to each business. The owner must copy it from their own Booksy account under Business Settings → Online Booking → Your Website. No ZhuZhu-specific Booksy widget code or Booksy profile URL was available when this version was built.

## Mobile experience

- Designed mobile-first around a 390px viewport and thumb-friendly 56px+ actions
- Native horizontal swipe carousel with scroll snapping
- No custom cursor or hover-dependent controls
- Smart header hides while scrolling down and returns while scrolling up
- Mobile booking bar respects iPhone safe-area insets
- Reduced-motion preference support
- Lenis smooths wheel scrolling on desktop while native touch scrolling remains enabled on mobile

## Content notes

- Current weekly hours are copied from ZhuZhu's published Zoca listing and are maintained in src/data.js. Confirm special/holiday hours with the salon; the listing shows an unusual Wednesday closing time.
- Service prices are not published in the verified source data, so the accordion directs guests to the current booking menu instead of displaying invented prices.
- The salon's verified Instagram/Facebook profile URLs were not found. Add them to SOCIAL_LINKS in src/data.js; the footer will show only configured links.
- Editorial photography is currently illustrative stock photography. Replace it with salon-approved photos before presenting the lookbook as a gallery of ZhuZhu's own work.

## Salon

**ZhuZhu Beauty & Nail Salon**  
13104 1/2 Sherman Way  
North Hollywood, CA 91605  
(818) 863-3111
