import React from 'react';
import CourseDetails from './[id]/page';
import AllCourseCard from '@/component/AllCourseCards';

const AllCourses = async () => {
    const res = await fetch('https://skillsphere-server-irgj.onrender.com/data', { cache: "no-store" })
    const courses = await res.json()
    console.log(courses)
    return (
        <div className='my-5 w-[80%] mx-auto'>
            <h1 className='text-3xl font-bold mb-2.5 text-white text-center'>CHOOSE YOUR CAREER</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6  mt-2.5'>
                {
                    courses.map(course =>
                        <AllCourseCard key={course.id} course={course}></AllCourseCard>
                    )
                }
            </div>
        </div>
    );
};

export default AllCourses;