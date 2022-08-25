// Style Imports
import styles from "./ELStarlingBooks.module.css";
// Component Imports
import ELStarlingHeader from "../../components/ELStarlingHeader/ELStarlingHeader";
import ConnectFooter from "../../components/ConnectFooter/ConnectFooter";

const ELStarlingBooks = (props) => {

  const queryingTitle = "Roadside Daisies";

  const wipTitle = "Boundless";

  const sectionInfoPlaceholder = (
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla
    ut morbi. Convallis tellus id interdum velit laoreet id. Magna eget est
    lorem ipsum dolor. Tincidunt vitae semper quis lectus. Nisl nunc mi ipsum
    faucibus vitae aliquet nec ullamcorper sit. Est lorem ipsum dolor sit
    amet. A condimentum vitae sapien pellentesque habitant morbi tristique.
    Adipiscing enim eu turpis egestas. Netus et malesuada fames ac turpis
    egestas. Sit amet facilisis magna etiam tempor orci eu lobortis. Faucibus
    purus in massa tempor nec feugiat nisl. Aliquet lectus proin nibh nisl.
    Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Commodo
    nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Magna fermentum
    iaculis eu non. Tristique magna sit amet purus gravida quis blandit turpis
    cursus. Vitae sapien pellentesque habitant morbi tristique senectus et.
    Amet nisl purus in mollis nunc sed.</p>
  )  ;
    
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
          <h1>QUERYING</h1>
          <div className={styles.bookContainer}>
            <img
              alt="Querying Inspiration"
              src="https://via.placeholder.com/350x350/f7f7f2/000000?text=inspiration photo"
            />
            <div className={styles.queryingInfoContainer}>
              <h2 className={styles.bookTitle}>{queryingTitle}</h2>
              <div>{sectionInfoPlaceholder}</div>
            </div>
          </div>
        </div>
        <div className={`${styles.sectionContainer} ${styles.wipBorder}`}>
          <h1>WORK IN PROGRESS</h1>
          <div className={styles.bookContainer}>
            <div className={styles.wipInfoContainer}>
              <h2 className={styles.bookTitle}>{wipTitle}</h2>
              <div>{sectionInfoPlaceholder}</div>
            </div>
            <div>
              <img
                alt="WIP Inspiration"
                src="https://via.placeholder.com/350x350/f7f7f2/000000?text=inspiration photo"
              />
            </div>
          </div>
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

export default ELStarlingBooks;
