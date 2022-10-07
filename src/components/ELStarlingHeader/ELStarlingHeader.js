// React Router Imports
import { NavLink } from "react-router-dom";
// Style Imports
import styles from "./ELStarlingHeader.module.css";

function ELStarlingHeader({ logoAlt, logoSrc, starlingAlt, starlingSrc }) {
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
            <NavLink
              to="/elstarling/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#B7AC44" : "",
                };
              }}
            >
              ABOUT
            </NavLink>
          </li>
          <li className={styles.headerNavListItem}>
            <NavLink
              to="/elstarling/books"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#B7AC44" : "",
                };
              }}
            >
              BOOKS
            </NavLink>
          </li>
          <li className={styles.headerNavListItem}>
            <NavLink
              to="/elstarling/contact"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#B7AC44" : "",
                };
              }}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ELStarlingHeader;
