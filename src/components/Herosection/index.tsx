'use client'
import React from 'react';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';
import TalkBack from '@/public/images/3-talk_back.gif';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router=useRouter()
  return (
    <div className="relative min-h-[50vh] mt-[-1px]">
      {/* First Half: White */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#f8f9fa]"></div>

      {/* Second Half: Black */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-slate-900"></div>

      {/* Inner Black Section */}
      <div className="relative max-w-7xl bg-black text-white rounded-2xl shadow-lg p-12 mx-5 lg:mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-indigo-400 font-medium text-xs md:text-xl">TRY SCRIBEBERRY NOW</p>
              <h1 className="text-xl md:text-5xl font-bold">
                Medical AI Scribe and Charting
              </h1>
            </div>

            <p className="text-gray-400 text-sm md:text-lg">
              Scribeberry is an AI medical scribe and documentation tool. The feeling is so magical you have to try it for yourself.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-indigo-500" />
                <span className='text-sm md:text-lg text-gray-500'>HIPAA compliant</span>
              </div>

              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-indigo-500" />
                <span className='text-sm md:text-lg text-gray-500'>PIPEDA compliant</span>
              </div>
            </div>

            <button
              onClick={() => router.push("/auth/signin")}
              className="bg-indigo-600 hover:bg-indigo-700 transition-colors px-3 md:px-6 py-3 rounded-lg text-white inline-flex items-center gap-2 text-sm md:text-lg">
              Log in or Sign up (free trial)
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="bg-indigo-400/10 rounded-2xl p-4">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <Image
                  src={TalkBack}
                  alt="Scribeberry Interface Demo"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
