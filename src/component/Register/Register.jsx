import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/RegisterLottie.json";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    setErrorMessage("");
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;

    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters.");
      return;
    }
    const passValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passValid.test(password)) {
      setErrorMessage(
        "Password must include at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    try {
      const result = await createUser(email, password);
      navigate("/");
    } catch (err) {
      Swal.fire({
        title: "Registration Failed",
        text: "An error occurred while registering. Please try again.",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10">
      {/* Lottie Animation Section */}
      <div className="hidden md:flex justify-center ml-10">
        <Lottie
          animationData={registerAnimation}
          loop={true}
          className="w-96 h-96"
        />
      </div>

      {/* Register Form Section */}
      <div className="flex flex-col items-center bg-white rounded-lg shadow-xl p-8 w-full max-w-xl ">
        <form onSubmit={handleRegister} className="w-full">
          <p className="text-3xl font-semibold text-center text-gray-700 mb-6">
            Register to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-yellow-600 to-red-500 inline-block text-transparent bg-clip-text">
              DigiDINE
            </span>
          </p>

          {/* Name Input */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text text-lg font-semibold text-gray-600">
                Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full text-lg p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-1 border-gray-300"
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text text-lg font-semibold text-gray-600">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full text-lg p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-1 border-gray-300"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text text-lg font-semibold text-gray-600">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full text-lg p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-1 border-gray-300"
            />
          </div>

          {/* Password Input */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text text-lg font-semibold text-gray-600">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full text-lg p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-1 border-gray-300"
              required
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-600 text-lg text-center">{errorMessage}</p>
          )}

          {/* Register Button */}
          <div className="form-control mb-6">
            <button
              type="submit"
              className="btn w-full py-4 text-lg font-bold rounded-lg bg-blue-600 text-white transition duration-300 ease-in-out hover:bg-blue-700 hover:scale-105"
            >
              Register
            </button>
          </div>

          {/* Google Register Button */}
          <div className="divider">or Register with</div>
          <div className="form-control mb-6">
            <button className="btn w-full py-4 bg-white text-gray-700 border border-gray-300 rounded-lg flex items-center justify-center space-x-4 hover:bg-gray-100 transition duration-300 ease-in-out h-fit">
              <FcGoogle size={24} />
              <span className="text-lg font-semibold ">
                Register with Google
              </span>
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-gray-700">
            Already have an account?{" "}
            <Link to="/logIn" className="text-blue-600 hover:underline">
              Log in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
