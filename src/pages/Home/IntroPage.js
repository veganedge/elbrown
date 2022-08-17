// Style Imports
import styles from "./IntroPage.module.css";
// Component Imports
import WebsiteCard from "../../components/WebsiteCard/WebsiteCard";


function IntroPage() {
  return (
    <>
      <header className={styles.intropageHeader}>
        <h2>elbrown.com</h2>
        <h2>all things emily brown</h2>
      </header>
      
      <main>
        <WebsiteCard
          websiteName="ELStarling.com"
          imageAlt="E L Starling logo"
          imageSrc="https://via.placeholder.com/600x150/1e1f21/3e4145?text=website image/logo"
          path="/elstarling/"
        />
        <WebsiteCard
          websiteName="ELBPapercutting.com"
          imageAlt="E L B Papercutting logo"
          imageSrc="https://via.placeholder.com/600x150/1e1f21/3e4145?text=website image/logo"
          path="/elbpapercutting/"
        />
        <WebsiteCard
          websiteName="Birdmafia.com"
          imageAlt="Birdmafia logo"
          imageSrc="https://via.placeholder.com/600x150/1e1f21/3e4145?text=website image/logo"
          path="/birdmafia/"
        />
      </main>
    </>
  );
}

export default IntroPage;
