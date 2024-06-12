export const addTask = (task) =>{
    return(dispatch)=>{
        dispatch({
            type:"add",
            payload:task
        })
    }
}


export const deleteTask = (task) =>{
    return(dispatch)=>{
        dispatch({
            type:"delete",
            payload:task
        })
    }
}


export const editTask = (index, task) => {
    return {
      type: 'edit',
      payload: { index, task }
    };
  };
  
