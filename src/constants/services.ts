export interface PricingOption {
  label: string;
  price: string;
  duration: string;
}

export interface Service {
  id: string;
  title: string;
  category: 'IPL Laser' | 'BTL Treatments' | 'Facials' | 'Aesthetics';
  basePrice: string;
  duration: string;
  image: string;
  description: string;
  options?: PricingOption[];
}

export const SERVICES: Service[] = [
  {
    id: 'visia-analysis',
    title: 'Visia Skin Analysis',
    category: 'Facials',
    basePrice: '£50',
    duration: '20 mins',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800',
    description: 'Advanced digital imaging that reveals what lies beneath the surface of your skin, allowing for a truly personalized treatment plan.'
  },
  {
    id: 'hydrafacial-classic',
    title: 'Hydrafacial Classic',
    category: 'Facials',
    basePrice: '£129',
    duration: '30 mins',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    description: 'Facial cleaning and rejuvenation. A multi-step treatment that cleanses, exfoliates, and extracts impurities while infusing the skin with potent antioxidants.'
  },
  {
    id: 'emsella-pelvic',
    title: 'Pelvic Floor Treatment (Emsella chair)',
    category: 'BTL Treatments',
    basePrice: 'from £250',
    duration: '30 mins',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
    description: 'A non-invasive treatment for urinary incontinence and pelvic floor strengthening using high-intensity focused electromagnetic technology.',
    options: [
      { label: 'Single session', price: '£250', duration: '30 mins' },
      { label: 'Course of 6', price: '£1200', duration: '30 mins' }
    ]
  },
  {
    id: 'emsculpt-muscle',
    title: 'Muscle Sculpt Treatment (EMSCULPT)',
    category: 'BTL Treatments',
    basePrice: 'from £378',
    duration: '30 mins',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
    description: 'High-intensity electromagnetic therapy to build muscle and burn fat simultaneously.',
    options: [
      { label: 'Single session', price: '£378', duration: '30 mins' },
      { label: 'Course of 4', price: '£1278', duration: '30 mins' },
      { label: 'Course of 7', price: '£1778', duration: '30 mins' },
      { label: 'Course of 8', price: '£2016', duration: '30 mins' },
      { label: 'Course of 14', price: '£3378', duration: '30 mins' }
    ]
  },
  {
    id: 'ipl-facial',
    title: 'Intensive Pulse Light Facial Treatment',
    category: 'IPL Laser',
    basePrice: 'from £199',
    duration: '30 mins',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    description: 'Targeted treatment for acne and scarring using advanced IPL technology to improve skin texture and tone.',
    options: [
      { label: 'Single session', price: '£199', duration: '30 mins' },
      { label: 'Course of 4', price: '£678', duration: '30 mins' },
      { label: 'Course of 8', price: '£1278', duration: '30 mins' },
      { label: 'Course of 12', price: '£1798', duration: '30 mins' }
    ]
  },
  {
    id: 'ipl-back',
    title: 'Intensive Pulse Light Back Treatment',
    category: 'IPL Laser',
    basePrice: 'from £399',
    duration: '30 mins',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
    description: 'Specialized IPL treatment for acne and scarring on the back area.'
  },
  {
    id: 'facial-harmonization',
    title: 'Facial Harmonization',
    category: 'Aesthetics',
    basePrice: 'from £450',
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    description: 'A bespoke combination of dermal fillers and toxins to balance facial proportions.'
  },
  {
    id: 'anti-wrinkle',
    title: 'Anti-wrinkle (BOTOX)',
    category: 'Aesthetics',
    basePrice: 'from £150',
    duration: '30 mins',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800',
    description: 'Professional toxin treatments to smooth fine lines and prevent wrinkle formation.'
  },
  {
    id: 'lip-fillers',
    title: 'Lip Fillers',
    category: 'Aesthetics',
    basePrice: '£250',
    duration: '45 mins',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800',
    description: 'Subtle enhancement of lip volume and definition using premium hyaluronic acid fillers.'
  }
];

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  treatment: string | null;
  practitioner: string | null;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    "id": 1,
    "name": "Vivian",
    "rating": 5,
    "text": "Gentle and kind, super worth it",
    "treatment": "Facials - Foto RF™ Skin Rejuvenation",
    "practitioner": "Jullia",
    "date": "about 1 year ago"
  },
  {
    "id": 2,
    "name": "Clara",
    "rating": 5,
    "text": "Decent facial, lovely setting.",
    "treatment": "Facials - Foto RF™ Skin Rejuvenation",
    "practitioner": "Alexis",
    "date": "about 1 year ago"
  },
  {
    "id": 3,
    "name": "Hu",
    "rating": 5,
    "text": "A very perfect treatment experience, every staff member here showed me their professionalism and friendliness.",
    "treatment": "Facials - Foto RF™ Skin Rejuvenation",
    "practitioner": "Xu",
    "date": "over 1 year ago"
  },
  {
    "id": 4,
    "name": "Reiko",
    "rating": 5,
    "text": "Very comfortable environment with experienced staffs.",
    "treatment": "Classic Facials",
    "practitioner": "Alexis",
    "date": "over 1 year ago"
  },
  {
    "id": 5,
    "name": "Miaoling",
    "rating": 5,
    "text": "Good",
    "treatment": "Facials - Foto RF™ Skin Rejuvenation",
    "practitioner": "Alexis",
    "date": "over 1 year ago"
  },
  {
    "id": 6,
    "name": "Lucy",
    "rating": 5,
    "text": "Thank you 🤩 really happy recommend and will be back for more",
    "treatment": "Facials - Foto RF™ Skin Rejuvenation",
    "practitioner": "Alexis",
    "date": "almost 2 years ago"
  },
  {
    "id": 7,
    "name": "Nanna",
    "rating": 5,
    "text": "Second treatment, and very happy. Looking forward to seeing the results!",
    "treatment": "Laser Treatments - Skin Rejuvenation",
    "practitioner": "Alexis",
    "date": "almost 2 years ago"
  },
  {
    "id": 8,
    "name": "Nanna",
    "rating": 5,
    "text": "Had IPL treatment for rosacea. Very thorough and skillful. Looking forward to see the fully healed results.",
    "treatment": "Laser Treatments - Skin Rejuvenation",
    "practitioner": "Alexis",
    "date": "almost 2 years ago"
  },
  {
    "id": 9,
    "name": "Anonymous",
    "rating": 5,
    "text": "I came here for a VISIA facial analysis. The coordinator was very enthusiastic and attentive! The practitioner carefully explained my current skin condition and recommended the right treatments and products for me, the whole process was very comfortable!",
    "treatment": "Classic Facials",
    "practitioner": "Alexis",
    "date": "almost 2 years ago"
  },
  {
    "id": 10,
    "name": "Houda Chkb",
    "rating": 1,
    "text": "I had injections (bbl) done with this person few months ago... it was very badly done, not proportional at all and was injected too deep... it was so painful everyday.",
    "treatment": "BBL Injections",
    "practitioner": "Julia",
    "date": "3 months ago"
  },
  {
    "id": 11,
    "name": "Monalisa Santos",
    "rating": 5,
    "text": "Beautiful environment with very friendly and kind people. Excellent beauty treatments and care... Julia is very sweet.",
    "treatment": "Lip Treatment",
    "practitioner": "Julia",
    "date": "a year ago"
  },
  {
    "id": 12,
    "name": "Tiago Robson Rubleski",
    "rating": 5,
    "text": "Great service! I loved the result! Nice space and incredible view",
    "treatment": null,
    "practitioner": null,
    "date": "a year ago"
  },
  {
    "id": 13,
    "name": "Alexandra Novais",
    "rating": 5,
    "text": "Julia the best eye lashes and Botox ever.",
    "treatment": "Eyelashes & Botox",
    "practitioner": "Julia",
    "date": "a year ago"
  },
  {
    "id": 14,
    "name": "Thalita Lorrany",
    "rating": 5,
    "text": "I was seen by Dr. Julia here in Belgium and felt extremely well welcomed. Very happy and satisfied.",
    "treatment": null,
    "practitioner": "Dr. Julia",
    "date": "2 months ago"
  },
  {
    "id": 15,
    "name": "Joicy Miranda",
    "rating": 5,
    "text": "I've been going to the clinic for almost two years... best service, education and reception. 100% confidence.",
    "treatment": null,
    "practitioner": null,
    "date": "a year ago"
  }
];

export const CLINIC_INFO = {
  name: "Julia Furlan Clinic",
  altName: "AI Beauty Clinic",
  tagline: "A new concept in health and aesthetics",
  address: "31 Tayside House, Pepper Street, London, E14 9RP",
  locations: ["London", "Barcelona", "Madrid", "Brussels", "Portugal"],
  hours: {
    tue_fri: "10:00 AM - 7:00 PM",
    sat: "10:00 AM - 2:00 PM",
    sun_mon: "Closed"
  },
  rating: 4.8,
  reviewCount: 9,
  featuredTestimonial: {
    text: "Gentle and kind, super worth it",
    author: "Vivian"
  }
};
