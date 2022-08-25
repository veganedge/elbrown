// React Router Imports
import { NavLink } from "react-router-dom";
// Style Imports
import styles from "./WebsiteHeader.module.css";


function WebsiteHeader({ logoAlt, logoSrc, starlingAlt, starlingSrc }) {

  let activeClassName = "activeLink";

  return (
    <header>
      <div className={styles.headerImageContainer}>
        {/* logo */}
        <img alt={logoAlt} src={logoSrc} />
        <span className={styles.headerImageSpan}></span>
        {/* birds animated image */}
        <img
          className={styles.headerAnimatedImage}
          alt={starlingAlt}
          src={starlingSrc}
        />
      </div>
      
      <nav className={styles.headerNav}>
        <ul className={styles.headerNavList}>
          <li className={styles.headerNavListItem}>
            {/* need to get active link styled for users */}
            <NavLink to="/elstarling/" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>ABOUT</NavLink>
          </li>
          <li className={styles.headerNavListItem}>
            <NavLink to="/elstarling/books">BOOKS</NavLink>
          </li>
          <li className={styles.headerNavListItem}>
            <NavLink to="">CONTACT</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default WebsiteHeader;
