import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FcRating } from "react-icons/fc";



const AllCourseCard = ({ course }) => {
    console.log(course, 'here it isssssssss')
    return (
        <Card className="border rounded-xl">
            <div className="relative w-full aspect-square">
                <Image
                src={course.image}
                fill
                alt={course.category}
                className="object-cover rounded-xl"
                />
            </div>

            <div>
                <h2 className="font-medium text-2xl">{course.title}</h2>
            </div>
            <div className="flex justify-between">
                <h2 className="text-x font-semibold">{course.instructor}</h2>
                <p className="font-semibold flex gap-1.5 "> <span className="flex flex-row items-center"><FcRating/> </span> {course.rating}</p>
            </div>
            <Link href={`./AllCourses/${course.id}`}>
            <Button variant="outline" className="w-full" >Details</Button>
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