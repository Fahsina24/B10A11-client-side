import { Link } from "react-router-dom";
import logo from "../../assets/banner.jpg";
import { motion } from "motion/react";
const Banner = () => {
  return (
    <motion.div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${logo})`,
      }}
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        repeat: Infinity,
        repeatDelay: 2,
        duration: 5,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center ">
        <div className="max-w-md">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-5 text-2xl md:text-5xl font-bold"
          >
            Welcome to <br />
            <span className="bg-gradient-to-r from-blue-600 via-yellow-600 to-red-500 inline-block text-transparent bg-clip-text">
              DigiDINE
            </span>
          </motion.h1>
          <h3 className="mb-5 text-2xl md:text-3xl font-extrabold text-yellow-500">
            Explore Our Delicious Foods
          </h3>
          <motion.p
            animate={{
              x: [0, 5, 0],
              transition: {
                repeat: Infinity,
                repeatDelay: "1",
              },
            }}
            className="mb-5 text-gray-200 text-sm md:text-base"
          >
            Discover a wide variety of delicious dishes, from healthy meals to
            indulgent treats. Explore our menu and satisfy your cravings today!
          </motion.p>
          <Link to="/allFoods">
            <button className="text-white p-4 border-b-2 border-yellow-400 rounded-b-lg  focus:border-yellow-300 focus:border-2 focus:rounded-lg focus:bg-yellow-300 focus:text-black md:text-xl focus:font-semibold text-sm hover:bg-yellow-300">
              View All Foods
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
