"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, Button } from "@heroui/react";
import { MdOutlineMenu } from "react-icons/md";


const Navbar = () => {
    const router = useRouter();

    const userData = authClient.useSession();
    const user = userData.data?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push("/");
    };

    return (
        <>
            {/* NAVBAR */}
            <div className="w-[80%] mx-auto">
                <div className="navbar justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-sm text-white">

                    {/* Mobile Menu Button */}
                    <div className="md:hidden dropdown dropdown-right relative">

                        {/* Trigger */}
                        <label tabIndex={0} className="btn btn-ghost text-2xl">
                            <MdOutlineMenu />
                        </label>

                        {/* Menu */}
                        <ul className={`menu menu-sm dropdown-content bg-base-100 text-black rounded-box mt-3 w-52 p-2 shadow right-0`}>
                            {
                                user && (
                                    <div>
                                        <li>
                                            <Link href="/MyProfile"><button className={`text-purple-600  text-xl font-semibold `}>
                                                Profile
                                            </button></Link>

                                        </li>

                                        <li>
                                            <button
                                                onClick={handleSignOut}
                                                className="bg-white text-purple-600 py-2 rounded-lg text-xl font-semibold"
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </div>
                                )
                            }

                            {
                                !user && (
                            <div className="flex flex-col gap-5">
                                <Link href="/SignIn">
                                    <Button variant="outline" className="text-indigo-600">
                                        Log In
                                    </Button>
                                </Link>
                                <Link href="/SignUp">
                                    <Button variant="outline" className="text-indigo-600">
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        )
                            }
                        </ul>
                    </div>




                    {/* Logo */}
                    <div>

                        <h1 className="text-3xl font-bold">SkillSphere</h1>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-4 text-[16px] font-medium">
                        <Link href="/">Home</Link>
                        <Link href="/AllCourses">All Courses</Link>
                        <Link href="/MyProfile">My Profile</Link>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">



                        {/* Profile */}
                        {user && (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <Avatar>
                                            <Avatar.Image
                                                alt="user"
                                                src={user?.image}
                                                referrerPolicy="no-referrer"
                                            />
                                            <AvatarFallback>
                                                {user?.name?.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>
                                </div>

                                <ul className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box mt-3 w-52 p-2 shadow">
                                    <li><button
                                        className="bg-white text-purple-600 py-2 rounded-lg text-xl font-semibold"
                                    >
                                        Profile
                                    </button></li>

                                    <li><button
                                        onClick={handleSignOut}
                                        className="bg-white text-purple-600 py-2 rounded-lg text-xl font-semibold"
                                    >
                                        Logout
                                    </button></li>
                                </ul>
                            </div>
                        )}

                        {/* Login Buttons */}
                        {!user && (
                            <div className="flex  hidden md:block">
                                <Link href="/SignIn">
                                    <Button variant="outline" className="text-indigo-600 mr-5">
                                        Log In
                                    </Button>
                                </Link>
                                <Link href="/SignUp">
                                    <Button variant="outline" className="text-indigo-600">
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;