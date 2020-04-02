import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";

const Register = (props) => {


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
                    console.log("HandleSubmitFunctionWHeeee", values);
                    axios.post("https://snowboardy-life.herokuapp.com/api/register", values)
                        .then(user => {
                            props.history.push("/")
                        })
                        .catch(err => {
                            console.log(err)
                        })                    
                }}
            >
                {({values, errors, touched, handleChange, handleSubmit, isSubmitting}) => (
                    <form className="log-reg-form" onSubmit={handleSubmit}>
                        <div className="form-holder">
                        <input 
                            // placeholder="username"
                            name="username"
                            placeholder="username"
                            value={values.username}
                            type="text"
                            onChange={handleChange}
                        />
                        {errors.username && touched.username && errors.username}
                        <input 
                            // placeholder="password"
                            type="password"
                            placeholder="password"
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