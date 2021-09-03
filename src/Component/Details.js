import React from 'react'
import {Card,Button} from 'react-bootstrap';

 function Details(props) {


    const { data, ...rest } = props;

    console.log(data);

    
    
   return(
        <div>
            {data &&
                <>   
                    <Card style={{ width: '80%' }} key={data.alpha2Code}>
                            <Card.Img variant="top" src={data.flag} height={"300px"} width={"300px"}/>
                            <Card.Body>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Text>Region:{data.region}
                                    <Card.Text>Subregion:{data.subregion}</Card.Text>
                                    <Card.Text>Capital:{data.capital}</Card.Text>
                                    <Card.Text>Capital:{data.population}</Card.Text>
                                    <Card.Text>Code:{data.alpha2Code}</Card.Text>
                                    <a href="/" class="btn btn-primary">Back</a>
                                </Card.Text>
                            </Card.Body>
                            
                    </Card>
                </>
            }
        </div>  
   )    
}
export default Details
