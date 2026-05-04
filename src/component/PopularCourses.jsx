
import AllCourseCard from './AllCourseCards';

const PopularCourses = async () => {
    const res = await fetch('https://skillsphere-server-irgj.onrender.com/data')
    const courses = await res.json()

    const popularCourses = courses.slice(0, 3)
    return (
        <div className='my-5 w-[80%] mx-auto'>
            <h1 className='text-3xl font-bold mb-2.5 text-white text-center'> POPULAR COURSES </h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
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