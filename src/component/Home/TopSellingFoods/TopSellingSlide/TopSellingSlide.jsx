import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import "animate.css";

const TopSellingSlide = ({ slide }) => {
  return (
    <div
      className="hero h-94 w-full md:w-11/12 mx-auto bg-cover bg-center flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url(${slide.foodImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40 absolute "></div>

      <div className=" bg-gradient-to-r from-red-300 to-sky-400 absolute justify-center text-center p-6 text-black rounded-2xl w-fit">
        <p className="font-bold text-2xl md:text-3xl mb-6">{slide.foodName}</p>
        <p className="font-extrabold text-xl lg:text-2xl">
          Price: ${slide.price}
        </p>
        <div className="flex flex-col md:flex-row gap-8 mt-8 justify-center">
          <Link to={`/singleFood/${slide._id}`} className="w-full">
            <button className=" flex text-lg font-semibold rounded-sm hover:scale-105  duration-300 gap-2 p-4 border-b-2 border-blue-500 rounded-b-lg  focus:border-blue-500 focus:rounded-lg focus:bg-blue-500 focus:text-black md:text-xl focus:font-semibold hover:bg-blue-500  h-16 items-center">
              View Details <LuArrowUpRight size={32} />
            </button>
          </Link>
          <Link to="/allFoods" className="w-full">
            <button className="flex text-lg font-semibold rounded-sm hover:scale-105  duration-300 gap-2 p-4 border-b-2 border-blue-500 rounded-b-lg  focus:border-blue-500 focus:rounded-lg focus:bg-blue-500 focus:text-black md:text-xl focus:font-semibold hover:bg-blue-500 h-16 items-center">
              See All Foods <LuArrowUpRight size={32}></LuArrowUpRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopSellingSlide;
