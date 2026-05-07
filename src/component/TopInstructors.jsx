import { StarIcon } from '@heroicons/react/16/solid';
import { Avatar, AvatarFallback, Card } from '@heroui/react';
import React from 'react';
import { BsBook } from 'react-icons/bs';
import { CiTimer } from 'react-icons/ci';
import { TfiWrite } from 'react-icons/tfi';

const TopInstructors = () => {
    return (
        <div className='w-[80%] mx-auto my-5'>

            <h1 className=' text-white text-center text-3xl font-semibold '>Top Instructors</h1>

            <h1 className=' text-white text-center text-xl font-semibold mb-5'>Learn from the best in the industry</h1>
            <div className='flex gap-5 justify-between bg-transparent'>
                <div className='flex-1 text-center'>
                    <Card className=' bg-transparent p-6 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.25)]'>
                        <div className='flex justify-between'>
                            <div className='flex flex-row items-center '>


                                <Avatar className='w-25 h-30 '>
                                    <Avatar.Image
                                        alt="John Doe"
                                        src="https://i.ibb.co.com/j9Q1RZyP/Gemini-Generated-Image-cujacocujacocuja-removebg-preview.png"
                                        referrerPolicy='no-referrer'
                                    />
                                    <AvatarFallback>J</AvatarFallback>
                                </Avatar>



                            </div>
                            <div className='text-start' >
                                <div>
                                    <h1 className='text-xl font-semibold text-white'>John Doe</h1>
                                    <p className='text-sm text-gray-200'>Web Developer.
                                    </p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex gap-1 text-white text-sm'>
                                        <StarIcon className='size-5 text-yellow-600' /> 4.8
                                    </p>
                                    <p className='text-white text-sm'>(2.1k students)</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className='flex-1 text-center'>
                    <Card className=' bg-transparent p-6 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.25)]'>
                        <div className='flex justify-between'>
                            <div className='flex flex-row items-center '>


                                <Avatar className='w-25 h-30 '>
                                    <Avatar.Image
                                        alt="John Doe"
                                        src="https://i.ibb.co.com/j9Q1RZyP/Gemini-Generated-Image-cujacocujacocuja-removebg-preview.png"
                                        referrerPolicy='no-referrer'
                                    />
                                    <AvatarFallback>J</AvatarFallback>
                                </Avatar>



                            </div>
                            <div className='text-start' >
                                <div>
                                    <h1 className='text-xl font-semibold text-white'>John Doe</h1>
                                    <p className='text-sm text-gray-200'>Web Developer.
                                    </p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex gap-1 text-white text-sm'>
                                        <StarIcon className='size-5 text-yellow-600' /> 4.8
                                    </p>
                                    <p className='text-white text-sm'>(2.1k students)</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className='flex-1 text-center'>
                    <Card className=' bg-transparent p-6 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.25)]'>
                        <div className='flex justify-between'>
                            <div className='flex flex-row items-center '>


                                <Avatar className='w-25 h-30 '>
                                    <Avatar.Image
                                        alt="John Doe"
                                        src="https://i.ibb.co.com/j9Q1RZyP/Gemini-Generated-Image-cujacocujacocuja-removebg-preview.png"
                                        referrerPolicy='no-referrer'
                                    />
                                    <AvatarFallback>J</AvatarFallback>
                                </Avatar>



                            </div>
                            <div className='text-start' >
                                <div>
                                    <h1 className='text-xl font-semibold text-white'>John Doe</h1>
                                    <p className='text-sm text-gray-200'>Web Developer.
                                    </p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex gap-1 text-white text-sm'>
                                        <StarIcon className='size-5 text-yellow-600' /> 4.8
                                    </p>
                                    <p className='text-white text-sm'>(2.1k students)</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className='flex-1 text-center'>
                    <Card className=' bg-transparent p-6 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.25)]'>
                        <div className='flex justify-between'>
                            <div className='flex flex-row items-center '>


                                <Avatar className='w-25 h-30 '>
                                    <Avatar.Image
                                        alt="John Doe"
                                        src="https://i.ibb.co.com/j9Q1RZyP/Gemini-Generated-Image-cujacocujacocuja-removebg-preview.png"
                                        referrerPolicy='no-referrer'
                                    />
                                    <AvatarFallback>J</AvatarFallback>
                                </Avatar>



                            </div>
                            <div className='text-start' >
                                <div>
                                    <h1 className='text-xl font-semibold text-white'>John Doe</h1>
                                    <p className='text-sm text-gray-200'>Web Developer.
                                    </p>
                                </div>
                                <div className='mt-5'>
                                    <p className='flex gap-1 text-white text-sm'>
                                        <StarIcon className='size-5 text-yellow-600' /> 4.8
                                    </p>
                                    <p className='text-white text-sm'>(2.1k students)</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>




            </div>

        </div>
    );
};

export default TopInstructors;