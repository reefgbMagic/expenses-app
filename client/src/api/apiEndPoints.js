import axios from "./axios";

const getAllExpenses = async (id) => {
    let {data} = await axios.get(`/expenses/getAllExpenses/${id}`);
    return data;
};
const getExpenseById = async (id) => {
    let {data} = await axios.get(`/expenses/getExpenseById/${id}`);
    return data;
};

export default {getAllExpenses, getExpenseById};