import TasksNavbar from "../parts/TasksNavbar";
import LogoNavbar from "../parts/LogoNavbar";
import Footer from "../templates/Footer";
import Header from "../templates/Header";
import TasksSectionParent from "../templates/TasksSectionParent";

const TasksView = () => {
  return (
    <>
      <Header>
        <TasksNavbar />
        <LogoNavbar />
      </Header>
      <TasksSectionParent />
      <Footer />
    </>
  );
};

export default TasksView;
