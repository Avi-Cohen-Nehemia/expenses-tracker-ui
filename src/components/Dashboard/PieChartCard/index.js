import React from "react";
import Card from 'react-bootstrap/Card'
import { PieChart } from 'react-minimal-pie-chart';

const PieChartCard = ({ cardClass, title, icon, data }) => {

    let colors = ["#c23127", "#c27727", "#c2b827", "#27c253", "#27c2b5", "#2772c2", "#6527c2", "#b527c2", "#751226", "#125275"];

    let chartData = data.map((dataPoint, index) => {
        return {
            title: dataPoint.category,
            value: dataPoint.amount,
            color: colors[index]
        };
    });

    return (
        <Card className={"shadow " + cardClass}>
            <Card.Header
                className="d-flex justify-content-between align-items-center"
            >
                <span className="dashboard-card-header">{ title }</span>  
                <i className={ icon }/>
            </Card.Header>
            <Card.Body className="d-flex justify-content-around align-items-center">
                <div className="d-flex flex-column justify-content-around text-capitalize font-weight-bold" style={{height: "100%"}}>
                    {chartData.map((dataPoint, index) => (
                        <span className="d-flex justify-content-start align-items-center" key={index}>
                            <div style={{
                                height: "10px",
                                width: "10px",
                                backgroundColor: dataPoint.color,
                                marginRight: "0.5rem",
                                borderRadius: "50%"
                            }}/>
                            <span>{ dataPoint.title }</span>
                        </span>
                    ))}
                </div>
                <PieChart
                    animate
                    animationDuration={ 800 }
                    data={ chartData }
                    label={({ dataEntry }) => `£${ dataEntry.value.toFixed(2) }`}
                    labelPosition={ 60 }
                    labelStyle={{color: "black",
                        fontSize: chartData.length > 5 ? "0.4rem" : "0.5rem",
                        fontWeight: "bold",
                        textTransform: "capitalize"
                    }}
                    style={{ maxWidth: "40%" }}
                />
            </Card.Body>
        </Card>
    );
};

export default PieChartCard;
