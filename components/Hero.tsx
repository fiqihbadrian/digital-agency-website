'use client';
import { FaWhatsapp, FaRocket } from 'react-icons/fa';

export default function Hero() {

    return (
        <section
        id="hero"
        className='min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 lg:px-8'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6'>
                Welcome to Our Digital Agency
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl'>
                We craft beautiful and functional digital experiences that drive results.
            </p>
        </section>
        
    );
}