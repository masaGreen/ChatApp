import axios from "axios";
import { useContext, useState } from "react";
import { useMutation } from "react-query";
import AppContext from "../appContext";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { setUser } = useContext(AppContext);
  const [errMessage, setErrMessage] = useState(null);
  const createUser = async (data) => {
    try {
      const response = await axios.post(
        // "http://localhost:3500/user",
         "https://chatapp-api-w60f.onrender.com/user",
         data);
      setUser(response.data);
      return response.data;
    } catch (error) {
      setErrMessage(error.response.data.message);
    }
  };
  const { mutate } = useMutation(createUser);
  function handleFormData(e) {
    e.preventDefault();
    const data = { name, phone };

    mutate(data);
    setName("");
    setPhone("");
    navigate("/login");
  }
  return (
    <main className="signUp">
      <div className="formWrapper">
        <h2>Sign up</h2>
        {errMessage && <p>{errMessage}</p>}
        <form className="signUpForm" onSubmit={handleFormData}>
          <div className="nameInput">
            <label htmlFor="name">Name</label>
            <input
              placeholder="enter name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="numberInput">
            <label htmlFor="phone">Phone</label>
            <input
              placeholder="enter phone number"
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit">sign up</button>
          <p style={{ fontSize: "12px" }}>Already have an account? </p>
          <span>
            <Link to="/login" style={{ color: "blue", fontSize: "16PX" }}>
              login
            </Link>
          </span>
        </form>
      </div>
    </main>
  );
};
export default SignUp;
