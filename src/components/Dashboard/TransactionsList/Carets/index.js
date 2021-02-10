import React from "react";
import PropTypes from "prop-types";

const Carets = ({ direction, sortBy }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                top: "4px",
            }}
        >
            {
                sortBy ?
                    (direction === "desc" ?
                    <div className="caret-down"></div>
                    : <div className="caret-up"></div>)

                :   <>
                        <div className="caret-down"></div>
                        <div className="caret-up"></div>
                    </>
            }
        </div>
    );
};

Carets.propTypes = {
    direction: PropTypes.string,
    sortBy: PropTypes.bool.isRequired
};

export default Carets;
