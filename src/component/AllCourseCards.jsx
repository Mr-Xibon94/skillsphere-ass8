import { Card } from "@heroui/react";
import Image from "next/image";



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
                <h2 className="font-medium text-xl">{course.title}</h2>
            </div>
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