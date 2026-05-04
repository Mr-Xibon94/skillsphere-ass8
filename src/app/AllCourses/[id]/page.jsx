

import { Clock, Heart } from "@gravity-ui/icons";
import { ClockIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import { FcRating } from "react-icons/fc";




const CourseDetails = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`https://skillsphere-server-irgj.onrender.com/data/${id}`)
    const courseDetail = await res.json();


    return (
        <div className="my-4 w-[80%] mx-auto">

            <div className="rounded-xl p-15 shadow-xl" >
                <div className="flex gap-20 justify-center ">
                    <div className="">
                        <Image
                            src={courseDetail.image}
                            width={200}
                            height={160}
                            alt={courseDetail.category}
                            className=" rounded-xl"
                        />
                    </div>
                    <div className="space-y-2.5">
                        <div>
                            <h1 className="text-3xl font-semibold">{courseDetail.title}</h1>
                            <h1 className="text-xl font-medium">{courseDetail.category}</h1>
                        </div>

                        <p className="text-muted">{courseDetail.description}</p>
                        <div className="flex space-x-2.5">
                            <div className="flex flex-row items-center">
                                <Avatar >
                                    <UserCircleIcon></UserCircleIcon>
                                </Avatar>

                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">{courseDetail.instructor}</h2>
                                <p className="text-xs text-muted">Instructor</p>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <p className="font-semibold flex gap-1.5 "> <span className="flex flex-row items-center"><FcRating /> </span> {courseDetail.rating}</p>
                            <p className="font-semibold flex gap-1.5 "> <span className="flex flex-row items-center"><Clock /> </span> {courseDetail.duration}</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col space-y-3.5 md:flex-row md:space-x-3.5 mt-5">
                    <Button variant="outline" className="w-full">Enroll Now</Button>
                    <Button variant="outline" className="w-full"> <Heart /> Add to Wishlist</Button>

                </div>
            </div>

        </div>
    );
};

export default CourseDetails;



// category
// :
// "Design"
// description
// :
// "Create responsive and modern designs using Tailwind CSS."
// duration
// :
// "8 hours"
// id
// :
// "5"
// image
// :
// "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg"
// instructor
// :
// "Michael Brown"
// level
// :
// "Intermediate"
// rating
// :
// 4.6
// title
// :
// "Advanced CSS & Tailwind"