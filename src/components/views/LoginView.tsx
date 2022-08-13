import LogoNavbar from "../parts/LogoNavbar";
import Footer from "../templates/Footer";
import Header from "../templates/Header";
import LoginSection from "../templates/LoginSection";

const LoginView = () => {
  return (
    <>
      <Header>
        <LogoNavbar />
      </Header>
      <LoginSection />
      <Footer />
    </>
  );
};

export default LoginView;
