import { useNavigate } from "react-router";

const Navbar = () => {
  const LogoutHandler = () => {
    console.log("clicked");
    return localStorage.removeItem("token");
  };
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Welcome User</h1>
        <button
          onClick={() => {
            navigate("/login");
            LogoutHandler();
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;
