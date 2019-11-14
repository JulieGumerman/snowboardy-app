import React from "react";

const Mountains = () => {
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
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Mountains;