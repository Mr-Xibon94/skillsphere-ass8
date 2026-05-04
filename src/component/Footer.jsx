import Link from "next/link";
import { BiMobile } from "react-icons/bi";
import { CiFacebook, CiTwitter, CiYoutube } from "react-icons/ci";


const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 ">
      <footer className="footer footer-horizontal footer-center  shadow-2xl text-primary-content p-10">
        <aside>

          <p className="font-bold">
            <span className='text-3xl font-bold'>SkillSphere</span>
            <br />
            Providing reliable tech
          </p>
          <div>
            <p className='text-xl font-bold '>Address:</p>
            <p>Dhaka, Bangladesh</p>
            <p className="text-xl font-bold "> Terms & Condition</p>
          </div>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        {/* all socila media icon here  */}
        <nav>
          <div className="grid grid-flow-col gap-4">
            
            
            <a href="https://x.com/login" target="_blank" rel="noopener noreferrer"><CiTwitter className="w-8 h-8"/></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><CiYoutube className="w-8 h-8"/></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><CiFacebook className="w-8 h-8"/></a>
            
            
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;