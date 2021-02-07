import React from "react";
import Card from 'react-bootstrap/Card'
import { PieChart } from 'react-minimal-pie-chart';

const PieChartCard = ({ data }) => {

    let colors = ["#c23127", "#c27727", "#c2b827", "#27c253", "#27c2b5", "#2772c2", "#6527c2", "#b527c2", "#751226", "#125275"];

    let chartData = data.map((dataPoint, index) => {
        return {
            title: dataPoint.category,
            value: dataPoint.amount,
            color: colors[index]
        };
    });

    return (
        <Card className="shadow pie-card">
            <Card.Header className="pie-chart-card-header">
                <span className="dashboard-card-header">{ "Categories Chart" }</span>  
                <i className="fas fa-chart-pie fa-lg"/>
            </Card.Header>
            <Card.Body className="pie-chart-card-body">
                <div className="pie-chart-categories">
                    {chartData.map((dataPoint, index) => (
                        <span className="pie-chart-category-container" key={index}>
                            <div
                                className="pie-chart-category-dot"
                                style={{ backgroundColor: dataPoint.color }}/>
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
                    labelStyle={{
                        color: "black",
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
