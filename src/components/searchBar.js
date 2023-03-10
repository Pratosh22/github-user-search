import { useState } from "react";
import search_img from '../assets/icon-search.svg';
import './searchbar.css';
function SearchBar(props){
    const [term,setTerm]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onClick(term);
        setTerm('');
    }
    const handleChange=(e)=>{
        setTerm(e.target.value);
    }
    return (
        
        <div>
            <form >
                <img src={search_img} className="search_img" alt="search" />
                <input type="text" value={term} placeholder="Search Github Username..."  onChange={handleChange}/>
                <button className="search" onClick={handleSubmit}>Search</button>
            </form>
        </div>
    )
}
export default SearchBar;