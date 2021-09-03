import React,{useState,useEffect} from 'react'
import { useLocation } from "react-router-dom"
function Details(props) {
    // const [apidata, setApidata] = useState([]);
    const location = useLocation();
    const data = location.state?.dataid;
  
   
    console.log(data);
   
  
    
    // const Data=()=>{
    //     fetch("https://restcountries.eu/rest/v2/all")
    //     .then(res=>res.json())
    //     .then(data =>setApidata(data))
    // }
    // useEffect(() => {
    // Data();    
    // }, []);
    // console.log("detailsworking:",apidata);
    return(
        <div>
            <p> Details</p>
        </div>
    )
   
            
       
}

export default Details;
