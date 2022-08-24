import PlannedTaskNavbar from "../parts/PlannedTaskNavbar";
import LogoNavbar from "../parts/LogoNavbar";
import Footer from "../templates/Footer";
import Header from "../templates/Header";
import PlannedTaskSectionParent from "../templates/PlannedTaskSectionParent";

const PlannedTaskView = () => {
  return (
    <>
      <Header>
        <PlannedTaskNavbar />
        <LogoNavbar />
      </Header>
      <PlannedTaskSectionParent />
      <Footer />
    </>
  );
};

export default PlannedTaskView;
