import React, {useState} from "react";
import "./ExpenseForm.css";
import axios from "../../../api/axios";
import {useParams} from "react-router";
import dateFormatter from "../../../../src/utils/dateFormater.utils";
import jwtDecode from "jwt-decode";


const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const token = localStorage.getItem("token")
    const tokenDecoded = jwtDecode(localStorage.getItem("token"))
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = async (event) => {
        try {
            event.preventDefault();
            const expenseData = {
                expenseName: enteredTitle,
                expenseAmount: enteredAmount,
                expenseDate: dateFormatter(enteredDate),
            };
            if (!enteredTitle || !enteredAmount || !enteredDate) return alert("Please enter title, amount, date.");
            await axios.post(`/expenses/addExpense`, {
                expenseOwner: token.uuid,
                expenseName: expenseData.expenseName,
                expenseAmount: expenseData.expenseAmount,
                expenseDate: expenseData.expenseDate
            }, {
                headers: {
                    token: token,
                    uuid: tokenDecoded.uuid
                }
            })
            props.onSaveExpenseData(expenseData);
            setEnteredTitle("");
            setEnteredAmount("");
            setEnteredDate("");
        } catch (error) {
            console.log("error: ", error)
        }

    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2023-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
