import Services from "./Services/Services";
import { GiKnifeFork } from "react-icons/gi";
import { FcShipped } from "react-icons/fc";
import { FcUnlock } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { FaStar } from "react-icons/fa";

const WhyUs = () => {
  const services = [
    {
      icon: <GiKnifeFork color="#ada427" size={18} />,
      title: "Quality Ingredients",
      description: "Only fresh, organic ingredients in every meal.",
    },
    {
      icon: <FcShipped size={18} />,
      title: "Fast Delivery",
      description: "Lightning-fast delivery within 30 minutes.",
    },
    {
      icon: <FcUnlock size={18} />,
      title: "Secure Checkout",
      description: "Your payments are safe with end-to-end encryption.",
    },
    {
      icon: <FcAssistant size={18} />,
      title: "24/7 Support",
      description: "Always available to help with orders and questions.",
    },
    {
      icon: <FaStar color="#ada427" size={18} />,
      title: "Top Rated Service",
      description: "Loved and trusted by thousands of happy customers.",
    },
  ];

  return (
    <div className="mx-auto w-11/12 mb-14">
      <section className="flex  flex-col text-center text-3xl  mt-6 mb-4 gap-4 justify-center items-center">
        <section className="text-center mt-6 mb-8">
          <h2 className="text-2xl md:text-4xl font-extrabold ">
            Why Thousands Choose Us Every Day
          </h2>
          <p className="mt-2 w-3/4 mx-auto text-gray-600 text-lg lg:text-xl">
            We combine culinary excellence with world-class service to give you
            a seamless food experience.
          </p>
        </section>
        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
          {services.map((service, index) => (
            <Services service={service} key={index}></Services>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
