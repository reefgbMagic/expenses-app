import {useEffect, useState} from "react";
import axios from "../../../api/axios";
import {useSelector, useDispatch} from "react-redux";
import Expenses from "../Expenses/Expenses";
import NewExpense from "../NewExpense/NewExpense";
import jwtDecode from "jwt-decode";
import Navbar from "../../navbar/Navbar";

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);
    const token = localStorage.getItem("token")
    const tokenDecoded = jwtDecode(localStorage.getItem("token"))

    useEffect(async () => {
        try {
            let {data} = await axios.get(`/expenses/getAllExpenses`, {
                headers: {
                    token: token,
                    uuid: tokenDecoded.uuid
                }
            });
            return setExpenses(data.userExpenses);
        } catch (error) {
            console.error("error: ", error);
        }
    }, []);

    const addExpenseHandler = async (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <>
            <Navbar/>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </>
    );
};

export default ExpenseList;
