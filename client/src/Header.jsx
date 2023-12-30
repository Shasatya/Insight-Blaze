import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import "./styles/Header.css";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    })
      .then((response) => {
        response.json().then((userInfo) => {
          setUserInfo(userInfo);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setUserInfo]);

  function logout() {
    fetch("http://localhost:4000/logout", {
      method: "post",
      credentials: "include",
    });
    setUserInfo(null);
    navigate("/");
  }

  let username = userInfo?.username;
  return (
    <header>
      <Link to={"/"} className="logo">
        InsightBlaze
      </Link>

      <nav>
        {username && (
          <>
            <div className="logged-in">
              <div className="user-details">
                <p>Hello! {username}</p>

                <Link to="/create">
                  <p className="text-e">Create Post </p>
                </Link>

                <p className="text-e" onClick={logout}>
                  Logout
                </p>
              </div>
            </div>
          </>
        )}

        {!username && (
          <>
            <Link className="nav-links" to="/login">
              Login
            </Link>
            <Link className="nav-links" to="/register">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
