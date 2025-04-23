import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const UpdateFoodInfo = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const singleFoodInfo = useLoaderData();
  // console.log(singleFoodInfo);

  const [foodName, setFoodName] = useState(singleFoodInfo?.foodName);
  const [foodCategory, setFoodCategory] = useState(
    singleFoodInfo?.foodCategory
  );
  const [description, setDescription] = useState(singleFoodInfo?.description);
  const [price, setPrice] = useState(singleFoodInfo?.price);
  const [quantity, setQuantity] = useState(singleFoodInfo?.quantity);
  const [foodImage, setFoodImage] = useState(singleFoodInfo?.foodImage);
  const [foodOrigin, setFoodOrigin] = useState(singleFoodInfo?.foodOrigin);

  const handleUpdateFood = async (e) => {
    e.preventDefault();
    const userEmail = user?.email;
    const userName = user?.displayName;

    const updateFood = {
      foodName,
      foodImage,
      foodCategory,
      quantity,
      price,
      foodOrigin,
      description,
      addBy: { userEmail, userName },
    };
    // console.log(updateFood);

    try {
      await axios.patch(`http://localhost:3000/update/${id}`, updateFood);
      Swal.fire({
        title: "Success",
        text: "Food info updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>DigiDINE | Add_Foods</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
        <p className="text-4xl font-extrabold text-gray-800 mb-6">
          Add Food Item
        </p>
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6 "
            onSubmit={handleUpdateFood}
          >
            <div className="form-control flex flex-col">
              <label className="label font-semibold text-gray-700">
                Food Name
              </label>
              <input
                type="text"
                name="foodName"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                className="input input-bordered rounded-lg shadow-sm"
              />
            </div>

            <div className="form-control flex flex-col">
              <label className="label font-semibold text-gray-700">
                Food Category
              </label>
              <input
                type="text"
                name="foodCategory"
                value={foodCategory}
                onChange={(e) => setFoodCategory(e.target.value)}
                className="input input-bordered rounded-lg shadow-sm"
              />
            </div>

            <div className="form-control flex flex-col">
              <label className="label font-semibold text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="input input-bordered rounded-lg shadow-sm"
              />
            </div>

            <div className="form-control flex flex-col">
              <label className="label font-semibold text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value))}
                className="input input-bordered rounded-lg shadow-sm"
              />
            </div>

            <div className="form-control flex flex-col">
              <label className="label font-semibold text-gray-700">
                Country of Origin
              </label>
              <input
                type="text"
                name="foodOrigin"
                value={foodOrigin}
                onChange={(e) => setFoodOrigin(e.target.value)}
                className="input input-bordered rounded-lg shadow-sm"
              />
            </div>

            <div className="form-control flex flex-col md:col-span-2">
              <label className="label font-semibold text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                name="foodImage"
                value={foodImage}
                onChange={(e) => setFoodImage(e.target.value)}
                className="input input-bordered rounded-lg shadow-sm"
              />
            </div>

            <div className="form-control flex flex-col md:col-span-2">
              <label className="label font-semibold text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="textarea textarea-bordered rounded-lg shadow-sm"
                placeholder="Ingredients, procedure, etc."
              ></textarea>
            </div>

            {/* Read-only user fields */}
            <div className="form-control flex flex-col">
              <label className="label font-semibold text-gray-700">
                User Name
              </label>
              <input
                type="text"
                name="userName"
                value={user?.displayName || ""}
                className="input input-bordered bg-gray-100 rounded-lg shadow-sm"
                readOnly
              />
            </div>

            <div className="form-control flex flex-col">
              <label className="label font-semibold text-gray-700">
                User Email
              </label>
              <input
                type="text"
                name="userEmail"
                value={user?.email || ""}
                className="input input-bordered bg-gray-100 rounded-lg shadow-sm"
                readOnly
              />
            </div>
            <div className="lg:col-span-2 ">
              <button
                type="submit"
                className="btn bg-gradient-to-r from-red-400 to-sky-400 text-black w-full mx-auto justify-center items-center text-lg font-bold py-3 rounded-lg"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateFoodInfo;
