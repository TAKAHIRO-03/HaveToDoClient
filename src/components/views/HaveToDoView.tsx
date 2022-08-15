import HaveToDoNavbar from "../parts/HaveToDoNavbar";
import LogoNavbar from "../parts/LogoNavbar";
import Footer from "../templates/Footer";
import HaveToDoSection from "../templates/HaveToDoSection";
import Header from "../templates/Header";

const HaveToDoView = () => {
  return (
    <>
      <Header>
        <HaveToDoNavbar />
        <LogoNavbar />
      </Header>
      <HaveToDoSection />
      <Footer />
    </>
  );
};

export default HaveToDoView;
