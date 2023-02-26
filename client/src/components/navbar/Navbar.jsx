import {useNavigate} from "react-router";
import {Title} from "../helpers/Title";
import {Container} from "../helpers/Container";
import {LogoutBtn} from "./LogoutBtn";
import {NavLink} from "react-router-dom";
import {NavbarWrapper} from "./NavbarWrapper";

const Navbar = () => {
    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem("userInfo"));
    const LogoutHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userInfo");
        navigate("/login");
    };
    return (
        <NavbarWrapper>
            <Title titleText={"Welcome "} user={user?.userName}/>
            <Container>
                <NavLink to={"/"}>Home</NavLink>
                <LogoutBtn
                    btnType={"button"}
                    btnText={"Logout"}
                    handleBtnClick={LogoutHandler}
                />
            </Container>
        </NavbarWrapper>
    );
};

export default Navbar;
