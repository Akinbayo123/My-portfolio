import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

const Contact = () => {
  return (
    <div name="contact" className="w-full bg-gradient-to-b from-black to-gray-800 text-white ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Get in touch with me</p>
        </div>

        <div className="lg:hidden flex justify-center items-center mb-5">

          <a href="https://github.com/Akinbayo123" className="items-center py-3 px-3 rounded-full bg-gray-500 ms-3 cursor-pointer hover:scale-105 duration-200">

            <FaGithub size={24} />

          </a>
          <a href="https://linkedin.com/in/akingbola-odunayo-225501254" className="items-center py-3 px-3 rounded-full bg-gray-500 ms-3 cursor-pointer hover:scale-105 duration-200">
            <FaLinkedin size={24} />
          </a>

          <a href="mailto:akingbolaodun@gmail.com" className="items-center py-3 px-3 rounded-full bg-gray-500 ms-3 cursor-pointer hover:scale-105 duration-200">
            <HiOutlineMail size={24} />
          </a>
          <a href="https://wa.me/+2347030138005" className="items-center py-3 px-3 rounded-full bg-gray-500 ms-3 cursor-pointer hover:scale-105 duration-200">
            <FaWhatsapp size={24} />
          </a>
          <a href="resume.pdf" className="items-center py-3 px-3 rounded-full bg-gray-500 ms-3 cursor-pointer hover:scale-105 duration-200" download="resume"
            target="_blank" rel="noreferrer" >
            <BsFillPersonLinesFill size={24} />
          </a>
        </div>
        <div className="mb-6 lg:hidden">
          <h2 className="text-2xl text-center font-bold">
            OR
          </h2>
        </div>

        <div className="flex justify-center items-center" action="https://getform.io/f/pboxrnra" method="POST">
          <form action="" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <input type="text" name="email" placeholder="Enter your email" className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <textarea name="message" id="" rows={10} className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" placeholder="Enter your message">

            </textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ">Let's talk</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact

