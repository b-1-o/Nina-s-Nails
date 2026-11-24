// ZhuZhu's currently published online booking destination is Zoca.
// Replace BOOKING_URL with the salon's confirmed Booksy profile URL when it is available.
// Booksy's embedded widget script is business-specific and must come from the salon's own Booksy account.
export const BOOKING_URL = "https://zhuzhubeautynorthhollywood.zoca.com/booking";
export const BOOKSY_BOOKING_URL = "YOUR_BOOKSY_LINK_HERE";

export const SALON_NAME = "ZhuZhu Beauty & Nail Salon";
export const SALON_ADDRESS = "13104 1/2 Sherman Way, North Hollywood, CA 91605";
export const SALON_PHONE = "(818) 863-3111";
export const PHONE_LINK = "tel:+18188633111";
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=13104%201%2F2%20Sherman%20Way%2C%20North%20Hollywood%2C%20CA%2091605";

// Hours currently displayed by ZhuZhu's public Zoca listing, in America/Los_Angeles time.
export const HOURS = [
  { day: "Sunday", open: "10:00", close: "20:00" },
  { day: "Monday", open: null, close: null },
  { day: "Tuesday", open: "10:00", close: "20:00" },
  { day: "Wednesday", open: "10:00", close: "12:00" },
  { day: "Thursday", open: "10:00", close: "20:00" },
  { day: "Friday", open: "10:00", close: "20:00" },
  { day: "Saturday", open: "10:00", close: "19:00" },
];

export const SERVICES = [
  {
    id: "french",
    number: "01",
    title: "Signature French Manicure",
    description: "A timeless silhouette, refined to your shape. From a sheer, natural finish to a crisp French tip, every detail is considered.",
    priceNote: "View current pricing when booking",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
    alt: "A refined, natural manicure with a glossy finish",
  },
  {
    id: "art",
    number: "02",
    title: "Custom Nail Art",
    description: "Your inspiration, translated into a one-of-a-kind set. Explore delicate detailing, tonal textures, fine lines and custom color stories.",
    priceNote: "Priced according to your design",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=85",
    alt: "Close-up of detailed nail art",
  },
  {
    id: "pedicure",
    number: "03",
    title: "Premium Pedicure",
    description: "A restorative pause for beautifully cared-for feet. Settle in, slow down and enjoy thoughtful attention from first touch to final polish.",
    priceNote: "View current pricing when booking",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=85",
    alt: "A clean, polished beauty treatment detail",
  },
  {
    id: "extensions",
    number: "04",
    title: "Full Set Extensions",
    description: "Beautiful length with balance, structure and a finish that feels like you. Choose your preferred shape, length and final expression.",
    priceNote: "View current pricing when booking",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=85",
    alt: "Sculpted nails with a refined glossy finish",
  },
];

export const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
    alt: "Soft neutral manicure with a glassy finish",
    title: "The Modern Classic",
    category: "THE SIGNATURE",
  },
  {
    src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=85",
    alt: "Artful nail design with delicate detailing",
    title: "Art in the Details",
    category: "NAIL ART",
  },
  {
    src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=85",
    alt: "A close-up of a polished nail treatment",
    title: "A Study in Shape",
    category: "THE FINISH",
  },
];

export const TESTIMONIALS = [
  {
    quote: "The best salon I've ever been to... beautiful atmosphere, all very clean, and most importantly, they have an autoclave.",
    name: "Magi Bachar",
    detail: "A ZhuZhu guest",
  },
  {
    quote: "Lika is the best...",
    name: "Nova Antares",
    detail: "A ZhuZhu guest",
  },
];

// Add the salon's verified profile URLs here. Empty values are deliberately not rendered.
export const SOCIAL_LINKS = {
  instagram: "",
  facebook: "",
};
