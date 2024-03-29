import LogoNavbar from "../parts/LogoNavbar";
import Footer from "../templates/Footer";
import Header from "../templates/Header";
import SigninSection from "../templates/SigninSection";

const SigninView = () => {
  return (
    <>
      <Header>
        <LogoNavbar />
      </Header>
      <SigninSection />
      <Footer />
    </>
  );
};

export default SigninView;
