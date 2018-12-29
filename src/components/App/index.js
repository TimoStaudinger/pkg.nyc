import React from "react";
import { HMR } from "@pwa/preset-react";

import Packages from "@components/Packages";

import style from "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      packages: null
    };
  }

  componentDidMount() {
    this.fetchPackages();
  }

  async fetchPackages() {
    const response = await fetch("/pkg.js");
    const packages = await response.json();

    this.setState({
      packages
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
    });
  }

  render() {
    return (
      <div className={style.app}>
        <Packages packages={this.state.packages} />
      </div>
    );
  }
}

export default HMR(App, module);
