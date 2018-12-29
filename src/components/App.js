import React from "react";
import { HMR } from "@pwa/preset-react";

import Packages from "@components/Packages";
import PinPad from "@components/PinPad";
import ErrorMessage from "@components/ErrorMessage";

import style from "./App.css";
import delay from "delay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.fetchPackages = this.fetchPackages.bind(this);
    this.handlePINSubmit = this.handlePINSubmit.bind(this);

    this.state = {
      packages: null,
      pin: null,
      error: null,
      pinError: false,
      loading: false
    };
  }

  componentDidMount() {
    if (this.state.pin) this.fetchPackages(this.state.pin);
  }

  async fetchPackages(pin) {
    try {
      this.setState({ loading: true });

      const response = await fetch(`/pkg.js?pin=${pin}`);

      if (response.status === 401) {
        // wrong PIN

        this.setState({ pin: null });
        return false;
      } else if (response.status >= 400) {
        // Some other error

        this.setState({ error: "Oops, something went wrong." });
        return false;
      }

      const packages = await response.json();

      this.setState({
        packages,
        //   packages: [
        //     {
        //       date: " 12/28/18 ",
        //       carrier: "Lasership",
        //       text: "1 pkg - LX33558440"
        //     },
        //     {
        //       date: " 12/28/18 ",
        //       carrier: "USPS",
        //       text: "1 pkg - LX33558440"
        //     },
        //     {
        //       date: " 12/28/18 ",
        //       carrier: "UPS",
        //       text: "1 pkg - LX33558440"
        //     }
        //   ]
        loading: false
      });
      return true;
    } catch (err) {
      this.setState({ error: "Oops, something went wrong.", loading: false });
      return false;
    }
  }

  async handlePINSubmit(pin) {
    this.setState({ pinError: false });

    if (await this.fetchPackages(pin)) {
      this.setState({ pin });
    } else {
      this.setState({ pinError: true });
    }
  }

  render() {
    return (
      <div className={style.app}>
        {this.state.error ? (
          <ErrorMessage text={this.state.error} />
        ) : this.state.pin === null ? (
          <PinPad
            onSubmit={this.handlePINSubmit}
            hasError={this.state.pinError}
            loading={this.state.loading}
          />
        ) : (
          <Packages packages={this.state.packages} />
        )}
      </div>
    );
  }
}

export default HMR(App, module);
