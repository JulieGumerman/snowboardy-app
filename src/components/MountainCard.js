import React from "react";
import { Link } from "react-router-dom";

const MountainCard = props => {
    return (
        <div className="card">
            <h2>{props.mountain.mountain_name}</h2>
            <h4>{props.mountain.nearest_town}</h4>
            <p>{props.mountain.description}</p>
            <div className="button-box">
                <button 
                    className="delete-button" 
                    onClick={() => props.deleteMountain(props.mountain.id)}
                >
                    Delete
                </button>
                <button className="see-more">
                    <Link 
                        className="see-more-link"
                        // to={`/mountains/${props.mountain.id}`}
                        // state={currentUser}
                        to={{
                            pathname: `/mountains/${props.mountain.id}`,
                            state: props.currentUser
                        }}
                    >
                        See more
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default MountainCard;