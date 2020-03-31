import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import { Formik } from "formik";

const MountainDetails = ({match, location}) => {

    const currentUser = localStorage.getItem("current-user")
    const currentUserObject = JSON.parse(currentUser)
    const mountain_id = match.params.id;
    console.log("CURRENT USER OBJECT", currentUserObject.id)

    const [mountain, setMountain] = useState({})
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState({
        'mountain_id': mountain_id, 
        'user_id': currentUserObject.id, 
        'comment': ''
    })


    const getMountainById = (id) => {
        axiosWithAuth().get(`/mountains/${id}`)
        .then(res => {
            setMountain(res.data);
        })
        .catch(err => console.log(err))
    }

    const getCommentsForMountain = (mountain_id) => {
        axiosWithAuth().get(`/mountains/${mountain_id}/comments`)
            .then(res => {
                console.log("COMMENTS", res.data)
                setComments(res.data)
            })
            .catch(err => {
                console.log("better luck next time...")
            })
    }

    // const postComment = (e, newComment) => {
    //     e.preventDefault()
    //     axiosWithAuth().post(`/comments`, newComment)
    //         .then(res => {
    //             console.log("SUCCESS ON THE COMMENT POST")
    //         })
    //         .catch(err => {
    //             console.log("NO GOES IT ON POSTING THE NEW COMMENT")
    //         })
    // }




    useEffect(() => {
        getMountainById(mountain_id);
        getCommentsForMountain(mountain_id);
    }, [])

    return (
        <div className="about-mountain">
            <h2>{mountain.mountain_name}</h2>
            <h3>Nearest town: {mountain.nearest_town}</h3>
            <p>{mountain.description}</p>
            <button className="see-more mountain-details-page-link">
                <Link 
                    to="/mountains"
                    className="see-more-link"
                >
                    Return to Mountains
                </Link>
            </button>

            <div className="feature-coming">
                <h4>"Comments" functionality coming soon!</h4>
            </div>
            <div>
                <Formik
                    initialValues={{        
                        mountain_id: mountain_id, 
                        user_id: currentUserObject.id, 
                        comment: ''
                    }}
                    validate={values => {
                        const errors = {}
                        if (!values.comment) {
                            errors.comment = "Required"
                        }
                        return errors
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        axiosWithAuth().post(`/comments`, values)
                        .then(res => {
                            console.log("SUCCESS ON THE COMMENT POST")
                        })
                        .catch(err => {
                            console.log("NO GOES IT ON POSTING THE NEW COMMENT")
                        })
                    }}
                >
                    {/* <form>
                    <input 
                        placeholder="Been here? Tell us!"
                    />
                    <button
                        onClick={e => postComment(e, newComment)}
                    >
                        Add comment to section.
                    </button>
                    </form> */}
                    {({values, errors, touched, handleChange, handleSubmit, isSubmitting}) => (
                        <form>
                        <input 
                            placeholder="Been here? Tell us!"
                            name="comment"
                            type="text"
                            value={values.comment}
                            onChange={handleChange}
                        />
                        {errors.comment && touched.comment && errors.comment}
                        <button type="submit">
                            Add comment to section.
                        </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default MountainDetails;