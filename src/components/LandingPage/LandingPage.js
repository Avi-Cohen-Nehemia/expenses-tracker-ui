import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import homeImage from "../../assets/images/home-picture2.jpg";
import history from "../../history";
import Swal from "sweetalert2";

class LandingPage extends Component {

    constructor(props) {

        super(props);

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {

        const { accessToken, isLoggedIn, logoutUser, username } = this.props;

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
                };
            });
        } else {
            history.push("/signup");
        };
    };

    render() {

        return (
            <div className="landing-page">
                <div className="my-auto welcome">
                    <h1 className="text-center">
                        {"Welcome to Expenses Tracker"}
                    </h1>
                    <Row className="mt-4">
                        <Col xs={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
                            <Link to="/login" className="text-decoration-none">
                                <Button
                                    block
                                    variant="success"
                                    size="lg"
                                >
                                    {"Log In"}
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
                            <Button
                                    block
                                    onClick={ this.handleClick }
                                    variant="primary"
                                    size="lg"
                                >
                                    {"Sign Up"}
                            </Button>
                        </Col>
                    </Row>
                </div>
                <div className="blah2">
                    <img
                        src={ homeImage }
                        alt="person counting money"
                        className="cover-image"
                    />
                </div>
            </div>
        );
    }
};

export default LandingPage;
