'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
    {
        question: 'How does Scribeberry work?',
        answer:
            'Scribeberry utilizes a combination of large medical language models, artificial intelligence and web3 technologies to generate medical dictations, transcriptions, and chart notes. Simply speak or type into the app and it will transcribe your voice into accurate and detailed medical notes. You can utilize these notes to generate further outputs (SOAP notes, letters, forms, etc) based on templates. You can upload recorded audio for transcription and generate relevant summaries from the recorded audio as well.',
    },
    {
        question: 'How can Scribeberry help me as a healthcare professional?',
        answer: 'Scribeberry is designed to streamline your workflow and save you time. By using our app, you can significantly reduce the time spent on charting, allowing you to focus more on patient care and improving overall clinic efficiency.',
    },
    {
        question: 'How much time can I expect to save using Scribeberry?',
        answer: 'The time saved will vary depending on your individual workflow and the complexity of your medical cases. However, initial users have reported reducing their charting time by up to 60-70%. On average, you can expect to save several hours per day.',
    },
    {
        question: 'What are the usage limits of Scribeberry?',
        answer: 'Scribeberry has a free plan with a usage limit of 20 per month. Our Pro and Enterprise plans include unlimited usage.',
    },
    {
        question: 'Is my data secure and private?',
        answer: "At Scribeberry, we take data security and privacy seriously. Scribe data is end-to-end encrypted on the user's device. You have the ability to clear scribes at any time. We have implemented strong security measures to ensure the confidentiality and integrity of your data. We are both HIPAA and PIPEDA compliant. Please review our Terms and Conditions and Privacy Policy for specific information.",
    },
    {
        question: 'Can Scribeberry integrate with my existing EMR system?',
        answer: "We have made our output notes easy to edit, copy, and paste. While there is no direct EMR integration yet, the notes can transfer fairly seamlessly with a click and paste user experience.",
    },
    {
        question: 'Can I create personalized outputs with Scribeberry?',
        answer: "Absolutely! Scribeberry allows you to talk back to personalize templates according to your specific needs. This can help enhance efficiency and accuracy in your documentation.",
    },
    {
        question: "What if I encounter technical issues, want to give feedback, or need troubleshooting support?",
        answer: "If you experience any technical issues or require assistance, reach out to us by emailing <a href='mailto:hello@scribeberry.com' class='text-indigo-600 underline'>hello@scribeberry.com</a>. We'll promptly address your concerns and provide the necessary guidance.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-[#f8f9fa] flex justify-center items-center pb-20">
            <div className='max-w-3xl mt-5 px-5 lg:px-0'>
                <h2 className="text-[25px] md:text-3xl font-bold text-center mb-6 text-gray-600">Frequently Asked Questions</h2>
                <p className="text-center text-gray-500 mb-6">
                    We hope this FAQ page answers your questions about Scribeberry. If you have any additional inquiries or need further clarification, don't hesitate to reach out to us. We're here to help you make the most of our app and improve your medical documentation experience!
                </p>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden">
                            <button
                                className={`w-full text-left p-4 font-semibold ${openIndex === index ? 'text-indigo-600' : 'text-gray-700'} flex justify-between items-center bg-[#fff] hover:bg-gray-100`}
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
                            </button>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={openIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                <div className="p-4 text-gray-500 bg-white text-sm" dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
