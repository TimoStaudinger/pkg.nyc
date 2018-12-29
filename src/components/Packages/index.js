import React from "react";

import LasershipIcon from "@assets/lasership.png";
import USPSIcon from "@assets/usps.png";
import UPSIcon from "@assets/ups.png";

import style from "./index.css";

const getIconPath = carrier => {
  carrier = carrier.toLowerCase();

  if (carrier.includes("lasership")) return LasershipIcon;
  if (carrier.includes("usps")) return USPSIcon;
  if (carrier.includes("ups")) return UPSIcon;
};

const Packages = ({ packages }) => (
  <ul className={style.container}>
    {packages &&
      packages.map(pkg => (
        <li className={style.card}>
          <img className={style.carrierIcon} src={getIconPath(pkg.carrier)} />
          <p className={style.carrier}>{pkg.carrier}</p>
          <p className={style.date}>{pkg.date}</p>
          <p className={style.text}>{pkg.text}</p>
        </li>
      ))}
  </ul>
);

export default Packages;
