import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import TopSellingProducts from "./TopSellingProducts";
import { useLoaderData } from "react-router-dom";
import WhyUs from "./WhyUs/WhyUs";
import UpComingEvents from "./UpComingEvents/UpComingEvents";

const Home = () => {
  const allTopFoods = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>DigiDINE</title>
      </Helmet>
      <Banner></Banner>
      <TopSellingProducts allTopFoods={allTopFoods}></TopSellingProducts>
      <WhyUs></WhyUs>
      <UpComingEvents></UpComingEvents>
    </div>
  );
};

export default Home;
