import React,{useState,useEffect} from 'react'
import CountryCard from './CountryCard';
import './Home.css'
import Sidebar from './Sidebar';


const Home=()=> {
    const [apidata, setApidata] = useState([]);
    const Data=()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res=>res.json())
        .then(data =>setApidata(data))
    }
    useEffect(() => {
    Data();    
    }, []);
    return (
        <div className="Home">
          <Sidebar  data={apidata}/>

        </div>
    );
}

export default Home;
