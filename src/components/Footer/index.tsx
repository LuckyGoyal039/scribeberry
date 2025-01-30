import Image from "next/image";
import { Mail, Linkedin, Youtube, Twitter, Facebook } from "lucide-react";
import Logo from "@/public/images/logo.png";

const Footer = () => {
    return (
        <div className="px-6 md:px-20 lg:px-60 py-8 bg-slate-900 text-white">
            <div className="flex flex-col items-center md:flex-row md:items-start justify-between gap-8 md:gap-12">

                <div className="space-y-4 text-center md:text-left">
                    <Image src={Logo} alt="Main Logo" height={80} width={80} className="mx-auto md:mx-0" />
                    <div className="flex justify-center md:justify-start gap-4 text-gray-400">
                        <a href="#" className="hover:text-gray-300">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <Youtube className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <h6 className="font-semibold text-lg mb-2">Contact</h6>
                    <a
                        href="mailto:hello@scribeberry.com"
                        className="flex justify-center md:justify-start items-center gap-2 text-blue-500 hover:underline"
                    >
                        <Mail className="w-5 h-5" />
                        hello@scribeberry.com
                    </a>
                </div>

                <div className="text-center md:text-left">
                    <h6 className="font-semibold text-lg mb-2">Use Cases</h6>
                    <ul className="space-y-1 text-gray-400">
                        <li>Dictations</li>
                        <li>Transcriptions</li>
                        <li>Medical Consults</li>
                        <li>Discharge Summaries</li>
                        <li>SOAP Notes</li>
                        <li>Operative Notes</li>
                    </ul>
                </div>
            </div>

            <hr className="my-6 border-t border-gray-600" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 text-center md:text-left">
                <span>© 2024 Scribeberry</span>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Sample Informed Consent</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;