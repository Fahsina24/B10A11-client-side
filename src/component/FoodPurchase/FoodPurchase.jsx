import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodPurchase = () => {
  const { user } = useContext(AuthContext);
  const details = useLoaderData();
  const [disableBtn, setDisableBtn] = useState(false);
  const { _id, foodName, quantity, price, addBy, foodImage, purchaseCount } =
    details;
  // console.log(purchaseCount);
  const navigate = useNavigate();
  const handlePurchase = (e) => {
    e.preventDefault();
    const productId = _id;
    const buyingQuantity = parseInt(e.target.buyingQuantity.value);
    const sellerEmail = addBy?.userEmail;
    const sellerName = addBy?.userName;
    const buyerEmail = user?.email;
    const buyerName = user?.displayName;
    const buyingTime = new Date().toLocaleTimeString();
    const buyingDate = new Date().toLocaleDateString();
    if (quantity == 0) {
      setDisableBtn(true);
      console.log(disableBtn);
      Swal.fire({
        icon: "info",
        title: "Sorry",
        text: `Opps. You cannot able to buy ${foodName} as it is not available`,
        confirmButtonText: "Close",
        showClass: {
          popup: "animate__animated animate__fadeInUp animate__faster",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown animate__faster",
        },
      });

      return;
    } else if (buyingQuantity == 0) {
      Swal.fire({
        icon: "info",
        title: "Sorry",
        text: `You must need to order one item if you want to purchase it`,
        confirmButtonText: "Close",
        showClass: {
          popup: "animate__animated animate__fadeInUp animate__faster",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown animate__faster",
        },
      });
      return;
    } else if (buyingQuantity > quantity) {
      Swal.fire({
        icon: "info",
        title: "Sorry",
        text: `You cannot order the items more than our available quantity`,
        confirmButtonText: "Close",
        showClass: {
          popup: "animate__animated animate__fadeInUp animate__faster",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown animate__faster",
        },
      });
      return;
    } else if (buyingQuantity > 0 && buyingQuantity <= quantity) {
      const foodInfo = {
        foodName,
        productId,
        price,
        buyingQuantity,
        foodImage,
        sellerDetails: { sellerEmail, sellerName },
        buyerDetails: { buyerEmail, buyerName, buyingTime, buyingDate },
      };

      try {
        axios.post(
          `https://restaurant-management-server-sage.vercel.app/purchaseFoods`,
          foodInfo,
          {
            withCredentials: true,
          }
        );
        Swal.fire({
          icon: "success",
          title: "Purchased Successful",
          text: `${foodName} is purchased`,
          confirmButtonText: "Close",
          showClass: {
            popup: "animate__animated animate__fadeInUp animate__faster",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutDown animate__faster",
          },
        });
        axios.patch(
          `https://restaurant-management-server-sage.vercel.app/updateQuantity/${productId}`,
          foodInfo,

          {
            withCredentials: true,
          }
        );
        navigate(`/orderPage/${buyerEmail}`);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <Helmet>
        <title>DigiDINE | Purchase_Page</title>
      </Helmet>
      <div className="flex items-center justify-center min-h-screen px-4 py-10">
        <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-xl border border-gray-200">
          <form onSubmit={handlePurchase} className="w-full space-y-6">
            <p className="text-4xl font-bold text-center text-gray-800 mb-6">
              Purchase
              <span className="bg-gradient-to-r from-blue-600 via-yellow-600 to-red-500 inline-block text-transparent bg-clip-text">
                Food Item
              </span>
            </p>

            {/* Food Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold text-gray-700">
                  Food Name
                </span>
              </label>
              <input
                value={foodName}
                readOnly
                name="foodName"
                className="input input-bordered w-full text-lg p-4 rounded-xl shadow-md bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Price Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold text-gray-700">
                  Price
                </span>
              </label>
              <input
                value={price}
                readOnly
                name="price"
                className="input input-bordered w-full text-lg p-4 rounded-xl shadow-md bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Quantity Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold text-gray-700">
                  Quantity
                </span>
              </label>
              <input
                name="buyingQuantity"
                type="number"
                required
                className="input input-bordered w-full text-lg p-4 rounded-xl shadow-md bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Buyer Name (Read-Only) */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold text-gray-700">
                  Buyer Name
                </span>
              </label>
              <input
                type="text"
                value={user.displayName}
                readOnly
                className="input input-bordered w-full text-lg p-4 rounded-xl shadow-md bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Buyer Email (Read-Only) */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold text-gray-700">
                  Buyer Email
                </span>
              </label>
              <input
                type="email"
                value={user.email}
                readOnly
                className="input input-bordered w-full text-lg p-4 rounded-xl shadow-md bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Purchase Button */}
            <div className="form-control" onSubmit={handlePurchase}>
              {disableBtn ? (
                <button
                  disabled
                  className=" btn w-full bg-gray-400 text-xl cursor-not-allowed text-white rounded-lg px-4 py-2 "
                >
                  Purchase
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn w-full py-4 text-xl font-bold rounded-xl bg-blue-600 text-white transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 shadow-lg"
                >
                  Purchase
                </button>
              )}
            </div>
          </form>
          <button
            onClick={() => navigate(-2)}
            className="btn w-full py-4 text-xl font-bold rounded-xl bg-blue-600 text-white transition-all duration-300 ease-in-out mt-6 hover:bg-blue-700 hover:scale-105 shadow-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodPurchase;
