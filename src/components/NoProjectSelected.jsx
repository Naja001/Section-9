import NoProjectImages from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={NoProjectImages}
        alt="empty task images"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No project selected
      </h2>
      <p className="text-stone-600 mb-4">
        Select a project or start with a new one
      </p>
      <p className="mt-8">
        <Button btnName="Create New Project" onClick={onStartAddProject}/>
      </p>
    </div>
  );
}
