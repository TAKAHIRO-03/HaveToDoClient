import PlannedTaskNavbar from "../parts/PlannedTaskNavbar";
import LogoNavbar from "../parts/LogoNavbar";
import Footer from "../templates/Footer";
import PlannedTaskSection from "../templates/PlannedTaskSection";
import Header from "../templates/Header";

const PlannedTaskView = () => {
  return (
    <>
      <Header>
        <PlannedTaskNavbar />
        <LogoNavbar />
      </Header>
      <PlannedTaskSection />
      <Footer />
    </>
  );
};

export default PlannedTaskView;
