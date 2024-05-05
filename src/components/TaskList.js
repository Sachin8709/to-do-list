
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
import edit from '../assets/edit.png';
import del from '../assets/trash.png';
import done from '../assets/done.png'

const TaskList = () => {
  const tasks = useSelector(state => state.task.split(',')); // Convert string to array
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);

  const [editIndex, setEditIndex] = useState(null); // Index of task being edited
  const [editedTask, setEditedTask] = useState(''); // Edited task value
  const [doneTasks, setDoneTasks] = useState([]); // Array to keep track of tasks marked as done

  const handleDeleteTask = (index) => {
    actions.deleteTask(index); // Pass the index of the task to delete
    setDoneTasks(doneTasks.filter(taskIndex => taskIndex !== index)); // Remove the deleted task from doneTasks
  };

  const handleEditTask = (index) => {
    setEditIndex(index); // Set the index of the task being edited
    setEditedTask(tasks[index]); // Set the value of the task being edited
  };

  const handleSaveEdit = (index) => {
    if (editedTask.trim() !== '') {
      console.log('Editing task:', index, editedTask); // Log the index and edited task
      actions.editTask(index, editedTask); // Dispatch action to edit task
      setEditIndex(null); // Reset edit index
      setEditedTask(''); // Reset edited task
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null); // Reset edit index to cancel editing
    setEditedTask(''); // Reset edited task
  };

  const handleMarkAsDone = (index) => {
    // Toggle the task's done status
    if (doneTasks.includes(index)) {
      setDoneTasks(doneTasks.filter(taskIndex => taskIndex !== index));
    } else {
      setDoneTasks([...doneTasks, index]);
    }
  };

  return (
    <div className='m-auto w-3/4 h-[30rem] overflow-auto bg-white mt-10 border border-purple-900 rounded-md'>
      <div className='flex justify-between '>
        <h1 className='text-2xl text-purple-500 p-5 ' > <b>Task List</b> </h1>
        <h1 className='text-2xl text-purple-500 p-5 ' > <b>Operation</b> </h1>
      </div>
      {tasks.map((task, index) => (
        <div key={index}>
          {editIndex === index ? ( // Display input field if editing
            <div className='my-auto border border-blue-600 bg-zinc-200 mt-5 flex h-11 gap-5 justify-between'>
              <input className='w-full ml-5 text-purple-500 bg-zinc-50' type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
              <div className='mr-5 flex gap-5'>
                <button className='bg-purple-500 text-white w-20 rounded-md hover:bg-purple-600' onClick={() => handleSaveEdit(index)}>Save</button>
                <button className='bg-purple-500 text-white bg w-20 rounded-md hover:bg-purple-600' onClick={handleCancelEdit}>Cancel</button>
              </div>
            </div>
          ) : (
            <div className='flex gap-28 w-full h-12'>
              {task && task.length > 0 && (
                <div className={`flex bg-zinc-200 w-full gap-20 justify-between mt-5 h-10 ${doneTasks.includes(index) ? 'line-through' : ''}`}>
                  <div className='my-auto ml-5 text-purple-500'>{task}</div>
                  <div className='my-auto flex gap-10 mr-5'>
                    <button className='hover:bg-gray-200' onClick={() => handleEditTask(index)}><img className='w-6' src={edit} alt="" /></button>
                    <button className='hover:bg-gray-200' onClick={() => handleMarkAsDone(index)}> <img  className='w-7' src={done} alt="" /> </button>
                    <button className='hover:bg-gray-200' onClick={() => handleDeleteTask(index)}><img className='w-6' src={del} alt="" /></button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
