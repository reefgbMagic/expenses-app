import {useNavigate} from "react-router";
import {Title} from "../helpers/Title";
import {CenteredContainer} from "../helpers/CenteredContainer";
import {NavigationLink} from "../helpers/NavigationLink";
import {LogoutBtn} from "../navbar/LogoutBtn";

function Homepage() {
    const navigate = useNavigate();
    let userData = JSON.parse(localStorage.getItem("userInfo"));
    const LogoutHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userInfo");
        navigate("/login");
    };

    return (
        <CenteredContainer>
            <Title titleText={"Welcome "} user={userData?.userName}/>
            <NavigationLink goToLink={"/expense-list"} LinkText={"View expenses"}/>
            <LogoutBtn
                btnType={"button"}
                btnText={"Logout"}
                handleBtnClick={LogoutHandler}
            />
        </CenteredContainer>
    );
}

export default Homepage;
