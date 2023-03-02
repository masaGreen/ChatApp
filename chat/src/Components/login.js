import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useState, useContext } from "react";
import AppContext from "../appContext";
import axios from "axios";

const Login = () => {
  const { setUser } = useContext(AppContext);
  const [errMessage, setErrMessage] = useState(null);
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const authUser = async (data) => {
    try {
      const response = await axios.post(
        "https://chatapp-api-w60f.onrender.com/user/auth",
        
        data
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      setUser(response.data);
      return response.data;
    } catch (error) {
      setErrMessage(error.response.data.message);
    }
  };
  const { mutate } = useMutation(authUser);
  function handleFormData(e) {
    e.preventDefault();
    const data = { phone };

    mutate(data);
    setPhone("");
    window.location.replace("/")
    // navigate("/");
  }

  return (
    <main className="signUp">
      <div className="formWrapper">
        <h2>Login</h2>
        {errMessage && <p>{errMessage}</p>}
        <form className="signUpForm" onSubmit={handleFormData}>
          <div className="numberInput">
            <label htmlFor="phone">Phone</label>
            <input
              placeholder="enter phone number..."
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit">login</button>
          <small>
            Dont have an account?{" "}
            <Link to="/signup" style={{ color: "blue" }}>
              sign Up
            </Link>
          </small>
        </form>
      </div>
    </main>
  );
};
export default Login;
