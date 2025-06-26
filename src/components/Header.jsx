import { useContext, useState } from "react";
import { LOGO_URL } from "./utils/common";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // UserContext
  const dataContext = useContext(UserContext);
  // console.log(dataContext);

  const [login, setLogin] = useState("Login");
  // console.log(" data , means that out header component get re-rendered");
  const OnelineStatus = useOnlineStatus();
  // selector /subscribing store
  const cart = useSelector((store) => store.cart.items); // which portion is used
  console.log(cart);

  return (
    <>
      <div className="flex justify-around items-center bg-amber-600 text-white ">
        <Link to="/">
          <img className="max-w-[100px]" src={LOGO_URL} />
        </Link>

        <ul className="flex gap-8 text-[20px]">
          <Link>
            <li> status {OnelineStatus ? "Online👍" : "Offline🤦‍♂️"}</li>
          </Link>
          <Link to="/">
            <li>Home </li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/grocery">
            <li>Grocery </li>
          </Link>
          <button
            className="bg-blue-500 py-1 px-4 rounded text-white cursor-pointer"
            onClick={() =>
              login === "Login" ? setLogin("logout") : setLogin("Login")
            }
          >
            {login}
          </button>
          Context user: {dataContext.loginUser}
          <Link to="/cartheader">
            <li>
              Cart
              <span className="bg-red-800 px-2 text-center rounded-full">
                {cart.length}
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
