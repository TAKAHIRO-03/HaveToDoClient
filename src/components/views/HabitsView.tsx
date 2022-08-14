import HabitsNavbar from "../parts/HabitsNavbar";
import LogoNavbar from "../parts/LogoNavbar";
import Footer from "../templates/Footer";
import HabitsSection from "../templates/HabitsSection";
import Header from "../templates/Header";

const HabitsView = () => {
  return (
    <>
      <Header>
        <HabitsNavbar />
        <LogoNavbar />
      </Header>
      <HabitsSection />
      <Footer />
    </>
  );
};

export default HabitsView;
