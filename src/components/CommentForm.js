import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Formik } from "formik";

const CommentForm = ({currentUserObject, mountain_id}) => {
    return (<Formik
    initialValues={{        
        mountain_id: mountain_id, 
        user_id: currentUserObject.id, 
        title: '',
        comment: ''
    }}
    validate={values => {
        const errors = {}
        if (!values.title) {
            errors.title = "Required"
        }
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
    {({values, errors, touched, handleChange, handleSubmit, isSubmitting}) => (
        <form className="comment-form" onSubmit={handleSubmit}>
        <h3>Leave a comment!</h3>
        <p>Title:</p>
        <input 
            name="title"
            type="text"
            values={values.title}
            onChange={handleChange}
        />
        <p>Comment:</p>
        <input 
            name="comment"
            type="text"
            value={values.comment}
            onChange={handleChange}
        />
        {errors.comment && touched.comment && errors.comment}
        <button 
            disabled={isSubmitting}
            type="submit"
            className="comment-button"
        >
            Add comment to section.
        </button>
        </form>
    )}
    </Formik>
    )
}

export default CommentForm;