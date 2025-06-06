import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Helmet } from "react-helmet-async";

const AddFoods = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const purchaseCount = 0;

  const handleAddFood = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.image.value;
    const foodCategory = form.foodCategory.value;
    const quantity = parseInt(form.quantity.value);
    const price = parseFloat(form.price.value);
    const foodOrigin = form.foodOrigin.value;
    const description = form.description.value;
    const userEmail = user?.email;
    const userName = user?.displayName;
    // console.log(foodImage);

    const newFood = {
      foodName,
      foodImage,
      foodCategory,
      quantity,
      price,
      foodOrigin,
      description,
      purchaseCount,
      addBy: { userEmail, userName },
    };
    // console.log(newFood);

    try {
      await axios.post(
        "https://restaurant-management-server-sage.vercel.app/addFoods",
        newFood,
        { withCredentials: true }
      );
      Swal.fire({
        title: "Success",
        text: "Food item added successfully!",
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
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleAddFood}
          >
            {[
              { label: "Food Name", name: "foodName", type: "text" },
              { label: "Food Category", name: "foodCategory", type: "text" },
              { label: "Quantity", name: "quantity", type: "number" },
              { label: "Price", name: "price", type: "number" },
              { label: "Country of Origin", name: "foodOrigin", type: "text" },
            ].map((input, index) => (
              <div key={index} className="form-control flex flex-col">
                <label className="label font-semibold text-gray-700">
                  {input.label}
                </label>
                <input
                  type={input.type}
                  name={input.name}
                  className="input input-bordered rounded-lg shadow-sm"
                  required
                />
              </div>
            ))}

            <div className="form-control flex flex-col md:col-span-2">
              <label className="label font-semibold text-gray-700">
                PhotoURL
              </label>
              <input
                type="text"
                className="input input-bordered rounded-lg shadow-sm text-gray-500"
                name="image"
              />
            </div>

            <div className="form-control flex flex-col md:col-span-2">
              <label className="label font-semibold text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered rounded-lg shadow-sm"
                placeholder="Ingredients, procedure, etc."
                required
              ></textarea>
            </div>

            {[
              { label: "User Name", name: "userName", value: user.displayName },
              { label: "User Email", name: "userEmail", value: user.email },
            ].map((input, index) => (
              <div key={index} className="form-control flex flex-col">
                <label className="label font-semibold text-gray-700">
                  {input.label}
                </label>
                <input
                  type="text"
                  name={input.name}
                  value={input.value}
                  className="input input-bordered bg-gray-100 rounded-lg shadow-sm"
                  readOnly
                />
              </div>
            ))}
            <button
              type="submit"
              className="btn bg-gradient-to-r from-red-400 to-sky-400 text-black w-full text-lg font-bold py-3 rounded-lg"
            >
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFoods;
