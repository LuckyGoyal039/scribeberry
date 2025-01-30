'use client';

import Image from 'next/image';
import MicroSoftLogo from '@/public/images/microsoft_logo.png';
import HarvardLogo from '@/public/images/harvard_logo.png';
import HopkinsLogo from '@/public/images/johns_hopkins_logo.png';
import TorontoLogo from '@/public/images/uoft_logo.png';
import CedarsLogo from '@/public/images/cedars_sinai_logo.png';
import AlbertaLogo from '@/public/images/uofa_logo.png';
import MayoLogo from '@/public/images/mayo_logo.png';
import Doctor1 from '@/public/images/sm-a.jpg';
import Doctor2 from '@/public/images/sm-b.jpg';
import Doctor3 from '@/public/images/sm-d.jpg';
import Doctor4 from '@/public/images/sm-i.jpg';
import Doctor5 from '@/public/images/sm-l.jpg';

interface TestimonialProps {
  stars: number;
  content: string;
  role: string;
  name: string;
  location: string;
  imageUrl: any;
}

interface PartnersData {
  id: number;
  name: string;
  logoUrl: any;
}

const partners: PartnersData[] = [
  { id: 1, name: 'Microsoft', logoUrl: MicroSoftLogo },
  { id: 2, name: 'Harvard University', logoUrl: HarvardLogo },
  { id: 3, name: 'Cedars Sinai', logoUrl: CedarsLogo },
  { id: 4, name: 'Johns Hopkins Medicine', logoUrl: HopkinsLogo },
  { id: 5, name: 'University of Toronto', logoUrl: TorontoLogo },
  { id: 6, name: 'University of Alberta', logoUrl: AlbertaLogo },
  { id: 7, name: 'Mayo Clinic', logoUrl: MayoLogo },
];

const testimonials: TestimonialProps[] = [
  {
    stars: 5,
    content:
      "I've been using this for the past week, and so far it's amazing. This will single-handedly save family medicine.",
    role: 'Family Physician',
    name: 'Dr. Smith',
    location: 'Vancouver, BC',
    imageUrl: Doctor1,
  },
  {
    stars: 5,
    content:
      "I have been using it for weeks now! Can't live without it lol - love how it constructs my sentences from bare bone chart notes I jot down as I'm speaking to my patients.",
    role: 'Physician',
    name: 'Dr. Johnson',
    location: 'Toronto, ON',
    imageUrl: Doctor2,
  },
  {
    stars: 5,
    content:
      'I am an allergist and I use Accuro. I have lots of templates and macros that help me be efficient. But this program takes it to a different level.',
    role: 'Allergist',
    name: 'Dr. Davis',
    location: 'Edmonton, AB',
    imageUrl: Doctor3,
  },
  {
    stars: 5,
    content:
      'Just trying it- WOW! I can see how this will cut down on documentation significantly. Look forward to trying new patient descriptions to see what transpires :)',
    role: 'Family Physician',
    name: 'Dr. Wilson',
    location: 'Calgary, AB',
    imageUrl: Doctor4,
  },
  {
    stars: 5,
    content:
      "The advantage is that it's thorough. I've been using it and I find it extremely useful, especially when sending consult notes to other physicians. It's also really useful at documenting differential diagnoses. The dictation feature is (in my opinion) a game-changer.",
    role: 'Family Physician',
    name: 'Dr. Brown',
    location: 'Toronto, ON',
    imageUrl: Doctor5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(rating)].map((_, index) => (
      <span key={index} className="text-yellow-400">★</span>
    ))}
  </div>
);

const TestimonialCard = ({ stars, content, role, name, location, imageUrl }: TestimonialProps) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <StarRating rating={stars} />
    <p className="mt-4 text-gray-700 text-sm leading-relaxed">{content}</p>
    <div className="mt-6 flex items-center gap-4">
      <Image src={imageUrl} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <p className="font-semibold text-gray-900">{role}</p>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
    </div>
  </div>
);

const Supporters = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 flex justify-center flex-col items-center">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-blue-600 font-semibold text-sm tracking-wide uppercase">OUR SUPPORTERS & PARTNERS</h3>
        <h2 className="mt-2 text-2xl md:text-4xl font-bold text-gray-900">
          Over 10,000 providers love<br />Scribeberry
        </h2>
      </div>

      <div className='max-w-5xl'>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <Image key={partner.id} src={partner.logoUrl} alt={partner.name} className="h-12 object-contain" />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;