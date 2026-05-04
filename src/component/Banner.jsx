import { Rocket } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { TiMediaPlay } from 'react-icons/ti';

const Banner = () => {
    return (
        <div className=' w-[80%] mx-auto my-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl'>
            <div className='flex flex-col space-y-15 md:flex-row md:space-x-15  border border-red-700'>
                <div className=' border border-blue-200'>
                    <div className='space-y-5 border border-black'>
                        <h1 className='text-4xl font-bold text-white'>
                        Upgrade Your <br />
                        <span className='flex gap-1.5 text-[#f38200]'>Skills Today <Rocket className='size-10' /></span>
                    </h1>
                    <p className='text-white text-mute'>Learn from Industry Experts and <br />
                        Take your Career to the Next Level
                    </p>

                    <div className='flex flex-col space-y-3.5 md:flex-row md:space-x-3.5'>
                        <Button variant='outline' className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-800 hover:to-pink-700">Explore Course</Button>
                        <Button variant='outline' className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-800 hover:to-pink-700"> <TiMediaPlay /> Watch Demo</Button>
                    </div>
                    </div>
                </div>

                <div className=' md:flex-2 relative w-full border border-yellow-400' >
                    <Image
                        src="https://i.ibb.co.com/j9Q1RZyP/Gemini-Generated-Image-cujacocujacocuja-removebg-preview.png" 
                        alt='Banner'
                        fill
                        className='object-cover '
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;