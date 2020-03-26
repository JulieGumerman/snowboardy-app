import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

const MountainDetails = ({match}) => {

    const [mountain, setMountain] = useState({})
    const id = match.params.id;

    const getMountainById = (id) => {
        axiosWithAuth().get(`/mountains/${id}`)
        .then(res => {
            setMountain(res.data);
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getMountainById(id);
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
                <input 
                    placeholder="Been here? Tell us!"
                />
                <button>
                    Add comment to section.
                </button>
            </div>
        </div>
    );
}

export default MountainDetails;