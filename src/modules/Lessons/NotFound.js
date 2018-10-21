import NavMenu from "../Lessons/NavMenu";
import React from "react";
const NotFound = () => {
    return (
        <div className="row">
            <div className="col-3.5">
                <NavMenu />
            </div>
            <div className="col">
                <div className="lesson-parts">
                    <strong>Error 404: Page Not Found!</strong>
                </div>
            </div>
        </div>
    );
};

export default NotFound;