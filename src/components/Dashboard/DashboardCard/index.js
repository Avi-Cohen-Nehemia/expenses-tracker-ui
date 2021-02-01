import React from "react";
import Card from 'react-bootstrap/Card'

const DashboardCard = ({ cardClass, title, icon }) => {
    return (
        <Card className={"shadow " + cardClass}>
            <Card.Header>{ icon }</Card.Header>
            <Card.Body>
            <Card.Title>{ title }</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default DashboardCard;