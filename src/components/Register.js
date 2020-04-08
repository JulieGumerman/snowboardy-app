import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
//import { useEffect } from "react";

const Register = (props) => {

    const [users, setUsers] = useState([])

    const existingUsers = () => {
        axios.get("https://snowboardy-life.herokuapp.com/api/users")
            .then(thoseWhoUse => {
                setUsers(thoseWhoUse.data)
            })
            .catch(error => console.log(error))
    }
  
    console.log("WE ARE USERS", users)
    useEffect(() => {
        existingUsers();
    }, [])

    const usernames = users.map(user => user.username)

    console.log(usernames)
    

    return (
        <div className="content-wrapper">
            <div className="form-container">
            <h3>Register here.</h3>
            <Formik
                initialValues={{username: '', password: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.username.length) {
                        errors.username = "Required"
                    } else if (usernames.includes(values.username)){
                        errors.username = "User already exists"
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
                        {errors.password && touched.password && errors.password}
                        </div>
                        <button className="log-reg-button" type="submit" disabled={isSubmitting}>Register</button>
                    </form>
                )}
            </Formik>    
            <div className="info-text">Already registered? Go <Link to="/">here</Link></div>
        </div>
        </div>
    );
}

export default Register;