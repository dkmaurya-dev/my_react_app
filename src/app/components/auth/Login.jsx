import React from "react";
import { ReactDOM } from "react";
export const Login = () => {
  return (
    <>
      <div style={{ flexDirection: "row" }}>
        <div className="left-side">
          <p>
            SQL is a standard language for storing, manipulating and retrieving
            data in databases. Our SQL tutorial will teach you how to use SQL
            in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix,
            Postgres, and other database systems. Deepak
          </p>
        </div>
        <div className="right-side">
          <h2>Login Form</h2>
          <form action="/action_page.php" method="post">
            <div className="imgcontainer">
              <img
                src="https://www.w3schools.com/howto/img_avatar2.png"
                alt="Avatar"
                className="avatar"
              />
            </div>

            <div className="container">
              <label for="uname">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
              />

              <label for="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />

              <button type="submit">Login</button>
              <label>
                <input type="checkbox" checked="checked" name="remember" />{" "}
                Remember me
              </label>
            </div>

            <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
              <button type="button" className="cancelbtn">
                Cancel
              </button>
              <span className="psw">
                Forgot <a href="#">password?</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
