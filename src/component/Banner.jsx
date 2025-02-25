import logo from "../assets/banner.jpg";
import { motion } from "motion/react";
const Banner = () => {
  return (
    <motion.div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${logo})`,
      }}
      animate={{
        scale: [1, 1.05, 1],
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
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-5 text-5xl font-bold"
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-yellow-600 to-red-500 inline-block text-transparent bg-clip-text">
              DigiDINE
            </span>
          </motion.h1>
          <h3 className="mb-5 text-3xl font-extrabold text-yellow-300">
            Explore Our Delicious Foods
          </h3>
          <motion.p
            animate={{
              x: [0, 50, 0],
              transition: {
                repeat: Infinity,
                repeatDelay: "2",
              },
            }}
            className="mb-5 text-gray-200"
          >
            Discover a wide variety of delicious dishes, from healthy meals to
            indulgent treats. Explore our menu and satisfy your cravings today!
          </motion.p>
          <button className="text-white p-4 border-b-2 border-yellow-400 rounded-b-lg  focus:border-yellow-400 focus:border-2 focus:rounded-lg focus:bg-yellow-300 focus:text-black text-xl focus:font-semibold">
            View All Foods
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
