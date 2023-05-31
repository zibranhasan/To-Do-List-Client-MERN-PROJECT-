import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { getAllTasksByEmail } from '../../Api/Api';
import Spinner from '../../Pages/Spinner/Spinner';
import Task from '../Task/Task';


const Tasks = () => {
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
    },[user])


    
  
     
    const handleStatusUpdate = id => {
      fetch(`${process.env.REACT_APP_API_URL}/statusup/${id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({status:'Completed'})
      })
      .then( res => res.json())
      .then( data => {
        if(data.modifiedCount > 0){
          const remaining = tasks.filter( tas => tas._id !== id)
          const completing = tasks.find( tas => tas._id === id);
          completing.status = 'Completed'

          const newTasks = [completing, ...remaining];
          setTasks(newTasks);

        }
      })
    }



    return (
        <>
        {loading ? (<Spinner/>):
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
    <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-2 sm:row-gap-2 sm:grid-cols-2'>
         {tasks?.map(task => (
          <Task key={task._id} task={task} handleStatusUpdate={handleStatusUpdate}></Task>
        ))}
      </div>
    </div>
        }
        
        </>
    );
};

export default Tasks;








































// import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'
// import Book from './Book'

// const Books = () => {
//   // const [books, setBooks] = useState([])
//   // useEffect(() => {
//   //   fetch('https://api.itbook.store/1.0/new')
//   //     .then(res => res.json())
//   //     .then(data => console.log(data))
//   // }, [])
//   const loaderData = useLoaderData()
//   const booksData = loaderData.books

//   return (
//     <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
//       <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
//         {booksData.map(book => (
//           <Book key={book.isbn13} book={book} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Books


