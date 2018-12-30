import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./ToolbarItem.css";

const ToolbarItem = ({ title, icon, onClick }) => (
  <span title={title} onClick={onClick} className={style.button}>
    <FontAwesomeIcon icon={icon} />
  </span>
);

export default ToolbarItem;
