import React from "react";

import style from "./Card.css";

const Card = ({ className, centered = false, children }) => (
  <div
    className={`${style.card} ${centered ? style.centered : ""} ${className ||
      ""}`}
  >
    {children}
  </div>
);

export default Card;
