import { NavLink, Link } from "react-router-dom";
import { RiMenuFold2Fill } from "react-icons/ri";
import logo from "../../assets/DiGIDIne.png";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="block btn text-base md:text-lg p-2 md:p-4 rounded-md w-full h-16 text-center"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allFoods"
          className="btn btn-ghost text-base md:text-lg w-full px-4 h-16"
        >
          All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className="btn btn-ghost text-base md:text-lg lg:w-[140px] px-4 h-16"
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
          className="block btn text-base md:text-lg p-2 lg:p-4 rounded-md"
        >
          My Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add_food"
          className="block btn text-base md:text-lg p-2 lg:p-4 rounded-md"
        >
          Add Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my_orders"
          className="block btn text-base md:text-lg p-2 lg:p-4 rounded-md"
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
    <nav className="navbar bg-base-100 shadow-lg w-full flex gap-2 justify-between pt-4 pb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
            <RiMenuFold2Fill size={40} />
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
          <div className="hidden md:block text-lg font-bold md:text-xl bg-gradient-to-r from-red-400 to-sky-400 p-2 rounded-lg lg:p-4 text-center ml-2">
            DigiDINE
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 flex items-center justify-center text-center">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        {user ? (
          <div className="dropdown">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost btn-circle w-fit"
            >
              <img
                src={user.photoURL}
                className="w-16 rounded-full "
                role="button"
              />
            </div>

            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-10"
            >
              {profileLink}
            </ul>

            <button
              className="btn bg-gradient-to-r from-red-300 to-sky-400 p-2 rounded-lg lg:p-4 font-bold text-base md:text-lg lg:text-xl w-28 h-16"
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
