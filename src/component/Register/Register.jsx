import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import logo from "../../assets/DiGIDIne.png";
import { FcGoogle } from "react-icons/fc";

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";
import { updateProfile } from "firebase/auth";

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
    // console.log(email, password, photoURL, displayName);

    if (password.length < 6) {
      setErrorMessage("Password should be atleast 6 character or more");
      return;
    }
    const passValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passValid.test(password)) {
      setErrorMessage(
        "Atleast one uppercase letter, one lowercase letter and minimum length will be 6 or more "
      );
      return;
    }

    // createUser with EmailAndPassword

    try {
      const result = await createUser(email, password);
      console.log(result);
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      });
      //  const user = { displayName, email, photoURL };

      // save into DB

      //  fetch("https://sports-server-side-seven.vercel.app/users", {
      //    method: "POST",
      //    headers: {
      //      "content-type": "application/json",
      //    },
      //    body: JSON.stringify(user),
      //  })
      //    .then((res) => res.json())
      //    .then((data) => {
      //      if (data.insertedId) {
      //        Swal.fire({
      //          title: "Success",
      //          text: "Registration Successful ",
      //          icon: "success",
      //          confirmButtonText: "Cool",
      //        });
      //      }
      //    });
      navigate("/");
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Registration Failed",
        text: "Already have an account using this email",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };
  //   const handleGoogleSignIn = () => {
  //     setErrorMessage("");
  //     signInWithGoogle()
  //       .then((result) => {
  //         // save user email to DB
  //         fetch("https://sports-server-side-seven.vercel.app/users", {
  //           method: "POST",
  //           headers: {
  //             "content-type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             displayName: result.user.displayName,
  //             email: result.user.email,
  //             photoURL: result.user.photoURL,
  //           }),
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             if (data.insertedId) {
  //               Swal.fire({
  //                 title: "Success",
  //                 text: "Registration Successful ",
  //                 icon: "success",
  //                 confirmButtonText: "Cool",
  //               });
  //             } else {
  //               Swal.fire({
  //                 title: "Success",
  //                 text: "User Logged In Successfully ",
  //                 icon: "success",
  //                 confirmButtonText: "Cool",
  //               });
  //             }
  //           });
  //         navigate("/");
  //       })
  //       .catch((err) => {
  //         console.log("Error", err);
  //         setErrorMessage(err.message);
  //       });
  //   };

  return (
    <div className="flex flex-col items-center justify-center mt-20 min-h-screen">
      <div className="flex justify-center items-center mb-10">
        <img src={logo} alt="" className="w-28 h-28 rounded-full text-center" />
      </div>
      <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl h-550px mb-20">
        <form className="card-body" onSubmit={handleRegister}>
          <p className="text-center text-4xl">Register</p>
          <p className="text-center text-xl text-blue-600 mt-4">
            Register Now to continue
          </p>
          <div className="divider"></div>

          <div className="form-control">
            <label className="label mb-2">
              <span className="label-text text-2xl font-bold ">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered text-2xl h-[60px]"
              required
            />
          </div>

          <div className="form-control">
            <label className="label mb-2">
              <span className="label-text text-2xl font-bold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your Email Address"
              name="email"
              className="input input-bordered text-2xl h-[60px]"
              required
            />
          </div>

          <div className="form-control">
            <label className="label mb-2">
              <span className="label-text text-2xl font-bold">Photo</span>
            </label>
            <input
              type="text"
              placeholder="PhotoUrl"
              name="photo"
              className="input input-bordered text-2xl h-[60px]"
            />
          </div>
          <div className="form-control ">
            <label className="label ">
              <span className="label-text text-2xl font-bold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              name="password"
              className="input input-bordered h-[60px] text-2xl"
              required
            />
          </div>
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}

          <div className="form-control mt-8">
            <button className="btn btn-primary rounded-full text-2xl h-[60px]">
              Register
            </button>
          </div>

          <div className="divider">or Register with</div>
          <div className="form-control mt-4">
            <button className="btn text-2xl h-[60px] rounded-full hover:bg-[#564CFC] hover:text-white">
              <FcGoogle /> Register with Google
            </button>
          </div>
        </form>

        <p className="text-center mb-8 text-lg">
          Already have an account?
          <Link
            to="/logIn"
            className="label-text-alt link link-hover text-blue-700 text-lg ml-1"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
