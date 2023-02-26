import {useNavigate} from "react-router";

const ReturnBtn = () => {
    const navigate = useNavigate();
    const handleReturnClick = () => {
        navigate("/")
    }
    return (
        <button type="button" onClick={handleReturnClick}>
            Return ◀
        </button>
    )
}
export default ReturnBtn;