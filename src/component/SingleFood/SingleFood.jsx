import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
const SingleFood = () => {
  const details = useLoaderData();
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
  } = details;

  return (
    <div>
      <Helmet>
        <title>DigiDINE | Single_Food</title>
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-8">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
          {foodName} Details
        </h2>
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mx-auto w-11/12 sm:w-10/12 lg:w-8/12">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2">
              <img
                src={Image}
                alt={foodName}
                className="w-full h-72 object-contain rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-3xl font-semibold text-gray-800">
                {foodName}
              </h3>
              <p className="text-gray-500">
                <span className="font-bold">Category:</span> {foodCategory}
              </p>

              <div className="flex flex-wrap gap-4 mt-4 text-gray-700">
                <div className="flex-1">
                  <p className="font-bold">Quantity:</p>
                  <p>{quantity}</p>
                </div>
                <div className="flex-1">
                  <p className="font-bold">Origin:</p>
                  <p>{foodOrigin}</p>
                </div>
              </div>
              <div className="mt-4 flex">
                <p className="font-bold text-lg text-gray-800">Price: </p>
                <p className="text-lg font-bold text-green-600 ml-1">
                  ${price}
                </p>
              </div>
              <div>
                <p className="font-bold">Purchased By User:</p>
                <p>0</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">
              Details:
              <p className="font-medium text-gray-700">{description}</p>
            </h4>
            <hr className="my-6" />
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              <div>
                <p className="text-lg font-bold text-gray-800">
                  Seller Details:
                </p>
                <p className="text-gray-700">{userName}</p>
                <p className="text-gray-500">{userEmail}</p>
              </div>
              <div className="mt-4 lg:mt-0">
                <Link
                  to={`/purchase_page/${_id}`}
                  className="btn bg-gradient-to-r from-blue-500 to-blue-700 btn-base text-white rounded-lg px-4 py-2 hover:bg-blue-700"
                >
                  Purchase Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link
            to="/"
            className="btn bg-gradient-to-r from-blue-500 to-blue-700 btn-lg text-white rounded-lg px-4 py-2"
          >
            Back To HomePage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
