import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";

const AllFood = () => {
  const allFoods = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>DigiDINE | All_Foods</title>
      </Helmet>
      <div>
        <section className="flex mx-auto text-center text-3xl  mt-6 mb-4 gap-4 justify-center items-center w-11/12">
          <section className="text-center mt-6 mb-8">
            <h2 className="text-4xl font-extrabold ">
              A Feast for Every Taste – Dive In!
            </h2>
            <p className="mt-2 w-3/4 mx-auto text-gray-600 text-sm md:text-lg lg:text-xl ">
              Discover a delectable variety of foods crafted to delight your
              taste buds. From wholesome meals to indulgent treats, our
              selection is made with quality ingredients and bursting with
              flavor. Whether you're looking for something comforting or
              adventurous, we've got the perfect bite for you!
            </p>
          </section>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-10 flex-start">
          {allFoods.map((food, index) => (
            <FoodCard key={index} food={food}></FoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFood;
