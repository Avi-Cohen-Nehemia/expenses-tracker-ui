import React from 'react';
import fourOfFour from "../../assets/images/fourOhFour.jpg"

const FourOhFour = () => {
    return (
        <>
            <h1 className="display-3">{"Oops! We can't seem to find the page you are looking for."}</h1>
            <img
                src={ fourOfFour }
                alt="404 error"
                className="four-oh-four"
            />
        </>
    );
};

export default FourOhFour;
