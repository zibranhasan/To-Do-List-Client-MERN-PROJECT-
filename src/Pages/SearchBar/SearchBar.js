import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [ data, setData] = useState({})
    const navigate = useNavigate()

    const handleSearch = event =>{
        event.preventDefault();
        navigate('/search-result', { state: data}) 
    }


   const handleInputBlur = event => {
    const value = event.target.value;
    const field = event.target.name;
    const newData = {...data};
    newData[field] = value;
    setData(newData)
   }

    return (
        <div>
            <h2>SERACH HERE</h2>
            <form onSubmit={handleSearch}>
              <input onBlur={handleInputBlur} type="text" name='search' placeholder='Type title' required />
              <br />
              <button  className="btn btn-primary" type='submit'>Search</button>
            </form>
        </div>
    );
};

export default SearchBar;