
import Banner from "@/component/Banner";
import LearningTips from "@/component/LearningTips";
import PopularCourses from "@/component/PopularCourses";


const HomePage = () => {
 return (
    <div>
      <Banner/>
     <PopularCourses/>
     <LearningTips/>
    </div>
  );
};

export default HomePage;


// server data: https://skillsphere-server-irgj.onrender.com/data