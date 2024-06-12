

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import close from '../assets/close.png';

const TaskInput = () => {
  const [task, setTask] = useState(""); // State to store task
  const [addButton, setAddButton] = useState(false); // Button state to add task
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);


  const toggleAddButton = () => {
    setAddButton(!addButton);
  };

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = () => {
    if (task.trim() !== "") {
      console.log("Task saved:", task);
      setTask("");
      toggleAddButton();
      actions.addTask(task);
    } else {
      window.alert("Task cannot be empty");
    }
  };

  return (
    <div className=" w-full mt-20 text-right">
      <button
        className="lg:mr-48 md:mr-28 max-sm:mr-12 bg-purple-500 text-white w-[8rem] h-12 rounded-md text-xl"
        onClick={toggleAddButton}
      >
        {addButton ? "Add Task" : "Add Task"}
      </button>
      {addButton && (
        <div className="absolute inset-0 flex justify-center items-center bg-transparent backdrop-brightness-50">
          <div className="w-2/3 h-52 bg-zinc-100 p-4">
            <button onClick={toggleAddButton}><img className="w-7" src={close} alt="" /></button>
            <input
              type="text"
              value={task}
              onChange={handleInputChange}
              placeholder="Enter Task"
              className="w-full mt-2 p-2 h-20 text-purple-500"
            />
            <button
              onClick={handleSubmit}
              className="w-24 mt-4 p-2 bg-purple-500 text-white  flex justify-center items-center mx-auto rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskInput;
