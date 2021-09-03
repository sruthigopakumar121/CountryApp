import React from 'react'
import { useState,useEffect } from 'react';
import CountryCard from './CountryCard';
import Home from './Home';
function Sidebar({data}) {
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
        {filter?<CountryCard data={state}/> :<CountryCard data={data}/>}
        </div>
    )
}

export default Sidebar;
