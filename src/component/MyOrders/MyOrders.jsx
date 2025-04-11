import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const MyOrders = () => {
  const dataList = useLoaderData();
  // console.log(dataList);

  return (
    <div>
      <Helmet>
        <title>DigiDINE | Orders</title>
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-8">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
          My Orders
        </h2>
        {dataList.length == 0 && (
          <div className=" w-11/12 mx-auto border-2 min-h-40 border-gray-300">
            <div className=" flex justify-center items-center min-h-40">
              <p className="text-center text-4xl">No Foods Added yet</p>
            </div>
          </div>
        )}

        {dataList.length != 0 && (
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mx-auto w-11/12 sm:w-10/12 lg:w-8/12">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="border border-gray-300">
                  <tr>
                    <th className="border border-gray-300"></th>
                    <th className="border border-gray-300">Name</th>
                    <th className="border border-gray-300">Image</th>
                    <th className="border border-gray-300">Price</th>
                    <th className="border border-gray-300">Seller Name</th>
                    <th className="border border-gray-300">Buying Date</th>
                    <th className="border border-gray-300">Buying Time</th>
                    <th className="border border-gray-300">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {dataList.map((food, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300">
                        {" "}
                        <div className="font-bold text-lg text-blue-800">
                          {index + 1}
                        </div>
                      </td>
                      <td className="border border-gray-300">
                        <div className="font-bold text-lg text-blue-800">
                          {food.foodName}
                        </div>
                      </td>
                      <td className="border border-gray-300 font-semibold">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16">
                            <img
                              src={food.foodImage}
                              alt={food.foodName}
                              className="rounded-md object-contain w-full h-full"
                            />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">
                              {food.price}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="border border-gray-300 text-center font-semibold">
                        {food.price}
                      </td>
                      <td
                        className={`border border-gray-300 font-semibold text-center`}
                      >
                        {food.sellerDetails.sellerName}
                      </td>
                      <td
                        className={`border border-gray-300 font-semibold text-center`}
                      >
                        {food.buyerDetails.buyingDate}
                      </td>
                      <td
                        className={`border border-gray-300 font-semibold text-center`}
                      >
                        {food.buyerDetails.buyingTime}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button className="btn bg-gradient-to-r from-blue-500 to-blue-700 btn-sm text-white rounded-md  hover:bg-blue-700 m-4">
                          <MdDeleteForever size={22} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
