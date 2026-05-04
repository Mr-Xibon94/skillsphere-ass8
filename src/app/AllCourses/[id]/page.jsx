

const CourseDetails = async ({params}) => {
    const {id} = await params;
    const res = await fetch(`https://skillsphere-server-irgj.onrender.com/data/${id}`)
    const course = await res.json();

    console.log(id,'my course details');
    return (
        <div>
            hello
        </div>
    );
};

export default CourseDetails;