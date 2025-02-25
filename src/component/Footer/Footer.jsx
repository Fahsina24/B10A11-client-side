import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "../../assets/DiGIDIne.png";
const Footer = () => {
  const services = (
    <>
      <a className="link link-hover">About Us</a>
      <a className="link link-hover">Contact Us</a>
      <a className="link link-hover">Selling Equipments</a>
    </>
  );

  const location = (
    <>
      <a>Forge Fitness Co,</a>
      <a>17-19 Sidney Street</a>
      <a>Colchester,Essex,CO4 9AB</a>
    </>
  );

  const links = (
    <>
      <a>
        <FaTwitter size={30} />
      </a>
      <a>
        <FaFacebook size={30} />
      </a>
      <a>
        <FaInstagram size={30} />
      </a>
      <a>
        <FaLinkedin size={30} />
      </a>
    </>
  );

  return (
    <div className="bg-base-300">
      <div className=" pt-4 pb-4 flex justify-center items-center w-full">
        <img
          src={logo}
          alt="company_logo"
          className="w-28 h-28 rounded-full text-center mt-4 mb-4"
        />
      </div>
      <footer className="footer text-base-content p-4">
        <aside>
          <p className="font-extrabold text-2xl">Forge Fitness Co</p>
          <p className="text-sm">
            Providing reliable sports equipments since 2006
          </p>
          <p className="font-bold text-xs">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          {services}
        </nav>
        <nav>
          <h6 className="footer-title">Where To Find Us</h6>
          {location}
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">{links}</div>
          <button className="btn mt-4 bg-gradient-to-r from-pink-400 to-yellow-400 font-bold text-black">
            Book A Call
          </button>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
