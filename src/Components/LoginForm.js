import React from "react";

const LoginForm = () => {
  return (
    <form>
      <div>
        <label>Email</label>
        <input id="email" />
      </div>

      <div>
        <label>Password</label>
        <input id="password" />
      </div>
      <button id="submit">Submit</button>
    </form>
  );
};

export default LoginForm;