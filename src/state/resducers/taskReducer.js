

const reducer = (state = "", action) => {
    if (action.type === 'add') {
        // Check if state is empty to avoid adding unnecessary delimiter
        const delimiter = state ? ',' : '';
        return state + delimiter + action.payload;
    } else if (action.type === 'delete') {
        // Split the state string into an array
        const tasks = state.split(',');
        // Remove the task at the specified index
        tasks.splice(action.payload, 1);
        // Join the remaining tasks back into a string
        return tasks.join(',');
    } 
    else if (action.type === 'edit') {
        // Copy the current state array
        const updatedTasks = [...state.split(',')];
        // Update the task at the specified index with the new task
        updatedTasks[action.payload.index] = action.payload.task;
        // Join the tasks array back into a string
        const newState = updatedTasks.join(',');
        console.log('New state after edit:', newState); // Log the updated state
        return newState;
      } 
       else {
        return state;
      }
};

export default reducer;
