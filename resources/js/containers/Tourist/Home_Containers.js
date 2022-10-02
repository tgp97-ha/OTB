import React from "react";
import {withRouter} from "react-router";

function TouristHome() {
    return (
        <div className="container">
            <div className="row justify-content-center mt-3">
                <div className="col-md-8">
                    <h2>Tourist</h2>
                </div>
            </div>
        </div>
    );
}

export default withRouter(TouristHome);