import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";
import { PieChart } from 'react-minimal-pie-chart';

class PieChartCard extends Component {

    constructor(props) {

        super(props);

        this.state = {
            showPercentValues: false
        };

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        this.setState({showPercentValues: !this.state.showPercentValues})
    }

    render() {

        let colors = ["#c23127", "#c27727", "#c2b827", "#27c253", "#27c2b5", "#2772c2", "#6527c2", "#b527c2"];

        const { data } = this.props;

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
                    <div className="pie-chart-category-container">
                        <Form.Check 
                            type="switch"
                            id="pie-chart-switch"
                            className="mr-2"
                            onClick={ this.handleClick }
                        />
                        <i className="fas fa-chart-pie fa-lg"/>
                    </div>
                </Card.Header>
                <Card.Body className="pie-chart-card-body">
                    <div className="pie-chart-categories">
                        {chartData.map((dataPoint, index) => (
                            <span className="pie-chart-category-container" key={index}>
                                <div
                                    className="pie-chart-category-dot"
                                    style={{ backgroundColor: dataPoint.color }}
                                />
                                <span>{ dataPoint.title }</span>
                            </span>
                        ))}
                    </div>
                    <PieChart
                        animate
                        animationDuration={ 800 }
                        data={ chartData }
                        label={({ dataEntry }) => this.state.showPercentValues ? `${Math.round(dataEntry.percentage)}%` : `£${ dataEntry.value.toFixed(2) }`}
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
};

export default PieChartCard;
