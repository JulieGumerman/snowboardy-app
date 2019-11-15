import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = props => {
    const [user, setUser] = useState({ username: "", password: ""})

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({...user, [name]: value});
        console.log(user);
    }

    const handleSubmit = (e, creds) => {
        e.preventDefault();
        console.log("CREDSS!!!!", creds);
        axios.post("https://snowboardy-life.herokuapp.com/api/login", creds)
            .then(user => props.history.push("/mountains"))
            .catch(err => console.log(err))
    }

    return (
        <div className="content-wrapper">
            <h3>Just your friendly neightborhood login page</h3>
            
                <form className="log-reg-form" onSubmit={e => handleSubmit(e, user)}>
                    <div className="form-holder">
                     <input 
                        name="username"
                        type="text"
                        value={user.username}
                        onChange={handleChange}
                     />
                    <input 
                        name="password"
                        type="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                    </div>  
                    <button className="log-reg-button">Log in</button>
                </form>   
              
            <div>No account? Sign up <Link to="/register">here</Link></div>
        </div>
    );
}

export default Login;