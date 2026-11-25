const responsivePhoto = (photoId) => {
  const url = (width) => `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=76`;
  return {
    src: url(800),
    srcSet: `${url(480)} 480w, ${url(800)} 800w, ${url(1200)} 1200w`,
  };
};

const manicurePhoto = responsivePhoto("photo-1679580521391-88790c53cdd8");
const pedicurePhoto = responsivePhoto("photo-1610992015732-2449b76344bc");
const gelPhoto = responsivePhoto("photo-1632345031435-8727f6897d53");
const artPhoto = responsivePhoto("photo-1604654894610-df63bc536371");

export const SALON_NAME = "Nina's Nails";
export const SALON_ADDRESS = "12912 Sherman Way, North Hollywood, CA 91605";
export const SALON_PHONE = "(818) 821-1186";
export const PHONE_LINK = "tel:+18188211186";
export const INSTAGRAM_URL = "https://www.instagram.com/nailsbynina86/";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/93DPF2gSKcKNkLc97";
export const GOOGLE_REVIEWS_URL = GOOGLE_MAPS_URL;
export const APPLE_MAPS_URL = `https://maps.apple.com/?daddr=${encodeURIComponent(SALON_ADDRESS)}&q=${encodeURIComponent(SALON_NAME)}`;
export const GEO_MAPS_URL = `geo:0,0?q=${encodeURIComponent(SALON_NAME + ", " + SALON_ADDRESS)}`;
export const LOCATION_NOTE = "Vardashen Marketplace";

export const GOOGLE_RATING = "4.2";
export const GOOGLE_REVIEW_COUNT = 161;

export const HOURS = [
  { day: "Sunday", open: "09:30", close: "17:00" },
  { day: "Monday", open: "09:30", close: "19:00" },
  { day: "Tuesday", open: "09:30", close: "19:00" },
  { day: "Wednesday", open: "09:30", close: "19:00" },
  { day: "Thursday", open: "09:30", close: "19:00" },
  { day: "Friday", open: "09:30", close: "19:00" },
  { day: "Saturday", open: "09:30", close: "19:00" },
];

export const SERVICES = [
  {
    id: "manicure",
    number: "01",
    title: "Manicure",
    description: "Thoughtful nail care, shaping and polish for a clean, well-finished look. Call to ask about available manicure options.",
    priceNote: "Call for current options and pricing",
    image: manicurePhoto.src,
    imageSrcSet: manicurePhoto.srcSet,
    alt: "A neat manicure with a glossy finish",
  },
  {
    id: "pedicure",
    number: "02",
    title: "Pedicure",
    description: "Take a little time for yourself with a fresh pedicure. Guests have highlighted the salon's welcoming atmosphere and gentle pedicure service.",
    priceNote: "Call for current options and pricing",
    image: pedicurePhoto.src,
    imageSrcSet: pedicurePhoto.srcSet,
    alt: "A close-up beauty treatment with polished nails",
  },
  {
    id: "gel",
    number: "03",
    title: "Gel & Nail Enhancements",
    description: "Ask the team about gel polish, extensions and enhancement options, including the styles currently available at the salon.",
    priceNote: "Confirm service availability by phone",
    image: gelPhoto.src,
    imageSrcSet: gelPhoto.srcSet,
    alt: "A manicure with a detailed glossy finish",
  },
  {
    id: "nail-art",
    number: "04",
    title: "Nail Art & Details",
    description: "Bring a reference or describe the look you have in mind. The team can let you know which designs and details they can accommodate.",
    priceNote: "Design pricing varies — call to confirm",
    image: artPhoto.src,
    imageSrcSet: artPhoto.srcSet,
    alt: "Nail art inspiration with a refined finish",
  },
];

export const GALLERY = [
  {
    src: artPhoto.src,
    srcSet: artPhoto.srcSet,
    alt: "Nail art inspiration with a detailed finish",
    title: "A Little Detail",
    category: "NAIL ART",
  },
  {
    src: manicurePhoto.src,
    srcSet: manicurePhoto.srcSet,
    alt: "Neutral manicure inspiration",
    title: "Clean & Classic",
    category: "MANICURE",
  },
  {
    src: pedicurePhoto.src,
    srcSet: pedicurePhoto.srcSet,
    alt: "Pedicure and polish inspiration",
    title: "Fresh Finish",
    category: "PEDICURE",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Guests mention a friendly team, enjoyable pedicures and prices they describe as reasonable.",
    name: "Guest feedback",
    detail: "Summary of a Google review",
  },
  {
    quote: "A recent guest highlighted a warm welcome, a drink offered on arrival and a gentle pedicure.",
    name: "Guest feedback",
    detail: "Summary of a Google review",
  },
];

export const SOCIAL_LINKS = {
  instagram: INSTAGRAM_URL,
};
