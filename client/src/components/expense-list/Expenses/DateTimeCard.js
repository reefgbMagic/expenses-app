import React from "react";

function DateTimeCard(props){
    const month = props.date.toLocaleString();
    const day = props.date.toLocaleString();
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default DateTimeCard