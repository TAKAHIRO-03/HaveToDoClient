import HomeNavbar from "../parts/HomeNavbar";
import Footer from "../templates/Footer";
import Header from "../templates/Header";
import HomeSection from "../templates/HomeSection";

const HomeView = () => {
  return (
    <>
      <Header>
        <HomeNavbar />
      </Header>
      <HomeSection />
      <Footer />
    </>
  );
};

export default HomeView;
