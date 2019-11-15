import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="content-wrapper">
            <h3>Just your friendly neightborhood login page</h3>
            
                <form className="log-reg-form">
                    <div className="form-holder">
                     <input />
                    <input />
                    </div>  
                    <button className="log-reg-button">Log in</button>
                </form>   
              
            <div>No account? Sign up <Link to="/register">here</Link></div>
        </div>
    );
}

export default Login;