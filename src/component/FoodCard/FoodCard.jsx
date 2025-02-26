import { Link } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";
const FoodCard = ({ food }) => {
  const {
    _id,
    foodName,
    Image,
    foodCategory,
    quantity,
    price,
    foodOrigin,
    description,
    userEmail,
    userName,
  } = food;

  return (
    <div className="mb-6">
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg h-full w-11/12 mx-auto  hover:scale-102 hover:shadow-xl flex flex-col">
        {/* Image Section */}
        <figure className="overflow-hidden rounded-t-xl">
          <img
            src={Image}
            alt={foodName}
            className="w-full h-64 object-contain hover:scale-110"
          />
        </figure>

        {/* Content Section */}
        <div className="p-6">
          {/* Product Name and Category */}
          <h2 className="text-2xl font-bold text-blue-800 mb-1">{foodName}</h2>
          <p className="text-lg text-gray-600 font-semibold">
            Category: {foodCategory}
          </p>

          {/* Description */}
          <p className="text-gray-700 mt-2 mb-4 line-clamp-3">{description}</p>

          {/* Details Section */}
          <div className="grid grid-cols-2 gap-4 text-gray-600 mb-6">
            <div>
              <p className="font-semibold">Quantity:</p>
              <p
                className={`${
                  quantity != 0 ? "text-green-600" : "text-red-600"
                } font-bold`}
              >
                {quantity}
              </p>
            </div>
            <div>
              <p className="font-semibold">Price:</p>
              <p>${price} </p>
            </div>
            <div>
              <p className="font-semibold">Country Of Origin:</p>
              <p>{foodOrigin}</p>
            </div>
          </div>

          {/* Divider */}
          <hr className="mb-6 border-gray-300" />

          {/* User Details */}
          <div className="flex justify-between items-center text-gray-600 gap-6">
            <div>
              <p className="text-sm font-semibold">Seller:</p>
              <p>{userName}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Contact:</p>
              <p className="text-sm text-blue-500 text-wrap flex-wrap">
                {userEmail}
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-100 flex justify-between items-center rounded-b-xl mt-auto">
          <Link to={`/singleFood/${_id}`} className="w-full">
            <button className="flex items-center justify-center py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold rounded-lg shadow-md hover:scale-105  duration-300 gap-2 px-4 ">
              View Details <LuArrowUpRight size={22} />
            </button>
          </Link>
          <p className="text-xl font-bold text-gray-800 ml-4">Price:${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
