export const LogoutBtn = ({btnType, handleBtnClick, btnText}) => {
    return (
        <button type={btnType} onClick={handleBtnClick}>{btnText}</button>
    )
}