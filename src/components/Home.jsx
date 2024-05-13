import HeroImage from "../assets/Hero.png"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div name="home" className="lg:py-20 md:py-10 w-full bg-gradient-to-b  from-black via-black to-gray-800">
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-10">
      <div className="flex text-white flex-col justify-center h-full ">
                <h2 className="text-4xl sm:text-7xl font-semibold mt-10">
                    I'm a Backend Developer
                </h2>
                <p className="text-gray-500 py-4 mr-6 mx-w-md">I have over 2 years of experience in designing and implementing innovative web solutions. Skilled in Laravel,CSS, HTML, Livewire and Boostrap, dedicated to delivering high-quality projects.</p>
                <div className="">
                <Link to="portfolio" smooth duration={500} className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300"><MdOutlineKeyboardArrowRight size={25} className="ml-1"/> </span>
            </Link> 
                </div>
            </div>
<div className=""><img src={HeroImage}  alt="my profile"  className="rounded-2xl  mx-auto w-2/3 md:w-full h-full"/></div>

           
        </div>
    </div>
  )
}

export default Home