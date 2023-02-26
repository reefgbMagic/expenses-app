import react from "react";
import Chart from "../Chart/chart";

const ExpenseChart = (props) => {
    const chartDataPoints = [
        {label: "Jan", value: 4},
        {label: "Fab", value: 7},
        {label: "Mar", value: 0},
        {label: "Apr", value: 0},
        {label: "May", value: 4},
        {label: "Jun", value: 0},
        {label: "Jul", value: 0},
        {label: "Aug", value: 5},
        {label: "Sep", value: 0},
        {label: "Oct", value: 9},
        {label: "Nov", value: 0},
        {label: "Dec", value: 0},
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    return <Chart dataPoints={chartDataPoints}/>;
};

export default ExpenseChart;
