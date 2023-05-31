import React, { useEffect, useState } from 'react';
import { getAllTasksByActive } from '../../Api/Api';
import Completed from './Completed';

const TaskLoad = ({ task }) => {
    const [tasksforstatus, setTasksforstatus] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (task?.status === "Completed") {
            getAllTasksByActive(task?.status)
                .then(data => {
                    setTasksforstatus(data)
                    setLoading(false)
                })
        }

    }, [task?.status])


    console.log('tasks for status', tasksforstatus);

    return (

        <div>
            {
                tasksforstatus.map(singletask => (
                    <Completed key={singletask._id} singletask={singletask}></Completed>
                ))
            }
        </div>
    );
};

export default TaskLoad;