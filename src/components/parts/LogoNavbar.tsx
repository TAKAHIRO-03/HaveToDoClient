import { useNavigate } from "react-router-dom";
import logo from "../../img/logo.svg";

const LogoNavbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <img
          src={logo}
          className="nav-logo"
          alt="Logo"
          width="100"
          height="100"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </nav>
  );
};

export default LogoNavbar;
