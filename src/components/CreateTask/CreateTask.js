import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
    const { user } = useContext(AuthContext);
     const navigate = useNavigate()

   const [task, setTask] = useState({});


   const handleAddTask = event =>{
    event.preventDefault();

     fetch(`${process.env.REACT_APP_API_URL}/taskadd`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(task)
     })
     .then( res => res.json())
     .then( data => {
         if(data.acknowledged){
             alert('Task added successfully')
             event.target.reset();
             navigate('/home')
         }
     })

   }


   const handleInputBlur = event => {
    const value = event.target.value;
    const field = event.target.name;
    const newTask = {...task};
    newTask[field] = value;
     setTask(newTask);    
}


    return (
        <div>
            <h2 className='m-14' >Please add a new Task</h2>
            <form onSubmit={handleAddTask}>
                <input className="file-input file-input-bordered w-full max-w-xs m-14" onBlur={handleInputBlur} type="text" name='title' placeholder='title' required/>
                <br />
                <input className="file-input file-input-bordered w-full max-w-xs m-14" onBlur={handleInputBlur} type="text" name='description' placeholder='description' required/>
                <br/>
                <h2 className='m-14'> please,check email with click on box</h2>
                <input defaultValue={user.email} readOnly className="file-input file-input-bordered w-full max-w-xs m-14" onBlur={handleInputBlur} type="email" name='email' placeholder='Click on it,not change'/>
                <br/>
                
                <input className="file-input file-input-bordered w-full max-w-xs m-14" onBlur={handleInputBlur} type="text" name='status' readOnly placeholder='Status:Click on it,not change'/>
                <br/>
                <button  className='m-14 btn btn-active' type='submit'>Add Task</button>
            </form>
        </div>
    );
};

export default CreateTask;