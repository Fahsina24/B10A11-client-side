import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/LogInLottie.json";

const LogIn = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogIn = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    await signInUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Success",
          text: "User Logged In Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Failed to Log In",
          text: "Please use correct credentials",
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };

  const handleGoogleSignIn = async () => {
    setErrorMessage("");
    await signInWithGoogle()
      .then((result) => {
        const user = result.user;
        const { displayName, photoURL, email } = user;
        console.log(user, displayName, photoURL, email);
        Swal.fire({
          title: "Success",
          text: "User Logged In Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.errorMessage);
      });

    // await axios.post(`http://localhost:3000/users/${email}`, {
    //   displayName,
    //   photoURL,
    //   email,
    // });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10">
      {/* Login Form Section */}
      <div className="flex flex-col items-center bg-white rounded-lg shadow-xl p-8 w-full max-w-xl ">
        <form onSubmit={handleLogIn} className="w-full">
          <p className="text-3xl font-semibold text-center text-gray-700 mb-6">
            Log in to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-yellow-600 to-red-500 inline-block text-transparent bg-clip-text">
              DigiDINE
            </span>
          </p>

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

          {/* Login Button */}
          <div className="form-control mb-6">
            <button
              type="submit"
              className="btn w-full py-4 text-lg font-bold rounded-lg bg-blue-600 text-white transition duration-300 ease-in-out hover:bg-blue-700 hover:scale-105"
            >
              Log In
            </button>
          </div>

          {/* Google Login Button */}
          <div className="divider">or Log in with</div>
          <div className="form-control mb-6">
            <button
              className="btn w-full py-4 bg-white text-gray-700 border border-gray-300 rounded-lg flex items-center justify-center space-x-4 hover:bg-gray-100 transition duration-300 ease-in-out"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle size={24} />
              <span className="text-lg font-semibold">Log in with Google</span>
            </button>
          </div>
          {errorMessage && <p>{errorMessage}</p>}

          {/* Signup Link */}
          <p className="text-center text-gray-700">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </form>
      </div>

      {/* Lottie Animation Section */}
      <div className="hidden md:flex justify-center ml-10">
        <Lottie
          animationData={loginAnimation}
          loop={true}
          className="w-96 h-96"
        />
      </div>
    </div>
  );
};

export default LogIn;
