import React from 'react'
import { useState,useEffect } from 'react';
import CountryCard from './CountryCard';
import Home from './Home';
import Favourite from './Favourite';
function Sidebar(props) {

    const {data, setSelectedCountry,setFavCountry} = props;
   
    const [selectedregion, setSelectedregion] = useState("All");
    const [filter, setFilter] = useState(false);
    const [state, setState] = useState(data);
    const uniqueList=[...new Set(data.map((ele)=>{
        return ele.region;
    })),"All"];
    
    
    useEffect(() => {
        setState(selectedregion==="All" ? data: data.filter(ele=>ele.region===selectedregion));
           
        }, [selectedregion]);
        const handleChange=()=>{
            setFilter(true);
        }
    
    return (
        <div>
        
        <div>   
            <section>
                <button onClick={handleChange}>Filter by region</button>
                <select onChange={(event)=>setSelectedregion(event.target.value)}>
                                            { uniqueList.map((val) =>{
                                                return(
                                                <option key={val} value={val}>{val}</option>
                                                );      
                                            })}
                </select>
            </section>
        </div>                                    
        {filter?<CountryCard data={state} setSelectedCountry={setSelectedCountry} setFavCountry={setFavCountry}/> :<CountryCard data={data} setSelectedCountry={setSelectedCountry} setFavCountry={setFavCountry}/>}
        </div>
    )
}

export default Sidebar;
