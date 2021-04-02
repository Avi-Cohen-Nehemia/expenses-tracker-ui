import React from "react";
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import homeImage from "../../assets/images/home-picture2.jpg";
import history from "../../history";
import Swal from "sweetalert2";

const LandingPage = ({ accessToken, isLoggedIn, logoutUser, username }) => {

    const handleClick = () => {

        if (isLoggedIn &&  accessToken) {
            Swal.fire({
                title: `You are already logged in as ${ username }`,
                text: 'Would you like to logout?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, logout!',
                confirmButtonColor: '#3085d6',
                cancelButtonText: 'No, stay logged in',
                cancelButtonColor: '#d33'
            }).then((result) => {
                if (result.isConfirmed) {
                    logoutUser();
                    Swal.fire({
                        icon: 'success',
                        title: 'You were logged out successfully',
                        showConfirmButton: true,
                    });
                }
            });
        } else {
            history.push("/signup");
        }
    }

    return (
        <div className="landing-page">
            <div className="my-auto welcome">
                <h1 className="text-center">
                    {"Welcome to Expenses Tracker"}
                </h1>
                <Row className="mt-4">
                    <Col md={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                        <Link className="text-decoration-none" to="/login">
                            <Button
                                block
                                size="lg"
                                variant="success"
                            >
                                {"Log In"}
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                        <Button
                                block
                                onClick={ handleClick }
                                size="lg"
                                variant="primary"
                            >
                                {"Sign Up"}
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className="blah2">
                <img
                    alt="person counting money"
                    className="cover-image"
                    src={ homeImage }
                />
            </div>
        </div>
    );
}

LandingPage.propTypes = {
    accessToken: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    logoutUser: PropTypes.func.isRequired
};

export default LandingPage;
