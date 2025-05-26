import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import TopSellingProducts from "./TopSellingProducts";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const allTopFoods = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>DigiDINE</title>
      </Helmet>
      <Banner></Banner>
      <TopSellingProducts allTopFoods={allTopFoods}></TopSellingProducts>
    </div>
  );
};

export default Home;
