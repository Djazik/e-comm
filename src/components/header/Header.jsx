import "./headerr.css";
import { NavLink } from "react-router-dom";
import HeaderTop from "./headerTop/HeaderTop";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import icon from "../../assets/searchIcon.svg"
import cart from "../../assets/cart.svg"
import user from "../../assets/user.png"
import wishlist from "../../assets/wishlist.svg"

export const Header = () => {
  return (
    <div>
      {/* <HeaderTop />
      <div className="container ">
        <div className="navbar">
          <h1 className="navbar__title">Exclusive</h1>
          <div className="navbar__links">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink>Sign Up</NavLink>
          </div>
          <div className="navbar__btns">
            <div className="nav__input">
              <input type="text" placeholder="What are you looking for?" />
              <span>
                <IoSearch />
              </span>
            </div>
            <NavLink to={"/wishlist"}>  <FaRegHeart /> </NavLink>
            <NavLink> <IoCartOutline /> </NavLink>
          </div>
        </div>
      </div> */}



<header>
                

            <div className="top-header">
                <div className="topheader">
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <a href="#" className="ShopNow">Shop Now</a>

                    <p className="lang">English </p>
                </div>
                
            </div>


            <div className="header">
                <h2 className="logo"><NavLink> Exlusive</NavLink></h2>
                <ul className="menu balck-list">
                    {/* <li><a href="./HomePage.html">Home</a></li>
                    <li><a href="./contact.html">Contact</a></li>
                    <li><a href="./About.html">About</a></li>
                    <li><a href="./Sign-Up.html">Sign Up</a></li> */}
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink>Contact</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                     <NavLink>Sign Up</NavLink>

                </ul>
                <div className="search">
                    <input type="search" placeholder="What are you looking for?" />
                      <img src={icon} alt="" />
                </div>
                <div className="wish-card">
                    {/* <a href="./Wishlist.html"><img src="./img/wishlist.svg"></a>          
                    <a href="./cart.html"><img src="./img/cart.svg"></a>
                <a href="./Account.html"><img src="./img/user.png"></a> */}
                 <NavLink to={"/wishlist"}>  <img src={wishlist} alt="" />  </NavLink>
                 <NavLink to={"/cart"}>  <img src={cart} alt="" />  </NavLink>
                  <NavLink> <img src={user} alt="" /> </NavLink>

                </div>
            </div>
        </header>
    </div>
  );
};

export default Header;
