
import Banner from "@/component/Banner";
import LearningTips from "@/component/LearningTips";
import PopularCourses from "@/component/PopularCourses";
import TopInstructors from "@/component/TopInstructors";


const HomePage = () => {
 return (
    <div>
      <Banner/>
     <PopularCourses/>
     <LearningTips/>
     <TopInstructors/>
    </div>
  );
};

export default HomePage;


// server data: https://skillsphere-server-irgj.onrender.com/data