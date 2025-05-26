import { Helmet } from "react-helmet-async";

import FoodCard from "../FoodCard/FoodCard";
import search from "../../assets/searchBar.png";
import { useEffect, useState } from "react";
import axios from "axios";
import "./search.css";
const AllFood = () => {
  const [allFoods, setAllfoods] = useState([]);
  let [searchVal, setSearchVal] = useState("");
  let url = `https://restaurant-management-server-sage.vercel.app/allFoods`;
  // console.log(searchVal.length);
  useEffect(() => {
    if (searchVal.length === 0) {
      axios.get(url, { withCredentials: true }).then((res) => {
        setAllfoods(res.data);
      });
    } else if (searchVal.length !== 0) {
      url = `https://restaurant-management-server-sage.vercel.app/allFoods?searchVal=${searchVal}`;
      axios.get(url, { withCredentials: true }).then((res) => {
        setAllfoods(res.data);
      });
    }
  }, [searchVal]);
  return (
    <div>
      <Helmet>
        <title>DigiDINE | All_Foods</title>
      </Helmet>
      <div className="mx-auto w-11/12">
        <section className="flex text-center text-3xl  mt-6 mb-4 gap-4 justify-center items-center">
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
        <div className="search-box flex justify-end items-center gap-2">
          <p className="text-xl font-extrabold"> Search by Title:</p>
          <form>
            <img src={search} alt="" width={16} className="search-icon" />
            <input
              id="search-bar"
              onKeyUp={(e) => setSearchVal(e.target.value)}
              type="search"
              placeholder="Search foods by name"
              className="pl-6 pr-6 pt-2 pb-2 border-1 rounded-md text-lg"
            />
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-10 w-full">
          {allFoods.map((food, index) => (
            <FoodCard key={index} food={food}></FoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFood;
