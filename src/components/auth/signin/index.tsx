'use client'
import React from 'react';
import Logo from "@/public/images/logo.png";
import Image from 'next/image';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useRouter } from 'next/navigation';

const SignInPage = () => {
    const router = useRouter()
    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
            <div className="flex flex-col md:flex-row items-center border-2 rounded-xl max-w-5xl w-full">
                <div className="hidden md:block w-full md:w-[632px] h-[616px] border-r-2 overflow-hidden rounded-l-lg">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        playsInline
                        loop
                        muted
                    >
                        <source src="/images/sb-custom-templates.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="w-full md:w-auto h-auto md:h-[616px] px-4 md:px-6 py-8 flex flex-col items-center max-w-md mx-auto">
                    <div className="w-16 h-16 relative">
                        <Image src={Logo} alt="Main logo" fill priority className="object-contain" />
                    </div>
                    <h1 className="my-2 text-xl font-semibold text-black">Welcome</h1>

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-5 w-full max-w-sm">
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                        >
                            <GoogleIcon />
                            Sign in with Google
                        </button>

                        <div className="relative my-6 w-full">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="px-4 text-sm text-gray-500 bg-white">or</span>
                            </div>
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-800">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                    <EmailIcon fontSize="small" />
                                </span>
                                <input
                                    type="email"
                                    placeholder="email@address.com"
                                    required
                                    autoComplete="off"
                                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-800">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                    <LockIcon fontSize="small" />
                                </span>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    required
                                    autoComplete="off"
                                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-6"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className='flex flex-col gap-3 mt-4 w-full max-w-sm text-center text-xs'>
                        <div className="bg-gray-200 rounded-lg py-2">
                            <p className="text-gray-600">
                                Forgot your password?
                            </p>
                            <a href="#" className="text-gray-900 hover:underline">
                                Reset Password
                            </a>
                        </div>

                        <div>
                            <p className="text-gray-600">
                                Don't have an account?{' '}
                                <button onClick={()=>router.push('/auth/signup')} className="text-gray-900 hover:underline">
                                    Sign up
                                </button>
                            </p>
                        </div>

                        <div className="text-gray-500 px-4">
                            By signing in, you agree to our{' '}
                            <a href="#" className="text-gray-900 hover:underline">
                                Terms & Conditions
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-gray-900 hover:underline">
                                Privacy Policy
                            </a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;