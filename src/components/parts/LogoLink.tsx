import logo from "../../img/logo.svg";

const LogoLink = () => {
  const moveToHome = () => {
    window.location.href = "/";
  };
  return (
    <div className="log-link">
      <img
        src={logo}
        className="nav-logo"
        alt="Logo"
        width="100"
        height="100"
        onClick={moveToHome}
      />
    </div>
  );
};

export default LogoLink;
