import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";


function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectID: null };
    });
  }

  function handleCancelBtn() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectID: undefined };
    });
  }

  function handleAddTask(taskText) {
    setProjectState((prevState) => {
      const taskID = Math.random();
      const newTask = {
        text: taskText,
        projectID: prevState.selectedProjectID,
        id: taskID,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  function handleDeleteTask() {}

  function handleSelectedProject(id) {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectID: id };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [
          prevState.projects.filter(
            (project) => project.id !== prevState.selectedProjectID
          ),
        ],
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectID
  );
  let content = (
    <SelectedProject
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      project={selectedProject}
      onDelete={handleDeleteProject}
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectID === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelBtn} />
    );
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onSelectProject={handleSelectedProject}
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        
      />
      {content}
    </main>
  );
}

export default App;
