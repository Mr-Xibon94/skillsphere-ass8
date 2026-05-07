import { Card } from '@heroui/react';
import React from 'react';
import { BsBook } from 'react-icons/bs';
import { CiTimer } from 'react-icons/ci';
import { GoGoal } from 'react-icons/go';
import { TfiWrite } from 'react-icons/tfi';

const LearningTips = () => {
    return (
        <div className='w-[80%] mx-auto my-5'>

            <h1 className=' text-white text-center text-3xl font-semibold '>Learning Tips</h1>

            <h1 className=' text-white text-center text-xl font-semibold mb-5'>Small steps every day lead to big results</h1>
            <div className='flex gap-5 justify-between bg-transparent'>
                <div className='flex-1 text-center'>
                    <Card className='items-center bg-transparent p-6 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.25)]'>
                        <GoGoal className='w-15 h-15 text-gray-200' />
                        <h1 className='text-xl font-semibold text-white'>Set Clear Goals</h1>
                        <p className='text-sm text-gray-200'>Define what you want to learn <br />
                            and break it into small goals.
                        </p>
                    </Card>
                </div>

                <div className='flex-1 text-center'>
                    <Card className='items-center bg-transparent p-6 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.25)]'>
                        <CiTimer className='w-15 h-15 text-gray-200' />
                        <h1 className='text-xl font-semibold text-white'>Manage Your Time</h1>
                        <p className='text-sm text-gray-200'>Create a study schedule and <br />
                            stick to it consistently.
                        </p>
                    </Card>
                </div>

                <div className='flex-1 text-center'>
                    <Card className='items-center bg-transparent p-6 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.25)]'>
                        <BsBook className='w-15 h-15 text-gray-200' />
                        <h1 className='text-xl font-semibold text-white'>Stay Consistent</h1>
                        <p className='text-sm text-gray-200'>Learn a little every day and <br />
                            stay consistent.
                        </p>
                    </Card>
                </div>

                <div className='flex-1 text-center'>
                    <Card className='items-center bg-transparent p-6 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.25)]'>
                        <TfiWrite className='w-15 h-15 text-gray-200' />
                        <h1 className='text-xl font-semibold text-white'>Practice & Apply</h1>
                        <p className='text-sm text-gray-200'>Practice what you learn and<br />
                            build real projects.
                        </p>
                    </Card>
                </div>



            </div>

        </div>
    );
};

export default LearningTips;