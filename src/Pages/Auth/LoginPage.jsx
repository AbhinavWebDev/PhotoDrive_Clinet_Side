import { React,useState } from "react";
import { useDispatch } from "react-redux";
import { PasswordInput, TextInput } from "@mantine/core";
import "./LoginPage.css";
import { logIn } from "../../Redux/Actions/AuthAction";
import { Button } from "@mui/material";

export default function Login() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    number: "",
    password: "",
    confirmpassword: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(logIn(data));
  };

  return (
    <div className="Signup">
      <div className="card">
        <div className="image">
          <p>Welcome Back!</p>
        </div>

        <form onSubmit={handleSubmit}>
          <h3>Log In </h3>

          <TextInput
            mt="sm"
            label="User Name"
            placeholder="User Name"
            name="username"
            onChange={handleChange}
            value={data.username}
          />

          <PasswordInput
            label="Password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
          />

          <div className="dont">
            <span style={{ fontSize: "12px", cursor: "pointer" }}>
              
                Don't have an account?
            </span>
            
          </div>

          <Button variant="contained" type="submit" mt="sm">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
}
