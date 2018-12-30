import React from "react";
import { HMR } from "@pwa/preset-react";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import Packages from "./Packages";
import PinPad from "./PinPad";
import Message from "./Message";
import Spinner from "./Spinner";

import style from "./App.css";
import Toolbar from "./Toolbar";
import ToolbarItem from "./ToolbarItem";
import delay from "delay";

const getStoredPIN = () => localStorage.getItem("pin");
const setStoredPIN = pin =>
  pin === null
    ? localStorage.removeItem("pin")
    : localStorage.setItem("pin", pin);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.fetchPackages = this.fetchPackages.bind(this);
    this.handlePINSubmit = this.handlePINSubmit.bind(this);
    this.signOff = this.signOff.bind(this);

    this.state = {
      packages: null,
      pin: getStoredPIN(),
      error: null,
      pinError: false,
      loading: false
    };
  }

  async componentDidMount() {
    if (this.state.pin) {
      if (!(await this.fetchPackages(this.state.pin))) {
        setStoredPIN(null);
      }
    }
  }

  async fetchPackages(pin) {
    try {
      this.setState({ loading: true });

      const response = await fetch(`/pkg?pin=${pin}`);

      // await delay(1000);
      // const response = { status: 200 };

      // if (pin !== "1238" || response.status === 401) {
      if (response.status === 401) {
        // wrong PIN

        this.setState({ pin: null, loading: false });
        return false;
      } else if (response.status >= 400) {
        // Some other error

        this.setState({
          error: "Oops, something went wrong. Please try again later! 🤕",
          loading: false
        });
        return false;
      } else {
        const packages = await response.json();

        this.setState({
          packages,
          // packages: [
          //   {
          //     date: " 12/28/18 ",
          //     carrier: "Lasership",
          //     text: "1 pkg - LX33558440"
          //   },
          //   {
          //     date: " 12/28/18 ",
          //     carrier: "USPS",
          //     text: "1 pkg - LX33558440"
          //   },
          //   {
          //     date: " 12/28/18 ",
          //     carrier: "UPS",
          //     text: "1 pkg - LX33558440"
          //   }
          // ],
          loading: false
        });
        return true;
      }
    } catch (err) {
      this.setState({
        error: "Oops, something went wrong. Please try again later! 🤕",
        loading: false
      });
      return false;
    }
  }

  signOff() {
    setStoredPIN(null);
    this.setState({ pin: null });
  }

  async handlePINSubmit(pin) {
    this.setState({ pinError: false });

    if (await this.fetchPackages(pin)) {
      this.setState({ pin });
      setStoredPIN(pin);
    } else {
      this.setState({ pinError: true });
      setStoredPIN(null);
    }
  }

  render() {
    return (
      <div className={style.app}>
        {this.state.error ? (
          <Message text={this.state.error} />
        ) : this.state.loading ? (
          <Spinner />
        ) : this.state.pin === null ? (
          <PinPad
            onSubmit={this.handlePINSubmit}
            hasError={this.state.pinError}
          />
        ) : (
          <Packages packages={this.state.packages} />
        )}

        <Toolbar>
          {this.state.pin !== null && (
            <ToolbarItem
              title="Sign off"
              icon={faSignOutAlt}
              onClick={this.signOff}
            />
          )}
        </Toolbar>
      </div>
    );
  }
}

export default HMR(App, module);
