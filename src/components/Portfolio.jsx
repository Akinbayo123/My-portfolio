
import snowbooster from "../assets/portfolio/snowbooster.jpeg"
import blackmanspride from "../assets/portfolio/blackmanspride.jpeg"

const Portfolio = () => {
  const portfolios=[

    {
      id:1,
      src:blackmanspride,
      title:"Blackmanspride",
      href:'www.blackmanspride.ng',
      description:"A NGO website"

    },
    {
      id:2,
      src:snowbooster,
      title:"Snowbooster",
      href:'www.snowbooster.ng',
      description:'A website for boosting social media presence and to get real engagement on any social media platform'
    },
   
  ]
 
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b  from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center pb-20">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({ id, src,title,href,description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="text-center mt-5 mb-3">
                
                <a href={href} className="w-1/2 underline text-xl px-6 cursor-pointer py-3 m-4 duration-200 hover:scale-105">
                  {title}
                </a>
               
                
                
                <p className="mt-6 mx-3">{description}</p>
             
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
