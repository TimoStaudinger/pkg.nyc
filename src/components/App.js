import React from "react";
import { HMR } from "@pwa/preset-react";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import Packages from "./Packages";
import LoginForm from "./LoginForm";
import Message from "./Message";
import Spinner from "./Spinner";

import style from "./App.css";
import Toolbar from "./Toolbar";
import ToolbarItem from "./ToolbarItem";

const OK = 200;
const UNAUTHORIZED = 401;

const ERROR_MESSAGE = "Oops, something went wrong. Please try again later! 🤕";

const getStoredToken = () => localStorage.getItem("token");
const setStoredToken = token =>
  token === null
    ? localStorage.removeItem("token")
    : localStorage.setItem("token", token);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.fetchPackages = this.fetchPackages.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

    this.state = {
      packages: null,
      token: getStoredToken(),
      error: null,
      loginError: false,
      loading: false
    };
  }

  componentDidMount() {
    if (this.state.token) {
      this.fetchPackages();
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.token && this.state.token !== prevState.token) {
      this.fetchPackages();
    }
  }

  async fetchPackages() {
    try {
      this.setState({ loading: true });

      const { token } = this.state;

      const response = await fetch("/pkg", {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.status === UNAUTHORIZED) {
        this.logout();
        this.setState({ loading: false });
      } else if (response.status === OK) {
        const packages = await response.json();
        this.setState({ packages, loading: false });
      } else {
        this.setState({ error: ERROR_MESSAGE, loading: false });
      }
    } catch (err) {
      this.setState({ error: ERROR_MESSAGE, loading: false });
      console.error(err);
      return false;
    }
  }

  logout() {
    this.setState({ token: null });
    setStoredToken(null);
  }

  async login(username, password) {
    try {
      this.setState({ loginError: false, token: null, loading: true });
      setStoredToken(null);

      const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({ username, password })
      });

      if (response.status === UNAUTHORIZED) {
        this.setState({ loginError: true, loading: false });
      } else if (response.status === OK) {
        const token = await response.text();

        this.setState({ token });
        setStoredToken(token);
      } else {
        this.setState({ error: ERROR_MESSAGE, loading: false });
      }
    } catch (err) {
      this.setState({ error: ERROR_MESSAGE, loading: false });
      console.error(err);
      return false;
    }
  }

  render() {
    return (
      <div className={style.app}>
        {this.state.error ? (
          <Message text={this.state.error} />
        ) : this.state.loading ? (
          <Spinner />
        ) : this.state.token === null ? (
          <LoginForm onSubmit={this.login} hasError={this.state.loginError} />
        ) : (
          <Packages packages={this.state.packages} />
        )}

        <Toolbar>
          {this.state.pin !== null && (
            <ToolbarItem
              title="Sign off"
              icon={faSignOutAlt}
              onClick={this.logout}
            />
          )}
        </Toolbar>
      </div>
    );
  }
}

export default HMR(App, module);
