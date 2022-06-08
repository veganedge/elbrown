import WebsiteHeader from "../../components/WebsiteHeader/WebsiteHeader";
import ConnectFooter from "../../components/ConnectFooter/ConnectFooter";
import styles from "./ELStarlingAbout.module.css";

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
      Amet nisl purus in mollis nunc sed. Commodo elit at imperdiet dui accumsan
      sit amet nulla. Cursus vitae congue mauris rhoncus. Sit amet volutpat
      consequat mauris nunc congue. Urna nunc id cursus metus. Eget mi proin sed
      libero enim sed faucibus. Id ornare arcu odio ut sem. Vel elit scelerisque
      mauris pellentesque pulvinar pellentesque habitant morbi tristique. Magna
      sit amet purus gravida quis blandit turpis cursus. At lectus urna duis
      convallis convallis.
    </p>
  );

  return (
    <>
      <WebsiteHeader
        logoAlt="E L Starling logo"
        logoSrc="https://via.placeholder.com/500x125/f7f7f2/000000?text=signature logo"
        starlingAlt="starling animation"
        starlingSrc="https://via.placeholder.com/300x125/f7f7f2/B7AC44?text=starling image"
      />
      <main className={styles.aboutAuthorContainer}>
        {/* Resize this for media queries */}
        <img
          alt="Author"
          src="https://via.placeholder.com/400x450/f7f7f2/000000?text=author photo"
        ></img>
        {/* Vertically align this div (aboutAuthorBioContainer) with img (CENTER IT) */}
        <div className={styles.aboutAuthorBioContainer}>
          <h2 className={styles.aboutAuthorBioName}>E L Starling</h2>
          <div>{authorBio}</div>
        </div>
      </main>
      {/* Pass this component the hrefs for the social icons - to make more reusable */}
      <ConnectFooter />
    </>
  );
}

export default ELStarlingAbout;
