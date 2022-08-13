import HabitsNavbar from "../parts/HabitsNavbar";
import Footer from "../templates/Footer";
import HabitsSection from "../templates/HabitsSection";
import Header from "../templates/Header";

const HabitsView = () => {
  return (
    <>
      <Header>
        <HabitsNavbar />
      </Header>
      <HabitsSection />
      <Footer />
    </>
  );
};

export default HabitsView;
