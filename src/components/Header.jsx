import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import EcomContext from "../context/EcomContext";
import AuthContext from "../context/AuthContext";

function Header() {
  const { cartCount, isAuthenticated } = useContext(EcomContext);
  const [state, dispatch ] = useContext(AuthContext)
  const redirect = useNavigate()
  console.log(cartCount);

  function logout(e) {
    e.preventDefault()
    console.log("logged out");
    dispatch({ type: "setToken", payload:null})
    localStorage.removeItem("auth-token")
    redirect("/")
  }
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>
              <Link className="w-full gap-2 flex" to={"/cart"}>
                <CiShoppingCart className="text-xl" /> Cart{" "}
                <p className="bg-blue-500 text-center rounded-full text-xs w-[18px] h-auto text-white">
                  {cartCount}
                </p>
              </Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            {isAuthenticated ?(
              <Dropdown.Item><Link onClick={logout}>Logout</Link></Dropdown.Item>
            ) : (
              <>
              <Dropdown.Item><Link to="/login">Login</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/register">Register</Link></Dropdown.Item>
              </>
            ) }
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="/pricing">Pricing</Navbar.Link>
          <Navbar.Link href="/contactt">Contact</Navbar.Link>
          {/* <Navbar.Link href="/register">Register</Navbar.Link> */}
          {/* <Navbar.Link href="/login">Log In</Navbar.Link> */}
          <Navbar.Link href="/products">Products</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
