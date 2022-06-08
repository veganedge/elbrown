import React from "react";
import { Link } from "react-router-dom";
import styles from "./WebsiteCard.module.css";

function WebsiteCard({ websiteName, imageAlt, imageSrc, path }) {
  return (
    <div className={styles.webcardContainer}>
      <Link to={path}>
        <h2 className={styles.webcardTitle}>{websiteName}</h2>
        <img
          className={styles.webcardImage}
          alt={imageAlt}
          src={imageSrc}
        ></img>
      </Link>
    </div>
  );
}

export default WebsiteCard;
