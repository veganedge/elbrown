// Style Imports
import styles from "./ELStarlingAbout.module.css";
// Component Imports
import ELStarlingHeader from "../../components/ELStarlingHeader/ELStarlingHeader";
import ConnectFooter from "../../components/ConnectFooter/ConnectFooter";


function ELStarlingAbout(props) {
  const authorBio = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
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
      Amet nisl purus in mollis nunc sed. 
    </p>
  );

  return (
    <>
      <ELStarlingHeader
        logoAlt="E L Starling logo"
        logoSrc="https://via.placeholder.com/500x125/f7f7f2/000000?text=signature logo"
        starlingAlt="starling animation"
        starlingSrc="https://via.placeholder.com/300x125/f7f7f2/B7AC44?text=starling image"
      />
      
      <div className={styles.content}>
        <div className={styles.sectionContainer}>
          {/* Resize this for media queries */}
          <h1 className={styles.aboutAuthorBioName}>E L STARLING</h1>
          <div className={styles.aboutAuthorContainer}>
            <img
              alt="Author"
              src="https://via.placeholder.com/350x350/f7f7f2/000000?text=author photo"
            />
            <div className={styles.aboutAuthorBioContainer}>
              <div>{authorBio}</div>
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
}

export default ELStarlingAbout;
