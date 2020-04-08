import React from "react";
import { Link } from "react-router-dom";

const Logout = (props) => {

    const logout = ()  => {
        localStorage.clear()
    }

    return (
        <div>
            <button 
                className="logout"
                onClick={logout}
            >
                <Link 
                    className="logout-link"
                    to="/"
                >
                    Log out
                </Link>
            </button>
        </div>
    )
}

export default Logout;