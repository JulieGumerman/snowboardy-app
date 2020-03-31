import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import MountainCard from "./MountainCard";

const Mountains = (props) => {

    const [mountains, setMountains] = useState([]);
    const [newMountain, setNewMountain] = useState({mountain_name: "", nearest_town: "", description: ""});

    //console.log("where state currently resides", props.history.location.state.user)
    const currentUser = props.history.location.state.user

    //the get request

    const getMountains = () => {
        axiosWithAuth().get("mountains/")
            .then(res => {
                setMountains(res.data);
            })
            .catch(err => console.log(err))        
    }

    useEffect(() => {
        getMountains();
    }, []);

    //the post request

    const handleChange = e => {
        const {name, value} = e.target;
        setNewMountain({...newMountain, [name]: value})
    }

    const handleSubmit = (e, mntn) => {
        e.preventDefault();
        axiosWithAuth().post("mountains/", mntn)
            .then(res => {
                getMountains();
            })
            .catch(err => console.log(err))
        setNewMountain({mountain_name: "", nearest_town: "", description: ""})
    }


    //delete request

    const deleteMountain = (id) => {
        axiosWithAuth().delete(`/mountains/${id}`)
            .then(mntn => getMountains())
            .catch(err => {console.log(err)})
    }

    //what you see


    return (
        <div className="content-wrapper">
            <form className="mntn-form" onSubmit={(e) => handleSubmit(e, newMountain)}>
                <input 
                    placeholder="mountain name"
                    name="mountain_name"
                    value={newMountain.mountain_name}
                    onChange={handleChange}
                />
                <input 
                    placeholder="nearest town"
                    name="nearest_town"
                    value={newMountain.nearest_town}
                    onChange={handleChange}
                />
                <input 
                    placeholder="description"
                    name="description"
                    value={newMountain.description}
                    onChange={handleChange}
                />
                <button className="mntn-button">Submit</button>
            </form>

            <div className="card-container">
                {
                    mountains.map(mountain => {
                    return(
                        <MountainCard 
                            key={mountain.id} 
                            mountain={mountain}
                            deleteMountain={deleteMountain}
                            state={currentUser}
                        />
                    )})
                }
            </div>
        </div>
    );
}

export default Mountains;