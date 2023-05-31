import React, { useEffect, useState } from 'react';
import { getSearchResult } from '../../Api/Api';
import { useLocation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import SearchCard from './SearchCard';

const SearchResult = () => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState([]);
    const { state } = useLocation()


    useEffect(() => {
        getSearchResult(state?.search)
        .then( data => {
           setResult(data)
           setLoading(false)
        })
        .catch( err => console.log(err))
    },[state])
    

    console.log('hi from search result',result);

    return (
        <>
        { loading ? (<Spinner/>):
        
        <div>

           {
            result.map( re => (
                <SearchCard key={re._id} re={re}></SearchCard>
            ))
           }
        </div>
        
        }
        
        
        </>
    );
};

export default SearchResult;