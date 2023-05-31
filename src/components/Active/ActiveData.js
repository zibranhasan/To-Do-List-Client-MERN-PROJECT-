import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { getAllTasksByEmail } from '../../Api/Api';
import Active from './Active';
import Spinner from '../../Pages/Spinner/Spinner';

const ActiveData = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState([])

    //for Email
    useEffect(() => {
        getAllTasksByEmail(user?.email)
            .then(data => {
             const remaining = data?.filter( da => da?.status !== "Completed") 
             const newTasks = [remaining]
                setTasks(newTasks)
                setLoading(false)
            })
    }, [user]);


    console.log('from activedata',tasks);


    return (
        <>
        {
            loading ? (<Spinner/>):
            <div>
            {
                tasks[0].map(task => <Active key={task._id} task={task}></Active>)
            }
        </div>
        }
        
        
        
        </>
    );
};

export default ActiveData;