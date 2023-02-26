import {useRef, useEffect, useState, useContext} from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
import {useNavigate} from "react-router";
import jwtDecode from "jwt-decode";
import {Link} from "react-router-dom";

const LOGIN_URL = "/users/login";

const Login = () => {
    const navigate = useNavigate();
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const emailRef = useRef();
    const errRef = useRef();
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    // const [user, setUser] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [email, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post(
                LOGIN_URL,
                {
                    email: email,
                    password: pwd,
                },
                {headers: {"Content-Type": "application/json"}}
            );
            localStorage.setItem("token", data.token);
            let userData = jwtDecode(data.token);
            localStorage.setItem("userInfo", JSON.stringify(userData));
            setAuth({pwd});
            setEmail("");
            setPwd("");
            setSuccess(true);
            navigate(`/`);
        } catch (err) {
            console.error(err);
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing UserName Or Password");
            } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Login Failed");
            }
            errRef.current.focus();
        }
    };

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br/>
                    <p>
                        <Link to="/expenses-list/">Go to home</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <p
                        ref={errRef}
                        className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive"
                    >
                        {errMsg}
                    </p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">E-Mail:</label>
                        <input
                            type="email"
                            id="email"
                            ref={emailRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an account? <br/>
                        <span>
              {/*put router link here */}
                            <Link to="/register">Sign Up</Link>
            </span>
                    </p>
                </section>
            )}
        </>
    );
};

export default Login;
