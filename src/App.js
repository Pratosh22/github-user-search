import axios from 'axios';
import SearchBar from './components/searchBar';
import Navbar from './components/Navbar';
import './app.css'
import Card from './components/Card';
import { useState,useEffect } from 'react';
function App(){
    const [data,setData]=useState('');
    useEffect(()=>{
        getUser('octocat');
    },[]);
    const getUser= async (term)=>{
        const url=`https://api.github.com/users/`+term;
        const res=await axios.get(url);
        console.log(res.data);
        setData(res.data);
    } 
    return(
        <div className='container'>
            <Navbar/>
            <SearchBar onClick={getUser} />
            <Card data={data}/>
        </div>
    )
}
export default App;