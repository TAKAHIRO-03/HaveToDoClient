import TaskNavbar from "../parts/TaskNavbar";
import LogoNavbar from "../parts/LogoNavbar";
import Footer from "../templates/Footer";
import Header from "../templates/Header";
import TaskSectionParent from "../templates/TaskSectionParent";

const TaskView = () => {
  return (
    <>
      <Header>
        <TaskNavbar />
        <LogoNavbar />
      </Header>
      <TaskSectionParent />
      <Footer />
    </>
  );
};

export default TaskView;
