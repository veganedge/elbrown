import styles from "./WebsiteHeader.module.css";

function WebsiteHeader({ logoAlt, logoSrc, starlingAlt, starlingSrc }) {
  return (
    <header>
      <div className={styles.headerImageContainer}>
        <img alt={logoAlt} src={logoSrc}></img>
        <span className={styles.headerImageSpan}></span>
        <img
          className={styles.headerAnimatedImage}
          alt={starlingAlt}
          src={starlingSrc}
        ></img>
      </div>
      <nav className={styles.headerNav}>
        <ul className={styles.headerNavList}>
          <li className={styles.headerNavListItem}>About</li>
          <li className={styles.headerNavListItem}>Books</li>
          <li className={styles.headerNavListItem}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default WebsiteHeader;
