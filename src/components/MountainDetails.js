import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import CommentForm from './CommentForm';
import CommentCard from './CommentCard';

const MountainDetails = ({match, location}) => {

    const currentUser = localStorage.getItem("current-user")
    const currentUserObject = JSON.parse(currentUser)
    const mountain_id = match.params.id;

    const [mountain, setMountain] = useState({})
    const [comments, setComments] = useState([])


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
                setComments(res.data)
            })
            .catch(err => {
                console.log("better luck next time...")
            })
    }




    useEffect(() => {
        getMountainById(mountain_id);
        getCommentsForMountain(mountain_id);
    }, [mountain_id])


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

            <CommentForm 
                mountain_id={mountain_id}
                currentUserObject={currentUserObject}
            />
            <div>
                <h3>Comments</h3>
                {comments.map(comment => {
                    return (
                        <CommentCard 
                            key={comment.id}
                            comment={comment}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default MountainDetails;