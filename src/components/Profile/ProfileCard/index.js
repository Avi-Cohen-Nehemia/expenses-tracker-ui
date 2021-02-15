import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

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

        const { cardClass, content, handleChange, title, icon, inputType, inputValue } = this.props;

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
                        className={"fas fa-lg edit-icon " + (this.state.editValue ? "fa-times" : "fa-pencil-alt")}
                        onClick={ this.handleClick }
                    />
                </Card.Title>
                <Card.Body className="d-flex justify-content-center align-items-center">
                    { !this.state.editValue ?
                        <h2 className="text-center text-capitalize">{ content }</h2> :
                        <Form style={{ width: "100%" }}>
                            <Row className="align-items-center">
                                <Col xs={{ span: 8, offset: 1 }}>
                                    <Form.Group controlId={ `edit-${title}` }>
                                        <Form.Label>{ `Enter new ${title}` }</Form.Label>
                                        <Form.Control
                                            onChange={ handleChange }
                                            required
                                            type={ inputType }
                                            value={ inputValue }
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={{ span: 2 }}>
                                    <Button className="mt-3" type="submit">{"Submit"}</Button>
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
    handleChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputValue: PropTypes.string
};

export default ProfileCard;
