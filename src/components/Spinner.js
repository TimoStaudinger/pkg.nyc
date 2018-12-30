import React from "react";
import Card from "./Card";
import octopus from "../assets/octopus.png";
import style from "./Spinner.css";

const Spinner = () => (
  <Card centered>
    <div className={style.spinner}>
      <img className={style.icon} src={octopus} />
    </div>
  </Card>
);

export default Spinner;
