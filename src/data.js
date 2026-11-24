// ZhuZhu currently uses its verified Zoca booking page. Replace this only when the salon supplies a confirmed Booksy profile/widget.
export const BOOKING_URL = "https://zhuzhubeautynorthhollywood.zoca.com/booking";
export const BOOKING_PROVIDER = "Zoca";
export const SALON_PHONE = "(818) 863-3111";
export const PHONE_LINK = "tel:+18188633111";
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=13104%201%2F2%20Sherman%20Way%2C%20North%20Hollywood%2C%20CA%2091605";
export const MAP_EMBED_URL = "https://www.google.com/maps?q=13104%201%2F2%20Sherman%20Way%2C%20North%20Hollywood%2C%20CA%2091605&output=embed";

export const HOURS = [
  { day: "Monday", open: null, close: null },
  { day: "Tuesday", open: "10:00", close: "20:00" },
  { day: "Wednesday", open: "10:00", close: "12:00" },
  { day: "Thursday", open: "10:00", close: "20:00" },
  { day: "Friday", open: "10:00", close: "20:00" },
  { day: "Saturday", open: "10:00", close: "19:00" },
  { day: "Sunday", open: "10:00", close: "20:00" }
];

export const SERVICES = [
  { id: "french", number: "01", title: "Signature French Manicure", description: "A timeless silhouette, refined to your shape. From a sheer natural finish to a crisp, modern French tip, every detail is considered.", note: "The timeless signature", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1100&q=88", alt: "Elegant natural manicure with a polished finish" },
  { id: "art", number: "02", title: "Bespoke Nail Art", description: "Your inspiration, translated into a one-of-a-kind set. Explore delicate detailing, tonal textures, fine lines and custom color stories.", note: "Made entirely your own", image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1100&q=88", alt: "Detailed custom nail art" },
  { id: "pedicure", number: "03", title: "Premium Pedicure", description: "A restorative pause for beautifully cared-for feet. Settle in, slow down and enjoy thoughtful attention from first touch to final polish.", note: "A moment to reset", image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1100&q=88", alt: "Premium beauty and nail care detail" },
  { id: "extensions", number: "04", title: "Full Set Extensions", description: "Beautiful length with balance, structure and a finish that feels like you. Choose your preferred shape, length and final expression.", note: "A beautifully tailored set", image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1100&q=88", alt: "Long sculpted nails with a glossy finish" }
];

export const GALLERY = [
  { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=88", alt: "Soft neutral manicure detail", title: "The Modern Classic", shape: "gallery-tall" },
  { src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=88", alt: "Editorial nail art detail", title: "Art in the Details", shape: "gallery-wide" },
  { src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=88", alt: "Close-up of a refined nail design", title: "A Study in Shape", shape: "gallery-small" },
  { src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1000&q=88&sat=-12", alt: "Glossy manicure in a quiet palette", title: "Quietly Distinctive", shape: "gallery-bottom" }
];

export const TESTIMONIALS = [
  { quote: "The best salon I've ever been to... beautiful atmosphere, all very clean, and most importantly, they have an autoclave.", name: "Magi Bachar", detail: "A guest at ZhuZhu" },
  { quote: "Lika is the best...", name: "Nova Antares", detail: "A guest at ZhuZhu" }
];
