import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "post",
      mode: "cors",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (response.ok) {
      navigate("/");
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    } else {
      alert("Wrong Credentials");
    }
  }

  return (
    <>
      <form className="form" onSubmit={login}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />

        <button>Login</button>
      </form>
    </>
  );
}
