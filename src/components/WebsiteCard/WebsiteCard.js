// React Imports
import React from "react";
// React Router Imports
import { Link } from "react-router-dom";
// Styles Imports
import styles from "./WebsiteCard.module.css";


// called from intropage.js
function WebsiteCard({ websiteName, imageAlt, imageSrc, path }) {
  return (
    <div className={styles.webcardContainer}>
      <Link to={path}>
        <h2 className={styles.webcardTitle}>{websiteName}</h2>
        <img className={styles.webcardImage} alt={imageAlt} src={imageSrc} />
      </Link>
    </div>
  );
}

export default WebsiteCard;
