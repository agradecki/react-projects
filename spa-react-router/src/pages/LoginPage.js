import React from "react";

const LoginPage = () => {
  return (
    <div>
      <label>
        Podaj login
        <input type="text" />
      </label>
      <br />
      <label>
        Podaj hasło
        <input type="text" />
      </label>
      <br />
      <button>Zaloguj</button>
    </div>
  );
};

export default LoginPage;
