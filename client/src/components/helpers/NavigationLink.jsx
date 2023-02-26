import {Link} from "react-router-dom";

export const NavigationLink = ({goToLink, LinkText}) => {
    return (<Link to={goToLink}>{LinkText}</Link>)
}