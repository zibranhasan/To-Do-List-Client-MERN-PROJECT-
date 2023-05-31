import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
    const ForupdateData = useLoaderData();
    const [task, setTask] = useState(ForupdateData);
     const naviagte = useNavigate()

    const handleUpdateTask = event =>{
        event.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/tasks/update/${ForupdateData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)

        })
        .then( res => res.json())
        .then( data => {

            if(data.acknowledged){
                naviagte('/home')
            }

            
            console.log(data);
        })
    }

    const handleInputChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newTask = {...task};
        newTask[field] = value;
         setTask(newTask);    
    }

    return (
        <div>
            <h2 className='m-14'>Please add a new Task:{ForupdateData.name}</h2>
            <form onSubmit={handleUpdateTask}>
                <input className="file-input file-input-bordered w-full max-w-xs m-14" onChange={handleInputChange} defaultValue={ForupdateData.title} type="text" name='title' placeholder='title' required/>
                <br />
                <input className="textarea textarea-bordered h-24 m-14" onChange={handleInputChange} defaultValue={ForupdateData.description} type="text" name='description' placeholder='description' required/>
                <br/>
                {/* <input className="file-input file-input-bordered w-full max-w-xs m-14" onChange={handleInputChange} defaultValue={ForupdateData.email} type="email" name='email' id=''  placeholder='Email' required />
                <br /> */}
                <button className="btn btn-active m-14" type='submit'>Update Task</button>
            </form>
            </div>
      
    );
};

export default Update;