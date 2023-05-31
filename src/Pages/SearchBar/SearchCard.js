import React from 'react';

const SearchCard = ({re}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{re.title}</h2>
                    <p>{re.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{re.status}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;