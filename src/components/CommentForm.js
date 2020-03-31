import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Formik } from "formik";

const CommentForm = ({currentUserObject, mountain_id}) => {
    return (<Formik
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
    {({values, errors, touched, handleChange, handleSubmit, isSubmitting}) => (
        <form onSubmit={handleSubmit}>
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
    )
}

export default CommentForm;