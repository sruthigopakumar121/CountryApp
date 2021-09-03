import React from 'react'

function Profile() {
    let pass = localStorage.getItem('Password').replace(/"/g, "");
    let mail = localStorage.getItem('Email').replace(/"/g, "");
    const [password, setPassword] = useState("pass");
    return (
        <div>
            <p>Password:{pass}</p>
            <p>Mail:{email}</p>
            <label> Change Password  </label>
            <input type="password" className="form-control" placeholder="Enter password"value={password} onChange={(event) => setPassword(event.target.value)} />
            <p>New password :{password}</p>
        </div>
    )
}

export default Profile;
