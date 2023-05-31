import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { getAllTasksByEmail } from '../../Api/Api';
import TaskLoad from './TaskLoad';

const DataFetchCom = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState([])

    //for Email
    useEffect(() => {
        getAllTasksByEmail(user?.email)
            .then(data => {
                setTasks(data)
                setLoading(false)
            })
    }, [user]);


    return (
        <div>
            {tasks?.map(task => (
                <TaskLoad key={task._id} task={task}></TaskLoad>
            ))}

        </div>
    );
};

export default DataFetchCom;