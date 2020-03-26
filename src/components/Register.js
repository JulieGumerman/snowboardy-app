import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";

const Register = (props) => {

    const [newUser, setNewUser ] = useState({ username: "", password: ""});

    // const handleChange = e => {
    //     const {name, value} = e.target;
    //     setNewUser({...newUser, [name]: value})

    // }


    // const handleSubmit = (e, creds) => {
    //     e.preventDefault();
    //     console.log("HandleSubmitFunctionWHeeee", creds);
    //     axios.post("https://snowboardy-life.herokuapp.com/api/register", creds)
    //         .then(user => {
    //             props.history.push("/")
    //             console.log(creds)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    return (
        <div className="content-wrapper">
            Register here.
            <Formik
                initialValues={{username: '', password: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.username.length) {
                        errors.username = "Required"
                    }
                    if (!values.password) {
                        errors.password = "Required"
                    }
                    return errors;
                }}
                onSubmit={( values, {setSubmitting}) => {          
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                    }, 400)
                }}
            >
                {({values, errors, touched, handleChange, handleSubmit, isSubmitting}) => (
                    <form className="log-reg-form" onSubmit={e => handleSubmit(e, newUser)}>
                        <div className="form-holder">
                        <input 
                            // placeholder="username"
                            name="username"
                            value={values.username}
                            type="text"
                            onChange={handleChange}
                        />
                        {errors.username && touched.username && errors.username}
                        <input 
                            // placeholder="password"
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.username && touched.username && errors.username}
                        </div>
                        <button className="log-reg-button" type="submit" disabled={isSubmitting}>Register</button>
                    </form>
                )}
            </Formik>    
            <div className="info-text">Already registered? Go <Link to="/">here</Link></div>
        </div>
    );
}

export default Register;