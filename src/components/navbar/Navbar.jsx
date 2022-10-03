import React, { useState } from "react";
import "./NavbarStyles.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { GiCarWheel } from "react-icons/gi";
import { Link } from "react-scroll";

const Navbar = () => {
  // 控制導覽列 toggle
  const [nav, setNav] = useState(false);
  // 控制logo 滑動
  const [slide, setSlide] = useState(false);

  // 導覽列toggle
  let handleNav = () => {
    setNav(!nav);
    setSlide(!slide);
  };

  // 解決RWD 點擊.nav_menu內容會收縮
  let handleChange = () => {
    setNav(!nav);
    setSlide(!slide);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className={slide ? "logo slide" : "logo"}>
          <h1>Race.</h1>
        </div>

        <nav>
          <ul className={nav ? "nav_menu active" : "nav_menu"}>
            <Link to="power" spy={true} smooth={true} duration={500}>
              <li onClick={handleChange}>
                <a href="/">Power</a>
              </li>
            </Link>
            <Link to="speed" spy={true} smooth={true} duration={500}>
              <li onClick={handleChange}>
                <a href="/">Speed</a>
              </li>
            </Link>
            <Link to="handling" spy={true} smooth={true} duration={500}>
              <li onClick={handleChange}>
                <a href="/">Handling</a>
              </li>
            </Link>
            <Link to="options" spy={true} smooth={true} duration={500}>
              <li onClick={handleChange}>
                <a href="/">Options</a>
              </li>
            </Link>
            <Link to="contact" spy={true} smooth={true} duration={500}>
              <li onClick={handleChange}>
                <a href="/">Contact</a>
              </li>
            </Link>

            <div className="mobile_menu">
              <button>Shop</button>
              <button>Account</button>
              <div className="social_icons">
                <FiInstagram size={30} style={{ marginLeft: "5rem" }} />
                <FiFacebook size={30} style={{ marginLeft: "5rem" }} />
                <GiCarWheel size={30} style={{ marginLeft: "5rem" }} />
              </div>
            </div>
          </ul>
        </nav>

        <ul className="nav_menu hide">
          <li>Shop</li>
          <li>Speed</li>
        </ul>

        <div onClick={handleNav} className="hamburger">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
