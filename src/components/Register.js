import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {

    const [newUser, setNewUser ] = useState({ username: "", password: ""});

    const handleChange = e => {
        const {name, value} = e.target;
        setNewUser({...newUser, [name]: value})
        console.log(newUser);

    }

    const handleSubmit = (e, creds) => {
        e.preventDefault();
        console.log("HandleSubmitFunctionWHeeee", creds);
        axios.post("https://snowboardy-life.herokuapp.com/api/register", creds)
            .then(user => {
                console.log("Hello from inside handleSubmit then statement")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="content-wrapper">
            Haii register screen!
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
            <div>Already registered? Go <Link to="/">here</Link></div>
        </div>
    );
}

export default Register;