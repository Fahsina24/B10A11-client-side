import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";
import { DiAptana } from "react-icons/di";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/RegisterLottie.json";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    setBtnClicked(true);
    setErrorMessage("");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const displayName = e.target.name.value;
    const photoURL = e.target.image.value;

    try {
      // Password validation
      if (password.length < 6) {
        setBtnClicked(false);
        return setErrorMessage(
          "Password should be at least 6 characters long."
        );
      }
      if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
        setBtnClicked(false);
        return setErrorMessage(
          "Password must contain at least one uppercase letter, one lowercase letter, and one digit."
        );
      }

      // Create user

      await createUser(email, password);

      // Update profile
      await updateUserProfile(displayName, photoURL);
      const user = { email, displayName, photoURL };
      // console.log(user);
      fetch(`https://restaurant-management-server-sage.vercel.app/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              title: "Success",
              text: "Registration Successful ",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
      navigate("/");
    } catch (err) {
      Swal.fire({
        title: "Registration Failed",
        text: "Already have an account using this email",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
    setBtnClicked(false);
  };
  // Google Sign In
  const handleGoogleSignUp = async () => {
    await signInWithGoogle()
      .then((result) => {
        let user = result.user;
        const { displayName, photoURL, email } = user;
        // console.log(user);
        axios.post(
          `https://restaurant-management-server-sage.vercel.app/users`,
          {
            displayName,
            photoURL,
            email,
          }
        );
        navigate("/");
        Swal.fire({
          title: "Success",
          text: "Successfully Logged In",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((error) => {
        // console.error("Error during Google sign-in:", error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>DigiDINE | Register</title>
      </Helmet>
      <div className="flex flex-col md:flex-row items-center  gap-10 justify-center mt-20 min-h-screen">
        <div className=" justify-center">
          <Lottie
            animationData={registerAnimation}
            loop={true}
            className="w-96 h-96"
          />
        </div>
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl h-550px mb-20">
          <form className="card-body" onSubmit={handleRegister}>
            <p className="text-center text-3xl font-semibold mb-4 text-gray-700">
              Create Your{" "}
              <span className="bg-gradient-to-r from-blue-600 via-yellow-600 to-red-500 text-transparent bg-clip-text">
                DigiDINE
              </span>{" "}
              Account
            </p>

            <div className="form-control flex flex-col">
              <label className="label mb-2">
                <span className="label-text text-2xl font-bold ">Name:</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered text-2xl h-[60px] w-full"
                required
              />
            </div>

            <div className="form-control flex flex-col">
              <label className="label mb-2">
                <span className="label-text text-2xl font-bold">Email:</span>
              </label>
              <input
                type="email"
                placeholder="Enter your Email Address"
                name="email"
                className="input input-bordered text-2xl h-[60px]  w-full"
                required
              />
            </div>

            <div className="form-control flex flex-col">
              <label className="label mb-2">
                <span className="label-text text-2xl font-bold">PhotoURL:</span>
              </label>

              <input
                className="input input-bordered text-2xl h-[60px] w-full"
                name="image"
                type="text"
                placeholder="Enter photoURL"
              />
            </div>
            <div className="form-control flex flex-col ">
              <label className="label ">
                <span className="label-text text-2xl font-bold  w-full">
                  Password:
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                name="password"
                className="input input-bordered h-[60px] text-2xl  w-full"
                required
              />
            </div>
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}

            <div className="form-control mb-4">
              <button
                type="submit"
                className="btn w-full py-4 text-lg font-bold rounded-lg bg-blue-600 text-white mt-6 hover:bg-blue-800 "
              >
                {btnClicked ? <DiAptana className="animate-spin" /> : "Sign Up"}
              </button>
            </div>

            {/* Google Sign-Up Button */}
            <div className="divider">or Sign up with</div>
            <div className="form-control mb-6">
              <button
                className="btn w-full py-4 bg-white text-gray-700 border border-gray-300 rounded-lg flex items-center justify-center space-x-4 hover:bg-blue-600 hover:text-white"
                onClick={handleGoogleSignUp}
              >
                <FcGoogle size={24} />
                <span className="text-lg font-semibold">
                  Sign up with Google
                </span>
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-gray-700">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:underline hover:text-blue-600 hover:text-lg hover:font-extrabold"
              >
                Log in here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
