import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='w-[80%] mx-auto' >
            <div className="navbar bg-base-100 shadow-sm " >
                <div className="flex-1">
                    <h1 className="font-bold text-2xl text-[#4f46e5]">SkillSpher</h1>
                </div>

                <div className='flex-1 space-x-2.5 text-[16px] font-medium'>
                    <Link href="./"><span className="text-[#4f46e5]" >Home</span></Link>
                    <Link href="./AllCourses"><span className="text-[#4f46e5]" >All Courses</span></Link>
                    <Link href="./profile"><span className="text-[#4f46e5]">My Profile</span></Link>
                </div>

                {/* search bar and profile   */}
                <div className="flex gap-2">
                    {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}

                    {/* this is my profile image and dropdown  */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        {/* user profile  */}
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile

                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>

                        
                    </div>
                    <div className='flex gap-1.5'>
                            <Button variant='outline' className="text-[#4f46e5]">Log In</Button>
                            <Button variant='outline' className="text-[#4f46e5]">Sigh UP</Button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;