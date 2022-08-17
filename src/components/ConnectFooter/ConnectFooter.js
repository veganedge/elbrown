// Style Imports
import styles from "./ConnectFooter.module.css";
// Social Icons Imports
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


function ConnectFooter({ twitHref, instaHref, emailHref }) {
  return (
    <footer className={styles.connectFooterContainer}>

      <p>Connect:</p>

      {/* social icons + links */}
      <div className={styles.connectFooterIconsContainer}>
        <a
          href={instaHref}
          target="_blank"
          rel="noreferrer"
          className={styles.connectFooterIcons}
        >
          <FaInstagram />
        </a>
        <a
          href={twitHref}
          target="_blank"
          rel="noreferrer"
          className={styles.connectFooterIcons}
        >
          <FaTwitter />
        </a>
        <a
          href={emailHref}
          target="_blank"
          rel="noreferrer"
          className={`${styles.connectFooterIcons} ${styles.connectFooterIconEmail}`}
        >
          <MdOutlineEmail />
        </a>
      </div>

    </footer>
  );
}

export default ConnectFooter;
