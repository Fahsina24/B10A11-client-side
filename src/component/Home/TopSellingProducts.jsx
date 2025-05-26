import TopFoodCarousel from "./TopSellingFoods/TopFoodCarousel/TopFoodCarousel";
import TopSellingHeader from "./TopSellingFoods/TopSellingHeader";

const TopSellingProducts = ({ allTopFoods }) => {
  return (
    <div className="mb-20">
      <TopSellingHeader></TopSellingHeader>
      <TopFoodCarousel allTopFoods={allTopFoods}></TopFoodCarousel>
    </div>
  );
};

export default TopSellingProducts;
