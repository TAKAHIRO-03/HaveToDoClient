import ReactScroll, { animateScroll as scroll } from "react-scroll";
import logo from "../../img/logo.svg";
import NavItem from "../parts/NavItem";

const HomeNavbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <img
          src={logo}
          className="nav-logo"
          alt="Logo"
          width="100"
          height="100"
          onClick={scrollToTop}
        />
        <ul className="nav-items">
          <NavItem>
            <ReactScroll.Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              GoodHabitsとは？
            </ReactScroll.Link>
          </NavItem>
          <NavItem>
            <ReactScroll.Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              特徴紹介
            </ReactScroll.Link>
          </NavItem>
          <NavItem>
            <ReactScroll.Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              使い方
            </ReactScroll.Link>
          </NavItem>
          <NavItem>
            <ReactScroll.Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              みんなの声
            </ReactScroll.Link>
          </NavItem>
          <NavItem>
            <ReactScroll.Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              良くある質問
            </ReactScroll.Link>
          </NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavbar;
