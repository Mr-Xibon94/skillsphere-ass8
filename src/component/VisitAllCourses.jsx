"use client"

import { authClient } from "@/lib/auth-client";
import { ArrowChevronRight } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";

const VisitAllCourses = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    return (
        <div>
            {
                user && (
                    <Link href="/AllCourses">
                        <Button variant='outline' className='text-xl text-white font-semibold mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-800 hover:to-pink-700 w-full'>
                            Visit All Courses <ArrowChevronRight/>
                        </Button>
                    </Link>
                )
            }

            {
                !user && (
                    <Link href="/SignIn">
                        <Button variant='outline' className="text-xl text-white font-semibold mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-800 hover:to-pink-700 w-full">
                            Visit All Courses <ArrowChevronRight/>
                        </Button>
                    </Link>
                )
            }

        </div>
    );
};

export default VisitAllCourses;