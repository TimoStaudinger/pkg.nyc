import React from "react";

import style from "./PinPad.css";

class PinPad extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.inputRef = React.createRef();

    this.state = { value: "" };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.hasError !== this.props.hasError && this.props.hasError) {
      this.setState({ value: "" });

      if (this.inputRef.current) this.inputRef.current.focus();
    }
  }

  handleChange(e) {
    const { value } = e.target;

    if (/^\d{0,4}$/.test(value)) this.setState({ value });

    if (value.length === 4) this.props.onSubmit(value);
  }

  render() {
    return (
      <div
        className={`${style.container} ${
          this.props.hasError ? "animated shake" : ""
        }`}
      >
        <p className={style.title}>PIN</p>
        <input
          className={style.input}
          type="number"
          value={this.state.value}
          onChange={this.handleChange}
          disabled={this.props.loading}
          autoFocus
          ref={this.inputRef}
        />
      </div>
    );
  }
}

export default PinPad;
