import React from 'react';
import AllCourseCard from './AllCourseCards';

const PopularCourses = async () => {
    const res = await fetch('https://skillsphere-server-irgj.onrender.com/data')
    const courses = await res.json()

    const popularCourses = courses.slice(0, 3)
    return (
        <div className='my-5 w-[80%] mx-auto'>
            <h1 className='text-xl font-semibold mb-2.5'> Popular Courses :</h1>

            <div className='grid grid-cols-3 gap-6'>
                {
                    popularCourses.map(pc =>
                        <AllCourseCard key={pc.id} course={pc}></AllCourseCard>
                    )
                }
            </div>
            
        </div>
    );
};

export default PopularCourses;