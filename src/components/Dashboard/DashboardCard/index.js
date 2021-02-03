import React from "react";
import Card from 'react-bootstrap/Card'

const DashboardCard = ({ cardClass, content, title, icon }) => {
    return (
        <Card className={"shadow " + cardClass}>
            <Card.Header
                className="d-flex justify-content-between align-items-center"
            >
                <span className="dashboard-card-header">{ title }</span>  
                <i className={ icon }/>
            </Card.Header>
            <Card.Body className="d-flex justify-content-center align-items-center">
                <h2 className="text-center text-capitalize">{ content }</h2>
            </Card.Body>
        </Card>
    );
};

export default DashboardCard;