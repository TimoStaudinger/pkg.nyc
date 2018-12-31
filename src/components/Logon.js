import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import style from "./Logon.css";
import Card from "./Card";

const initialState = { username: "", password: "" };

class Logon extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    this.state = initialState;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.hasError !== this.props.hasError && this.props.hasError) {
      this.setState({ value: "" });

      if (this.inputRef.current) this.inputRef.current.focus();
    }
  }

  handleChangeUsername(e) {
    this;
    const { value } = e.target;
  }

  render() {
    return (
      <Card
        centered
        className={`${this.props.hasError ? "animated shake" : ""}`}
      >
        <p className={style.title}>Packages</p>
        <input
          placeholder="Email"
          type="email"
          className={style.input}
          value={this.state.username}
          onChange={e => this.setState({ username: e.target.value })}
          autoFocus
          ref={this.inputRef}
        />
        <input
          placeholder="Password"
          type="password"
          className={style.input}
          value={this.state.password}
          onChange={e => this.setState({ password: e.target.value })}
        />
        <button
          className={style.submit}
          onClick={() =>
            this.props.onSubmit(this.state.username, this.state.password)
          }
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </Card>
    );
  }
}

export default Logon;
