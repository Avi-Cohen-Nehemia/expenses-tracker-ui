import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class ProfileCard extends Component {

    render() {

        const {
            cardClass,
            content,
            editingInput,
            handleChange,
            handleClick,
            handleSubmit,
            title,
            icon,
            inputType,
            inputValue
        } = this.props;

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
                        className={"fas fa-lg edit-icon " + (editingInput ? "fa-times" : "fa-pencil-alt")}
                        onClick={ handleClick }
                    />
                </Card.Title>
                <Card.Body className="d-flex justify-content-center align-items-center">
                    { !editingInput ?
                        <h2 className="profile-card-content">{ content }</h2> :
                        <Form
                            noValidate
                            onSubmit={ handleSubmit }
                            style={{ width: "100%" }}
                        >
                            <Row className="align-items-center">
                                <Col xs={{ span: 8 }}>
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
                                <Col xs={{ span: 4 }}>
                                    <Button
                                        className="mt-3"
                                        type="submit"
                                    >
                                        {"Submit"}
                                    </Button>
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
    editingInput: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputValue: PropTypes.string
};

export default ProfileCard;
