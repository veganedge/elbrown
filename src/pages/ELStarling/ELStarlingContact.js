// Style Imports
import styles from "./ELStarlingContact.module.css";
// Component Imports
import ELStarlingHeader from "../../components/ELStarlingHeader/ELStarlingHeader";
import ConnectFooter from "../../components/ConnectFooter/ConnectFooter";

const ELStarlingContact = (props) => {
  return (
    <>
      <ELStarlingHeader
        logoAlt="E L Starling logo"
        logoSrc="https://via.placeholder.com/500x125/f7f7f2/000000?text=signature logo"
        starlingAlt="starling animation"
        starlingSrc="https://via.placeholder.com/300x125/f7f7f2/B7AC44?text=starling image"
      />

      {/* main content */}
      <div className={styles.content}>
        <div className={styles.sectionContainer}>
          <h1>COMING SOON</h1>
        </div>
      </div>

      <ConnectFooter
        twitHref="https://twitter.com/E_l_Starling"
        instaHref="https://www.instagram.com/e_l_starling/"
        emailHref="mailto:emilylstarling@gmail.com"
      />
    </>
  );
};

export default ELStarlingContact;
