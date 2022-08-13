import { useNavigate } from "react-router-dom";
import logo from "../../img/logo.svg";

const LogoNavbar = () => {
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate("/");
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
          onClick={moveToHome}
        />
      </div>
    </nav>
  );
};

export default LogoNavbar;
