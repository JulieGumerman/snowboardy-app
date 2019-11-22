import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import MountainCard from "./MountainCard";

const Mountains = () => {

    const [mountains, setMountains] = useState([]);

 

    useEffect(() => {
        axiosWithAuth().get("mountains/")
            .then(res => {
                console.log(res);
                setMountains(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    console.log("MOUNTAINS!!!", mountains);


    return (
        <div className="content-wrapper">
            <h3>I do luvv dose mountains!!!</h3>
            <form className="mntn-form">
                <input 
                    placeholder="mountain name"
                />
                <input 
                    placeholder="nearest town"
                />
                <input 
                    placeholder="description"
                />
                <button className="mntn-button">Submit</button>
            </form>

            <div>
                {
                    mountains.map(mountain => <MountainCard key={mountain.id} mountain={mountain}/>)
                }
            </div>
        </div>
    );
}

export default Mountains;