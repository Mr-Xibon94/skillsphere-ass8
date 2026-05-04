import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FcRating } from "react-icons/fc";



const AllCourseCard = ({ course }) => {
    
    return (
        <Card className="border rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
            <div className="relative aspect-square w-full rounded-xl">
                <Image
                src={course.image}
                fill
                alt={course.category}
                className="object-cover rounded-xl"
                />
            </div>

            <div className="">
                <h2 className="font-medium text-2xl text-white" >{course.title}</h2>
            </div>
            <div className="flex justify-between text-white">
                <h2 className="text-x font-semibold">{course.instructor}</h2>
                <p className="font-semibold flex gap-1.5 "> <span className="flex flex-row items-center"><FcRating/> </span> {course.rating}</p>
            </div>
            <Link href={`./AllCourses/${course.id}`}>
            <Button variant="outline" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-800 hover:to-pink-700 w-full" >Details</Button>
            </Link>
        </Card>
    );
};

export default AllCourseCard;



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