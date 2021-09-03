import React, { useState,useEffect } from 'react';
import Login from './Login';
import './Signup.css';
function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const Logout=()=>{
        setEmail("");
        setPassword("");
    }
    const [password, setPassword] = useState("");
    const [country, setCountry] = useState([]);
    const [login, setLogin] = useState(true);
    const [selectedcountry, setSelectedcountry] = useState("");
    const [passworderror, setPassworderror] = useState("");
    const [error, setError] = useState("");
    const [nameerror, setNameerror] = useState("");
   
  
    const getcountry=()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res=>res.json())
        .then(data =>setCountry(data))
    }
    useEffect(() => {
    getcountry()    
    }, []);
    
   function Validation() {
        if (!name || !email || !password) {
            setError("All data are required");
        }
        else if (password.length > 15){
        setPassworderror("Max length is 15");
        }
        else if(password.match(/[\W]/)){
            setPassworderror(" Special character is not allowed");
           
        }
        
         else if(password.length > 15 && password.match(/[\W]/)){
                setPassworderror("Max length is 15 and Special character is not allowed");
        }
         else if(name.match(/[^\w\/\s/]/)){
            setNameerror("Special character is not allowed");  
        }

        if(nameerror||error||passworderror){
            return false ;
        }
        return true ;
        
    };
    function handleSubmit(e) {
        e.preventDefault();
        const isValid = Validation();
        if(isValid){
            setName("");
            setEmail("");
            setPassword("");
            setSelectedcountry("");
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            console.log("Saved in Local Storage");
         
        }
       
    }
    function handleClick() {
        setLogin(!login)
    }
    
    return (
        <div >
            <div>
              { login ? <form onSubmit={handleSubmit}>
             <div className="outer">
                <div className="inner">
                    <h3>Sign Up</h3>

                            <div className="form-group">
                                <label>Name  </label>
                                <input type="text" className="form-control" placeholder="Enter Full Name" name="name"value={name} onChange={(event) => setName(event.target.value)}/>
                                <span>{nameerror}</span>
                            </div>

                            <div className="form-group">
                                <label>Email  </label>
                                <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Password  </label>
                                <input type="password" className="form-control" placeholder="Enter password"value={password} onChange={(event) => setPassword(event.target.value)} />
                            <span>{passworderror}</span>
                            </div>
                            <div className="form-group">
                            <label>Country  </label>
                            <select onChange={(event) => setSelectedcountry(event.target.value)} >
                                    { country.map((val,index) =>{
                                        return(
                                        <option key={index}>{val.name}</option>
                                        );
                                        
                                    })}
                            </select>
                            <span>{error}</span>
                        </div>
                        <button type="submit" className="button">Sign up </button>
                        <span className="login text-right"style={{fontSize:"14px"}}>
                            Already registered <a href="#" onClick={handleClick} style={{fontSize:"14px"}}>log in?</a>
                        </span>
                     </div>
                 </div>
                    </form>:<Login/>}
            
        </div>
            
        </div>
    )
}

export default Signup;

