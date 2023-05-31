import React from 'react';

const Completed = ({singletask}) => {
    const {_id,title, description, status} = singletask;
    return (
        <div className="card w-96 bg-base-100 shadow-xl gap-5">
            <div className="card-body">
                  <h2>{title}</h2>
                  <h3>{description}</h3>
                  <h4>{status}</h4>
                  
            </div>
        </div>
    );
};

export default Completed;