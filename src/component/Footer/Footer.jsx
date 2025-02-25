import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/DiGIDIne.png";

const Footer = () => {
  const services = (
    <>
      <a>About Us</a>
      <a>Contact Us</a>
      <a>All Foods</a>
    </>
  );

  const location = (
    <>
      <a>DigiDINE</a>
      <a>17-19 Sidney Street</a>
      <a>Colchester, Essex, CO4 9AB</a>
    </>
  );

  const links = (
    <>
      <a className="text-blue-500">
        <FaTwitter size={30} />
      </a>
      <a className="text-blue-600">
        <FaFacebook size={30} />
      </a>
      <a className="text-pink-500">
        <FaInstagram size={30} />
      </a>
      <a className="text-blue-700 ">
        <FaLinkedin size={30} />
      </a>
    </>
  );

  return (
    <div className="bg-base-300">
      <footer className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 text-base-content">
        {/* Top Section */}
        <div className="flex flex-col items-center mb-8 text-center sm:text-left">
          <img src={logo} alt="DigiDINE Logo" className="w-40 h-auto mb-4" />
          <p className="font-extrabold text-4xl bg-gradient-to-r from-blue-600 via-yellow-600 to-red-500 inline-block text-transparent bg-clip-text">
            DigiDINE
          </p>
          <p className="text-lg text-gray-700 mb-4 mt-4 w-4/5 text-center">
            At DigiDINE, we bring you a flavorful journey like no other! Serving
            up delicious dishes and exceptional service since 2006, we are here
            to satisfy every craving. Whether you are here for a quick bite or a
            full feast, we promise to make every moment a memorable experience.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Services Section */}
          <nav className="flex flex-col space-y-3">
            <h6 className="text-xl font-bold text-pink-500">Services</h6>
            {services}
          </nav>

          {/* Location Section */}
          <nav className="flex flex-col space-y-3">
            <h6 className="text-xl font-bold text-pink-500">
              Where To Find Us
            </h6>
            {location}
          </nav>

          {/* Social Links Section */}
          <nav className="space-y-3 flex flex-col justify-center items-center">
            <h6 className="text-xl font-bold text-pink-500">Social</h6>
            <div className="flex space-x-6 justify-center sm:justify-start">
              {links}
            </div>
            <button className="btn mt-4 bg-gradient-to-r from-sky-300 to-red-300 text-black font-bold py-2 px-6 rounded-full hover:bg-pink-500">
              Call To Order Now
            </button>
          </nav>
        </div>

        {/* Divider */}
        <hr className="my-6 border-t-2 border-gray-300 w-full" />

        {/* Copyright Section */}
        <p className="font-semibold text-xs text-center mt-4 text-gray-700">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
