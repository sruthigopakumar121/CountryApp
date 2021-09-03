import React,{useState,useEffect} from 'react'
import CountryCard from './CountryCard';
import './Home.css'
import Sidebar from './Sidebar';
import Details from './Details';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
  } from "react-router-dom";
import Favourite from './Favourite';


const Home=()=> {
    const [apidata, setApidata] = useState([]);
    const [selectedCountryData, setSelectedCountryData] = useState(null);
    const [flag,setFlag] = useState(false);
    const [listType,setListType] = useState("LIST");
    const [favCountryData, setFavCountryData] = useState(null);



    const Data=()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res=>res.json())
        .then(data =>setApidata(data))
    }
    useEffect(() => {
    Data();    
    }, []);

    const setSelectedCountryHandler = (data) =>{
        setSelectedCountryData(data);
        setListType("DETAILS")
    }
   
    const setFavCountryHandler = (data) =>{
        setFavCountryData(data);
        setListType("FAVOURITE")
    } 

    return (
        <div className="Home">

            {listType === "LIST" && 
                <Sidebar  data={apidata} setSelectedCountry={setSelectedCountryHandler} setFavCountry={setFavCountryHandler}/>
            }
                
            {listType === "DETAILS" && selectedCountryData &&
                <Details data={selectedCountryData}/>
            }
                    
            {/* {listType === "FAVOURITE" &&  favCountryData &&
                <Favourite data={favCountryData}/>
            } */}
            
        </div>
    );
}

export default Home;
