import TasksNavbar from "../parts/TasksNavbar";
import LogoNavbar from "../parts/LogoNavbar";
import Footer from "../templates/Footer";
import Header from "../templates/Header";
import TasksSectionParent from "../templates/TasksSectionParent";

const TasksCreateView = () => {
    return (
        <>
            <Header>
                <TasksNavbar />
                <LogoNavbar />
            </Header>
            <div>工事中</div>
            <Footer />
        </>
    );
};

export default TasksCreateView;
