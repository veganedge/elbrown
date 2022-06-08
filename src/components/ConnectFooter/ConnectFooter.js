import styles from "./ConnectFooter.module.css";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function ConnectFooter(props) {
  return (
    <footer className={styles.connectFooterContainer}>
      <p>Connect:</p>
      <div className={styles.connectFooterIconsContainer}>
        {/* Need to figure out how to pass these hrefs from other component - to make this one reusable */}
        <a
          href="https://www.instagram.com/e_l_starling/"
          target="_blank"
          rel="noreferrer"
          className={styles.connectFooterIcons}
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/E_l_Starling"
          target="_blank"
          rel="noreferrer"
          className={styles.connectFooterIcons}
        >
          <FaTwitter />
        </a>
        <a
          href="mailto:emilylstarling@gmail.com"
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
