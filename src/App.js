import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="flex flex-col  bg-zinc-100 w-full h-screen">
      <div className="text-3xl text-purple-500 text-center mt-5"><h1><b>MY TO-DO</b></h1></div>
      <div  className="-mt-12">
        <TaskInput></TaskInput>
      </div>
      <div className="">
        <TaskList></TaskList>
      </div>
    </div>
  );
}
export default App;
