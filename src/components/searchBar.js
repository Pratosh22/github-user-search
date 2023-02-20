import { useState } from "react";
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
                <input type="text" value={term} placeholder="Search Github Username..."  onChange={handleChange}/>
                <button className="search" onClick={handleSubmit}>Search</button>
            </form>
        </div>
    )
}
export default SearchBar;