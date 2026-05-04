"use client"
import { UpdateProfile } from '@/component/UpdateProfile';
import { authClient } from '@/lib/auth-client';
import { Avatar, AvatarFallback, Card } from '@heroui/react';
import React from 'react';

const MyProfile = () => {
    const userData = authClient.useSession()
    const user = userData.data?.user
    return (
        <div className='my-4 w-[80%] mx-auto'>
            <Card className='max-w-96 mx-auto flex flex-col items-center border mt-5'>
                <Avatar>
                    <Avatar.Image
                        alt="John Doe"
                        src={user?.image}
                        referrerPolicy='no-referrer'
                    />
                    <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className='text-xl font-bold'>{user?.name}</h2>
                <h2 className='text-muted'>{user?.email}</h2>

                <UpdateProfile></UpdateProfile>
            </Card>


        </div>
    );
};

export default MyProfile;