import offer from "../../../assets/OfferBanner.png";

const UpComingEvents = () => {
  return (
    <div className="mx-auto w-11/12 mb-14">
      <section className="flex  flex-col text-center text-3xl  mt-6 mb-4 gap-4 justify-center items-center">
        <section className="text-center mt-6 mb-8">
          <h2 className="text-2xl md:text-4xl font-extrabold ">
            Limited-Time Flavors, Unlimited Cravings!
          </h2>
          <p className="mt-2 w-3/4 mx-auto text-gray-600 text-lg lg:text-xl">
            Get exclusive deals and special menu items — only available for a
            short time. Don’t miss out!
          </p>
        </section>

        <img src={offer} alt="" />
      </section>
    </div>
  );
};

export default UpComingEvents;
