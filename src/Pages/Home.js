import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import Navbar from './Navbar/Navbar';
import Tasks from '../components/Tasks/Tasks';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <Tasks></Tasks>
    </div>
  );
};

export default Home;