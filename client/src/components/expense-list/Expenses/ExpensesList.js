import react, {useEffect, useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({expenseItems, ...rest}) => {

    if (expenseItems.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>;
    }


    return (
        <ul className="expenses-list">
            {expenseItems?.map((expense, idx) => {
                    return (<ExpenseItem
                        key={idx}
                        title={expense.expenseName}
                        amount={expense.expenseAmount}
                        date={expense.createdAt || expense.expenseDate}
                    />)
                }
            )}
        </ul>
    );
};

export default ExpensesList;
