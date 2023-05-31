import { Link } from 'react-router-dom';
const Task = ({ task, handleStatusUpdate}) => {
    const { _id, title, status} = task;

    return (
        <div className="card w-96 bg-base-100 shadow-xl gap-5">
           
            <div className="card-body">
               <Link to={`/task/${_id}`}>Title:{title}</Link>
            </div>
           <button className="btn btn-active" onClick={() => handleStatusUpdate(_id)}>{ status ? status: 'Active'}</button>
        </div>

    );
};

export default Task;


























// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const Book = ({ task }) => {
//   const { id,title, description, status} = task
//   return (
//     // <Link to={`../book/${isbn13}`} aria-label='View Item'>
//     <Link to={`../task/${id}`} aria-label='View Item'>
//       <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
//         {/* <img
//           className='object-cover w-full h-56 md:h-64 xl:h-80'
//           src={image}
//           alt=''
//         /> */}
//         <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
//           <p className='mb-4 text-lg font-bold text-gray-100'>{title}</p>
//           <br />
//           <p className='text-sm tracking-wide text-gray-300'>{description}</p>
//           <br />
//           <p className='text-sm tracking-wide text-gray-300'>Price: {status}</p>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default Book