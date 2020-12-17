import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    accept: false,
    message: "",

    errors: {
      username: false,
      email: false,
      password: false,
      accept: false,
    },
  };

  messages = {
    username_incorrect:
      "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji!",
    email_incorrect: "Brak @ w emailu!",
    password_incorrect: "Hasło musi mieć 8 znaków!",
    accept_incorrect: "Nie potwierdzona zgoda!",
  };

  handleChange = (e) => {
    const name = e.target.name; //pobiera name z odpowiedniego elementu/inputa formularza
    const type = e.target.type;

    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;

      this.setState({
        [name]: value, // [name] - to nazwa elementu z formularza oraz jednocześnie nazwa ze stanu
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;

      this.setState({
        [name]: checked,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const validation = this.formValidation();

    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        password: "",
        accept: false,
        message: "Formularz został wysłany!",

        errors: {
          username: false,
          email: false,
          password: false,
          accept: false,
        },
      });
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          password: !validation.password,
          accept: !validation.accept,
        },
      });
    }
  };

  formValidation = () => {
    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;

    if (
      this.state.username.length > 10 &&
      this.state.username.indexOf(" ") === -1
    ) {
      username = true;
    }

    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }

    if (this.state.password.length === 8) {
      password = true;
    }

    if (this.state.accept) {
      accept = true;
    }

    if (username && email && password && accept) {
      correct = true;
    }

    return {
      username,
      email,
      password,
      correct,
      accept,
    };
  };

  componentDidUpdate() {
    if (this.state.message !== "") {
      setTimeout(() => this.setState({ message: "" }), 3000);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="app">
          <form onSubmit={this.handleSubmit} noValidate>
            {/**noValidate - wyłącza domyślna validacje html5 */}
            <label htmlFor="user">
              Twoje imię:
              <input
                type="text"
                id="user"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </label>
            {this.state.errors.username && (
              <span>{this.messages.username_incorrect}</span>
            )}
            <label htmlFor="email">
              Twoje email:
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            {this.state.errors.email && (
              <span>{this.messages.email_incorrect}</span>
            )}
            <label htmlFor="password">
              Twoje hasło:
              <input
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
            {this.state.errors.password && (
              <span>{this.messages.password_incorrect}</span>
            )}
            <label htmlFor="accept">
              <input
                type="checkbox"
                id="accept"
                name="accept"
                checked={this.state.accept}
                onChange={this.handleChange}
              />
              Wyrażam zgodę
            </label>
            {this.state.errors.accept && (
              <span>{this.messages.accept_incorrect}</span>
            )}
            <button>Zapisz się</button>
          </form>
        </div>
        <div className="message">
          {this.state.message && <h3>{this.state.message}</h3>}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
