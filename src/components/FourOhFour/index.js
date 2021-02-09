import React from "react";
import fourOfFour from "../../assets/images/fourOhFour.png";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const FourOhFour = () => {
    return (
        <Container>
            <h1 className="display-3 mt-5">{ "Oops!" }</h1>
            <h2 className="display-4">{ "We can't seem to find the page you are looking for." }</h2>
            <div className="four-oh-four">
                <img
                    alt="404 error"
                    src={ fourOfFour }
                    style={{maxWidth: "100%"}}
                />
            </div>
            <Link to="/"><p>{ "Navigate back to safety" }</p></Link>
        </Container>
    );
};

export default FourOhFour;
