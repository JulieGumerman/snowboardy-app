import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="content-wrapper">
            Haii register screen!
            <form className="log-reg-form">
                <div className="form-holder">
                <input />
                <input />
                </div>
                <button className="log-reg-button">Register</button>
            </form>    
            <div>Already registered? Go <Link to="/">here</Link></div>
        </div>
    );
}

export default Register;