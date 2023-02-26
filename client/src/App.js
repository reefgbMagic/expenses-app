import {Route, Routes} from "react-router";
import ExpenseList from "./components/expense-list/expenseHandler/Expenses";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ProtectedRoutes from "./components/authGuard/ProtectedRoute";
import {Navigate} from "react-router-dom";
import PageNotFound from "./components/404 page/PageNotFound";

function App() {
    return (
        <main className="App">
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route element={<ProtectedRoutes/>}>
                    <Route exact path="/" element={<Homepage/>}/>
                    <Route path="/expense-list" element={<ExpenseList/>}/>
                </Route>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </main>
    );
}

export default App;
