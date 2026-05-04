"use client"
import { UpdateProfile } from '@/component/UpdateProfile';
import { authClient } from '@/lib/auth-client';
import { Avatar, AvatarFallback, Card } from '@heroui/react';
import React from 'react';

const MyProfile = () => {
    const userData = authClient.useSession()
    const user = userData.data?.user
    return (
        <div className='my-4 w-[80%] mx-auto flex flex-col md:flex-row p-10 gap-10 justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl'>
            {/* user image  */}
            <div>
                <Card className='flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>

                    <Avatar className='w-40 h-40 '>
                        <Avatar.Image
                            alt="John Doe"
                            src={user?.image}
                            referrerPolicy='no-referrer'
                        />
                        <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                    </Avatar>


                </Card>
            </div>

            {/* user details  */}
            <div className='space-y-5 flex flex-col justify-center items-center md:items-baseline'>
                <h2 className='text-3xl font-bold text-black'>{user?.name}</h2>
                <h2 className='text-black font-semibold text-xl'>{user?.email}</h2>

                <UpdateProfile></UpdateProfile>
            </div>


        </div>
    );
};

export default MyProfile;