import React from "react";
import {withRouter} from "react-router";

function TourHome() {
    return (
        <div className="container">
            <div className="row justify-content-center mt-3">
                <div className="col-md-8">
                    <h2>Tour</h2>
                </div>
            </div>
        </div>
    );
}

export default withRouter(TourHome);