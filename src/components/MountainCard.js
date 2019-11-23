import React from "react";

const MountainCard = props => {
    return (
        <div className="card">
            <h2>{props.mountain.mountain_name}</h2>
            <h4>{props.mountain.nearest_town}</h4>
            <p>{props.mountain.description}</p>
        </div>
    );
}

export default MountainCard;