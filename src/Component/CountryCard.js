import React,{useState,useEffect} from 'react'
import './CountryCard.css';
import {Card,Button} from 'react-bootstrap';
import Pagination from "./Pagination";
import { Link} from "react-router-dom";
import Details from './Details';
import Login from './Login';
import Favourite from './Favourite';
import { set } from 'react-hook-form';

function CountryCard(props) {

    const {data, setSelectedCountry,setFavCountry } = props;
   
    const [currpage, setCurrpage] = useState(1);
    const [pageperdata,setPageperdata] = useState(20);
    const indexlastdata = currpage*pageperdata;
    const indexfirstdata = indexlastdata-pageperdata;
    const [id, setId ]= useState("");
    const [buttontext, setButtontext] = useState("Add to Favourite");
    const [home, setHome] = useState(true);
    const [favCountryList, setFavCountryList] = useState([]);
    
   
    const paginate=(no)=>{  
        setCurrpage(no);
    }
    
     const onFavClick = (data) => {
        console.log("button fav clicked!!",data); 
        
        setFavCountryList([...favCountryList, data]);
    }
    
    const onDetailsClick = (data) => {
        console.log("button clicked!!",data) 
        setSelectedCountry(data);
      
     }

    


    return (
        <div>
            
            <section className="main">
                <div className="grid">
                {data.slice(indexfirstdata,indexlastdata).map((ele,index)=>{
                     const {name ,region,capital,flag,alpha2Code}= ele;
                return(
                    <div>
                        {/* <button onClick={onFavListLoad}>Favourite</button> */}
                        <Card style={{ width: '18rem' }} key={alpha2Code}>
                            <Card.Img variant="top" src={flag} height={"200px"}/>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>Region:{region}
                                    <Card.Text>Capital:{capital}</Card.Text>
                                </Card.Text>
                                <Button variant="danger" onClick={()=>onFavClick(ele)}>{false ? "added to fav" : "Add fav"}</Button>
                                <span/>
                                <Button variant="primary"  onClick={()=>onDetailsClick(ele)}>View Details</Button>
                                
                                
                                
                            </Card.Body>
                            
                        </Card>
                        
                    </div>
                   
    
                )
                
                })
                }    
                </div>
                <Pagination pageperdata={pageperdata} totaldata={data.length} paginate={paginate}/> 
            </section>
            
        </div>
    )
}


export default CountryCard;
