import React from "react";

function Login() {
  return (
    <div className="login-container">
      <div className="logo">
        <img src="https://dummyimage.com/40x40/00ffc6/fff&text=G" alt="logo" />
        <h1>GuruSkull</h1>
      </div>
      <h2>Log In</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />

        <div className="options">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
