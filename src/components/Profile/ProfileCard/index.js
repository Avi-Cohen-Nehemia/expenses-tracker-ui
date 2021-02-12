import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class ProfileCard extends Component {

    constructor(props) {

        super(props);

        this.state = {
            editValue: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({editValue: !this.state.editValue})
    }

    render() {

        const { cardClass, content, title, icon } = this.props;

        return (
            <Card className={ "shadow " + cardClass }>
                <Card.Header
                    className="d-flex justify-content-between align-items-center"
                >
                    <span className="dashboard-card-header">{ title }</span>
                    <i className={ icon }/>
                </Card.Header>
                <Card.Title className="profile-card-title">
                    <i
                        className="fas fa-pencil-alt fa-lg edit-icon"
                        onClick={ this.handleClick }
                    />
                </Card.Title>
                <Card.Body className="d-flex justify-content-center align-items-center">
                    { !this.state.editValue
                        ?
                        <h2 className="text-center text-capitalize">{ content }</h2>
                        :
                        <Form style={{width: "100%"}}>
                            <Row>
                                <Col lg={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                                    <Form.Group controlId={`edit-${content}`}>
                                        <Form.Label>{ "Enter new..." }</Form.Label>
                                        <Form.Control
                                            onChange={ this.handleClick }
                                            // onChange={ (e) => this.handleChange(e, "transactionAmount") }
                                            required
                                            type="text"
                                            value={ content }
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    }
                </Card.Body>
            </Card>
        );
    }
}

ProfileCard.propTypes = {
    cardClass: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default ProfileCard;
