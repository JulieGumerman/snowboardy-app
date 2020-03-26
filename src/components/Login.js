import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";

const Login = props => {
    const [user, setUser] = useState({ username: "", password: ""})

    // const handleChange = e => {
    //     const { name, value } = e.target;
    //     setUser({...user, [name]: value});
    // }

    // const handleSubmit = (e, creds) => {
    //     e.preventDefault();
    //     axios.post("https://snowboardy-life.herokuapp.com/api/login", creds)
    //         .then(res => {
    //             localStorage.setItem("token", res.data.token);
    //             props.history.push("/mountains")
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <div className="content-wrapper">
            <h3>Log in here.</h3>
                <Formik
                    initialValues={{username: '', password: ''}}
                    validate={values => {
                        const errors = {};
                        if (!values.username) {
                            errors.username = "Required"
                        }
                        if(!values.password) {
                            errors.password = "Required"
                        }
                        return errors;
                        }}
                    onSubmit={(values, {setSubmitting}) => {
                        ///
                        axios.post("https://snowboardy-life.herokuapp.com/api/login", values)
                            .then(res => {
                                localStorage.setItem("token", res.data.token);
                                props.history.push("/mountains")
                            })
                            .catch(err => console.log(err))
                        ///                        
                    }}
                >
                    {({values, errors, touched, handleChange, handleSubmit, isSubmitting}) => (
                        <form className="log-reg-form" onSubmit={handleSubmit}>
                            <div className="form-holder">
                            <input 
                                name="username"
                                type="text"
                                value={values.username}
                                onChange={handleChange}
                            />
                            {errors.username && touched.username && errors.username}
                            <input 
                                name="password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && touched.password && errors.password}
                            </div>  
                            <button className="log-reg-button">Log in</button>
                        </form>   
                    )}
                </Formik>  
            <div className="info-text">No account? Sign up <Link to="/register">here</Link></div>
        </div>
    );
}

export default Login;