import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = (props) => {

    const [newUser, setNewUser ] = useState({ username: "", password: ""});

    const handleChange = e => {
        const {name, value} = e.target;
        setNewUser({...newUser, [name]: value})

    }

    const handleSubmit = (e, creds) => {
        e.preventDefault();
        console.log("HandleSubmitFunctionWHeeee", creds);
        axios.post("https://snowboardy-life.herokuapp.com/api/register", creds)
            .then(user => {
                props.history.push("/")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="content-wrapper">
            Register here.
            <form className="log-reg-form" onSubmit={e => handleSubmit(e, newUser)}>
                <div className="form-holder">
                <input 
                    placeholder="username"
                    name="username"
                    value={newUser.username}
                    type="text"
                    onChange={handleChange}
                />
                <input 
                    placeholder="password"
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleChange}
                />
                </div>
                <button className="log-reg-button">Register</button>
            </form>    
            <div className="info-text">Already registered? Go <Link to="/">here</Link></div>
        </div>
    );
}

export default Register;