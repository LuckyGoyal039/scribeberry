'use client';

import { JSX, useState } from 'react';

interface PricingCardProps {
  title: string;
  price?: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
  buttonText?: string;
}

const Pricing = (): JSX.Element => {
  const [isYearly, setIsYearly] = useState<boolean>(true);

  const PricingCard = ({ 
    title, 
    price, 
    description, 
    features, 
    isHighlighted = false, 
    buttonText = "Get Started" 
  }: PricingCardProps): JSX.Element => (
    <div className={`bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-200 ${
      isHighlighted ? 'ring-2 ring-blue-500' : ''
    }`}>
      <h3 className={`text-xl font-semibold ${isHighlighted ? 'text-blue-600' : 'text-gray-900'}`}>
        {title}
      </h3>
      {price && (
        <p className="text-4xl font-bold text-gray-900 mt-4">
          ${price} <span className="text-lg">/ month</span>
        </p>
      )}
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl w-full hover:bg-blue-700 transition-colors">
        {buttonText}
      </button>
      <ul className="mt-4 text-gray-600 space-y-2 text-start">
        {features.map((feature, index) => (
          <li key={index}>✔️ {feature}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 bg-gray-50 min-h-screen">
      <span className="text-xs uppercase font-semibold text-blue-600 bg-blue-50 px-4 py-1 rounded-xl">
        PRICING
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mt-2">
        Charting Your Way
      </h2>
      <p className="text-gray-600 mt-2 text-center max-w-lg">
        Choose from our simple plans, designed to assist healthcare professionals in providing efficient care.
      </p>

      <div className="flex items-center justify-center mt-6 bg-gray-100 rounded-full px-4 py-2">
        <span className={`mr-3 ${!isYearly ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
          Monthly
        </span>
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <div className="w-12 h-6 rounded-full bg-gray-200 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-6">
          </div>
        </label>
        <span className={`ml-3 ${isYearly ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
          Yearly{' '}
          <span className="text-green-500 text-xs uppercase font-semibold bg-green-100 px-2 py-1 rounded-xl ml-1">
            SAVE 11%
          </span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-7xl">
        <PricingCard
          title="Free"
          price="0"
          description="Perfect for trials and getting to know our medical charting tool"
          features={[
            '20 uses per month',
            'Basic support'
          ]}
          buttonText="Start for Free"
        />

        <PricingCard
          title="Pro"
          price={isYearly ? '89' : '99'}
          description="Ideal for individual clinicians, small clinics & regular usage"
          features={[
            'Unlimited daily uses',
            'Dictations',
            'Transcriptions',
            'Ambient scribes (in-person & remote)',
            'Clinical decision making',
            'Medical templates',
            'Premium support'
          ]}
          isHighlighted={true}
          buttonText="Subscribe now"
        />

        <PricingCard
          title="Enterprise"
          description="Tailored to larger clinics, care centers and hospital networks"
          features={[
            'Everything in Pro, plus',
            'Custom integrations',
            'Custom templates',
            'White labeling',
            'Priority support',
            'Custom user training'
          ]}
          buttonText="Contact Us"
        />
      </div>
    </div>
  );
};

export default Pricing;