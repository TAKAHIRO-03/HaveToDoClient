import LogoNavbar from "../parts/LogoNavbar";
import Footer from "../templates/Footer";
import Header from "../templates/Header";
import SignupSection from "../templates/SignupSection";

const SignupView = () => {
  return (
    <>
      <Header>
        <LogoNavbar />
      </Header>
      <SignupSection />
      <Footer />
    </>
  );
};

export default SignupView;
