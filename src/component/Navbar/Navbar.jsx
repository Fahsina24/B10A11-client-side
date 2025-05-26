import { NavLink, Link } from "react-router-dom";
import { RiMenuFold2Fill } from "react-icons/ri";
import logo from "../../assets/DiGIDIne.png";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <li className="flex  justify-center items-center">
        <NavLink
          to="/"
          className="block text-xl md:text-lg p-4 lg:p-2 w-full lg:h-12 h-16 text-center "
        >
          Home
        </NavLink>
      </li>
      <br />
      <li className="flex  justify-center items-center">
        <NavLink
          to="/allFoods"
          className="block text-xl md:text-lg p-4 lg:p-2 w-full lg:h-12 h-16 text-center"
        >
          All Foods
        </NavLink>
      </li>
      <br />
      <li className="flex  justify-center items-center">
        <NavLink
          to="/gallery"
          className="block  text-xl md:text-lg p-4 lg:p-2 w-full lg:h-12 h-16 text-center"
        >
          Gallery
        </NavLink>
      </li>
    </>
  );

  const profileLink = (
    <>
      <li className="flex  justify-center items-center">
        <NavLink
          to={`/my_foods/${user?.email}`}
          className="block text-base md:text-lg p-4 lg:p-2 w-full lg:h-12 h-16 text-center"
        >
          My Foods
        </NavLink>
      </li>
      <br />
      <li className="flex  justify-center items-center">
        <NavLink
          to="/add_food"
          className="block text-base md:text-lg p-4 lg:p-2 w-full lg:h-12 h-16 text-center"
        >
          Add Food
        </NavLink>
      </li>
      <br />
      <li className="flex  justify-center items-center">
        <NavLink
          to={`/orderPage/${user?.email}`}
          className="block text-base md:text-lg p-4 lg:p-2 w-full lg:h-12 h-16 text-center"
        >
          My Orders
        </NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutUser().then(() => {
      Swal.fire({
        title: "Success",
        text: "Sign Out Successful",
        icon: "success",
        confirmButtonText: "Close",
      });
      navigate("/register");
    });
  };

  return (
    <nav className="navbar shadow-lg w-full flex gap-2 justify-between pt-4 pb-4 bg-base-300">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost btn-circle p-2"
          >
            <RiMenuFold2Fill size={42} />
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center text-center">
          <img
            src={logo}
            alt="Logo"
            className="rounded-full w-14 lg:hidden block"
          />
          <div className="hidden md:block text-lg font-bold md:text-xl bg-gradient-to-r from-sky-300 to-red-300 p-2 rounded-lg lg:p-4 text-center ml-2">
            <span className="bg-gradient-to-r from-blue-600 via-yellow-600 to-red-500 inline-block text-transparent bg-clip-text font-extrabold">
              DigiDINE
            </span>
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 flex items-center justify-center text-center">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown hidden md:flex">
          <div tabIndex={0} className="btn m-4">
            <div className="flex gap-2 text-xl">
              Theme
              <IoIosArrowDown size={30} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-200 rounded-box top-18 right-4 z-[1] w-50 h-26 p-2 shadow-2xl"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className=" btn btn-sm text-xl btn-block btn-ghost justify-start"
                aria-label="Light"
                value="light"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller text-xl btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Dark"
                value="dark"
              />
            </li>
          </ul>
        </div>
        {user ? (
          <div className="dropdown flex justify-center items-center">
            <img
              src={user.photoURL}
              tabIndex="0"
              className="w-14 md:w-16  h-14 md:h-16 rounded-full mr-2 "
              role="button"
            />

            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-68 w-52 p-2 shadow right-10"
            >
              {profileLink}
            </ul>

            <button
              className="btn bg-gradient-to-r from-red-300 to-sky-400  rounded-lg w-22 font-bold text-xs md:text-lg lg:text-xl  md:w-28 md:h-13 h-10 lg:h-16"
              onClick={handleSignOut}
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex gap-2 justify-center items-center text-center">
            <Link
              to="/logIn"
              className="btn bg-gradient-to-r from-red-300 to-sky-400 p-2 rounded-lg lg:p-4 font-bold text-base md:text-lg lg:text-xl w-22 lg:w-26 h-16"
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="btn bg-gradient-to-r from-purple-300 to-blue-400 p-2 rounded-lg lg:p-4 font-bold text-base md:text-lg lg:text-xl w-22 lg:w-26 h-16"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
