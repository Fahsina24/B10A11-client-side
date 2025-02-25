import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";
import { imageUpload } from "../../api/ImgApi";
import { DiAptana } from "react-icons/di";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/RegisterLottie.json";

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
    const image = e.target.image.files[0];

    try {
      // Upload image
      const photoURL = await imageUpload(image);

      // Password validation
      if (password.length < 6) {
        throw new Error("Password should be at least 6 characters long.");
      }
      if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
        throw new Error(
          "Password must contain at least one uppercase letter, one lowercase letter, and one digit."
        );
      }

      // Create user
      const result = await createUser(email, password);

      // Update profile
      await updateUserProfile(displayName, photoURL);

      navigate("/");
      Swal.fire({
        title: "Registration Successful",
        text: "You are now logged in!",
        icon: "success",
        confirmButtonText: "Close",
      });
    } catch (error) {
      Swal.fire({
        title: "Failed to Register",
        text: "Already have an account",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
    setBtnClicked(false);
  };
  // Google Sign In

  const handleGoogleSignUp = async () => {
    const result = await signInWithGoogle();
    // const { displayName, photoURL, email } = result.user;
    // await axios.post(`http://localhost:3000/users/${email}`, {
    //   displayName,
    //   photoURL,
    //   email,
    // });
    Swal.fire({
      title: "Success",
      text: "Successfully Logged In",
      icon: "success",
      confirmButtonText: "Cool",
    });
    navigate("/");
  };

  return (
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
              <span className="label-text text-2xl font-bold">Image:</span>
            </label>

            <input
              type="file"
              className="file-input file-input-success mt-2 text-sm text-gray-500"
              name="image"
              accept="image/*"
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
              className="btn w-full py-4 bg-white text-gray-700 border border-gray-300 rounded-lg flex items-center justify-center space-x-4 hover:bg-blue-800"
              onClick={handleGoogleSignUp}
            >
              <FcGoogle size={24} />
              <span className="text-lg font-semibold">Sign up with Google</span>
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-gray-700">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
