import { NavLink, Link } from "react-router-dom";
import { RiMenuFold2Fill } from "react-icons/ri";
import logo from "../../assets/DiGIDIne.png";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [imgClicked, setImgClicked] = useState(false);

  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className=" block btn text-base md:text-lg p-2 lg:p-4 rounded-md "
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allFoods"
          className="btn btn-ghost text-base md:text-lg lg:w-[140px] px-4 h-16 "
        >
          All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className="btn btn-ghost text-base md:text-lg lg:w-[140px] px-4 h-16 "
        >
          Gallery
        </NavLink>
      </li>
    </>
  );
  const profileLink = (
    <>
      <li>
        <NavLink
          to="/my_food"
          className=" block btn text-base md:text-lg p-2 lg:p-4 rounded-md "
        >
          My Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add_food"
          className=" block btn text-base md:text-lg p-2 lg:p-4 rounded-md "
        >
          Add Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my_orders"
          className=" block btn text-base md:text-lg p-2 lg:p-4 rounded-md "
        >
          My Orders
        </NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User Sign out Successfully.");
        Swal.fire({
          title: "Success",
          text: "Sign Out Successful ",
          icon: "success",
          confirmButtonText: "Close",
        });
        navigate("/register");
      })
      .catch((error) => console.log("Error", error.message));
  };

  return (
    <nav className="navbar bg-base-100 shadow-lg w-full flex gap-2 justify-between pt-4 pb-4">
      {/* Navbar Start */}
      <div className="relative justify-center flex items-center ">
        <div className="lg:hidden group focus-within:outline-none ">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            <RiMenuFold2Fill
              className="text-2xl hover:bg-gray-400 hover:border-2 hover:border-gray-400"
              size={30}
            />
          </button>
          {isOpen && (
            <ul className="absolute left-4 top-14 bg-white border-gray-400 shadow-lg p-2 rounded-lg w-40 h-26 border-1 group focus-within:hidden">
              {links}
            </ul>
          )}
        </div>
        <Link to="/" className="flex items-center text-center">
          <img
            src={logo}
            alt="Logo"
            className="rounded-full w-12 h-12  lg:hidden
            block"
          />
          <div className="hidden md:block text-lg font-bold md:text-xl bg-gradient-to-r from-red-400 to-sky-400 p-2 rounded-lg lg:p-4  text-center ml-2">
            DigiDine
          </div>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 flex items-center justify-center">
          {links}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex gap-2">
        <div>
          {user ? (
            <div className="lg:hidden group focus-within:outline-none flex gap-2 mr-2">
              <img
                onClick={() => setImgClicked(!imgClicked)}
                src={user.photoURL}
                className="w-14 rounded-full"
              />

              {imgClicked && (
                <ul className="absolute right-30 top-18 bg-white border-gray-400 shadow-lg p-2 rounded-lg w-40 h-fit border-1 group focus-within:hidden">
                  {profileLink}
                </ul>
              )}

              <button
                className="btn bg-gradient-to-r  from-red-300 to-sky-400 p-2 rounded-lg lg:p-4"
                onClick={handleSignOut}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/logIn"
                className="btn bg-gradient-to-r from-blue-500 to-blue-700 w-20 md:w-32 md:h-16 text-sm text-white md:text-lg"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="btn btn-secondary w-20 md:w-32 md:h-16 text-sm md:text-lg"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
