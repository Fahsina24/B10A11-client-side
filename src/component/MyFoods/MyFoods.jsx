import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { GrDocumentUpdate } from "react-icons/gr";
import { useLoaderData } from "react-router-dom";

const MyFoods = () => {
  const dataList = useLoaderData();
  // console.log(dataList);

  return (
    <div>
      <Helmet>
        <title>DigiDINE | My_Foods</title>
      </Helmet>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <section className="text-2xl font-bold text-center mb-4">
          My Foods Lists
        </section>
        {dataList.length == 0 && (
          <div className=" w-11/12 mx-auto border-2 min-h-40 border-gray-300">
            <div className=" flex justify-center items-center min-h-40">
              <p className="text-center text-4xl">No Foods Added yet</p>
            </div>
          </div>
        )}

        {dataList.length != 0 && (
          <div className="overflow-x-auto w-11/12 mx-auto">
            <table className="table-auto table-xs w-full border-collapse border border-gray-300">
              {/* Table Header */}
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Serial No.
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Product Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Category
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Price
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Update
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataList.map((food, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex items-center gap-4">
                        <div>{parseInt(index + 1)}</div>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-2   font-semibold">
                      <div className="flex flex-col md:flex-row items-center gap-3">
                        <img
                          src={food.foodImage}
                          alt=""
                          className="w-12 h-12 rounded"
                        />
                        <p className="text-center"> {food.foodName}</p>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-2   font-semibold">
                      {food.foodCategory}
                    </td>
                    <td
                      className={`border border-gray-300 px-4 py-2 font-semibold`}
                    >
                      ${food.price}
                    </td>
                    <td className="border border-gray-300">
                      <Link to={`/update/${food._id}`}>
                        <button className="btn bg-gradient-to-r from-blue-500 to-blue-700 btn-sm text-white rounded-md  hover:bg-blue-700 m-4">
                          <GrDocumentUpdate size={20} />
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyFoods;
