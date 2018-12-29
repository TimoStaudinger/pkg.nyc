import React from "react";

import style from "./Spinner.css";
import Card from "./Card";

const Spinner = () => (
  <Card centered>
    <div className={style.spinner}>
      <div className={style.pulsar} />
      <div className={style.pulsar} />
    </div>
  </Card>
);

export default Spinner;
