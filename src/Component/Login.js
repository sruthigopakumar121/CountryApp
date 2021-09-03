import React,{useState} from 'react'
import Home from './Home';
import './Signup.css';

function Login() {
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);
    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('Password').replace(/"/g, "");
        let mail = localStorage.getItem('Email').replace(/"/g, "");
        

        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((passwordlog !== pass) || (emaillog !== mail)) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }
   
    return (
        <div>
            
            {home ? <form onSubmit={handleLogin}>
                <div className="outer">
                    <div className="inner">
                        <h3>LogIn</h3>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmaillog(event.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)} />
                        </div>

                        <button type="submit" className="button">Login</button>

                        {flag && <span color='primary' variant="warning" >
                            Fill correct Info else keep trying.
                                </span>}
                    </div>
                </div>
            </form>
                : <Home/>
            }

        
        </div>
    )
}

export default Login;
