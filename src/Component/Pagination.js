import React from 'react'

function Pagination({pageperdata,totaldata,paginate}) {
     const pageno=[];
     console.log(totaldata);
    for (let i=1;i <= Math.ceil(totaldata/pageperdata);i++)
    {
        pageno.push(i);
    }
    return (  
        <nav>
            <ul className="pagination">
               {pageno.map((no,index )=>{
                  return(
                    <li key={index} className="page-item">
                       <a onClick={()=>paginate(no)} href="!#" className="page-link">{no}</a>  
                    </li>
                  );
                   
               })}
            </ul>  
           
        </nav>
    )
}

export default Pagination;