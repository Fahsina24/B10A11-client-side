import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/DiGIDIne.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success",
          text: "User Logged In Successfully ",
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

  //   const handleGoogleSignIn = () => {
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
        <form className="card-body" onSubmit={handleLogIn}>
          <p className="text-center text-4xl">Login</p>
          <div className="divider"></div>
          <div className="form-control">
            <label className="label mb-2">
              <span className="label-text text-2xl font-bold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="input input-bordered text-2xl h-[60px]"
              required
              name="email"
            />
          </div>
          <div className="form-control ">
            <label className="label ">
              <span className="label-text text-2xl font-bold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered h-[60px] text-2xl"
              required
              name="password"
            />
          </div>
          <div className="form-control mt-4">
            <button className="btn btn-primary rounded-full text-2xl h-[60px]">
              Login
            </button>
          </div>
          <div className="divider">or Log in with</div>
          <div className="form-control mt-4">
            <button className="btn text-2xl h-[60px] rounded-full hover:bg-[#564CFC] hover:text-white">
              <FcGoogle /> Log in with Google
            </button>
          </div>

          <p className="text-center mt-4 mb-8 text-lg">
            Do not have an account?
            <Link
              to="/register"
              className="label-text-alt link link-hover text-blue-700 text-lg ml-1"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
