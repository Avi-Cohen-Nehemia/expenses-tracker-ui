import React, { Component } from "react";
import PropTypes from 'prop-types';
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
    }

    handleClick() {
        this.setState({ showPercentValues: !this.state.showPercentValues })
    }

    render() {

        let colors = ["#c23127", "#c27727", "#c2b827", "#27c253", "#27c2b5", "#2772c2", "#6527c2", "#b527c2"];

        const { data } = this.props;

        let chartData = data.map((dataPoint, index) => {
            return {
                title: dataPoint.category,
                value: dataPoint.amount,
                formattedValue: dataPoint.amount_with_currency,
                color: colors[index]
            };
        });

        let sortedData = chartData.sort((a, b) => b.value - a.value);

        return (
            <Card className="shadow pie-card">
                <Card.Header className="pie-chart-card-header">
                    <span className="dashboard-card-header">{ "Categories Chart" }</span>
                    <div className="pie-chart-category-container">
                        <Form.Check
                            className="mr-2"
                            id="pie-chart-switch"
                            onClick={ this.handleClick }
                            type="switch"
                        />
                        <i className="fas fa-chart-pie fa-lg"/>
                    </div>
                </Card.Header>
                <Card.Body className="pie-chart-card-body">
                    <div className="pie-chart-categories">
                        {sortedData.map((dataPoint, index) => (
                            <span className="pie-chart-category-container" key={ index }>
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
                        label={({ dataEntry }) => this.state.showPercentValues ? `${ Math.round(dataEntry.percentage) }%` : dataEntry.formattedValue}
                        labelPosition={ 60 }
                        labelStyle={{
                            color: "black",
                            fontSize: chartData.length > 5 ? "0.3rem" : "0.5rem",
                            fontWeight: "bold",
                            textTransform: "capitalize"
                        }}
                        style={{ maxWidth: "40%" }}
                    />
                </Card.Body>
            </Card>
        );
    }
}

PieChartCard.propTypes = {
    data: PropTypes.array.isRequired,
};

export default PieChartCard;
