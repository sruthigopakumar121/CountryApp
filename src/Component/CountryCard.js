import React,{useState} from 'react'
import './CountryCard.css';
import {Card,Button} from 'react-bootstrap';
import Pagination from "./Pagination";
import { Link} from "react-router-dom";
import Details from './Details';
import Login from './Login';
function CountryCard({data}) {
    const [currpage, setCurrpage] = useState(1);
    const [pageperdata,setPageperdata] = useState(20);
    const indexlastdata = currpage*pageperdata;
    const indexfirstdata = indexlastdata-pageperdata;
    const [id, setId ]= useState("");
    const [buttontext, setButtontext] = useState("Add to Favourite");
    const [home, setHome] = useState(true);
   
    const paginate=(no)=>{
        
        setCurrpage(no);

    }
    
    console.log(id);
    return (
        <div>
            
            <section className="main">
                <div className="grid">
                {data.slice(indexfirstdata,indexlastdata).map((ele,index)=>{
                     const {name ,region,capital,flag,alpha2Code}= ele;
                return(
                    <div>
                        <Card style={{ width: '18rem' }} key={alpha2Code}>
                            <Card.Img variant="top" src={flag} height={"200px"}/>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                Region:{region}
                                <Card.Text>
                                Capital:{capital}
                                </Card.Text>
                                </Card.Text>
                                <Button variant="danger" onClick={()=>setButtontext("Added to Favourite")}>{buttontext}</Button>
                                <span/>
                                <Link className="btn btn-primary mr-2 " onClick={()=>{
                                setId(alpha2Code)
                                }} to={"/Details"}>
                                Details
                                </Link>
                                
                                
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
