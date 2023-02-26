import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import axios from "../../../api/axios";


const NewExpense = ({onAddExpense}) => {
    const [isEditing, setIsEditing] = useState(false);

    const onSaveExpenseDataHandler = async (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        console.log("expenseData: ", expenseData)
        onAddExpense(expenseData);
        setTimeout(() => {
            setIsEditing(false);
        }, 200)
    };

    const startEditinghandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditinghandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={onSaveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
