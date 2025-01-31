'use client'
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

import DoctorAvatar from '@/public/images/h.png';
import SurgeonsAvatar from '@/public/images/e.png';
import NurseAvatar from '@/public/images/f.png';
import SpecialistsAvatar from '@/public/images/g.png';
import SbDemo1 from '@/public/images/sb-demo-1.gif';
import { useRouter } from 'next/navigation';

interface UserType {
  role: string;
  avatar: any;
  style: string
}

const users: UserType[] = [
  { role: 'Family doctors', avatar: DoctorAvatar, style: 'left-[30px] 2xl:left-[80px]' },
  { role: 'Surgeons', avatar: SurgeonsAvatar, style: 'left-[100px] 2xl:left-[200px] top-[300px]' },
  { role: 'Nurse practitioners', avatar: NurseAvatar, style: 'right-[30px] 2xl:right-[80px]' },
  { role: 'Specialists', avatar: SpecialistsAvatar, style: 'right-[100px] 2xl:right-[200px] top-[300px]' }
];

export default function IntroBanner() {
  const router=useRouter()
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Head>
        <title>Medical Documentation Tool</title>
        <meta name="description" content="AI medical scribing and documentation tool" />
      </Head>

      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Automatically generate
          <span className="block text-blue-500">
            <Typewriter words={["SOAP notes", "referral Letters", "dictations"]} loop={false} cursor cursorBlinking />
          </span>
        </h1>
        <p className="text-gray-400 mb-8 text-lg max-w-xl mx-auto">
          Scribeberry is an AI medical scribing, charting, and documentation tool for all health care professionals. HIPAA & PIPEDA compliant ✓
        </p>

        <div className="flex flex-col items-center justify-center gap-3 w-full">
          <button 
          onClick={()=>router.push("/auth/signin")}
          className="bg-[#3f3eed] hover:bg-[#4141f9] text-white px-6 py-3 rounded-full text-sm w-full md:w-auto">
            Log in or Sign up (free trial)
          </button>
          <button className="text-gray-400 hover:text-gray-300 text-sm w-full md:w-auto">
            Request a demo
          </button>
        </div>

        <div className='relative'>
          <div className='hidden lg:block'>
            {users.map((user, index) => (
              <div key={index} className={`flex flex-col gap-2 absolute ${user.style}`}>
                <div className="w-[4.5rem] h-[4.5rem] top-9 mx-auto">
                  <Image src={user.avatar} alt={user.role} width={100} height={100} className="rounded-full object-cover" priority={index < 2} />
                </div>
                <p className="text-[12px] px-[8px] py-[4px] bg-gray-700 rounded-lg">{user.role}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl max-w-xl xl:max-w-4xl  mx-auto text-gray-800 mt-16">
            <div className="w-full h-[250px] md:h-[500px]">
              <Image src={SbDemo1} alt="SB Demo" className='rounded-xl' />
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm mb-4">Scribeberry is privacy and regulatory compliant</p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
            <span>PIPEDA COMPLIANT</span>
            <span>HIPAA COMPLIANT</span>
          </div>
        </div>
      </main>
    </div>
  );
}