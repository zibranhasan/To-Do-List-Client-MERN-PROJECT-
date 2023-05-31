import React from 'react';

const Active = ({task}) => {
    console.log('from Active compo',task);
    return (
        <div className="card w-96 bg-base-100 shadow-xl gap-5">
            {task.title}
        </div>
    );
};

export default Active;