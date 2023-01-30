import MyWork from "../../Components/My work/MyWork";
import styles from "./Homepage.module.css";
import { useEffect, useRef } from "react";
import Footer from "../../Components/Footer/Footer";
import logo from "../../icons/logo2.png";
import Intro from "../../Components/Intro/Intro";
import SkillsBar from "../../Components/Skills bar/SkillsBar";
import DesignBar from "../../Components/Design Bar/DesignBar";
import SkillsCard from "../../Components/Skills card/SkillsCard";

function Homepage() {
  const testRef = useRef();

  useEffect(() => {});
  return (
    <div className={styles.homepage}>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} />
        <div
          onClick={() =>
            window.open("https://www.facebook.com/argyris.kantaras.3/")
          }
          className={styles.wavingHand}
        >
          Say Hi
        </div>
      </header>
      <Intro />
      <div className={styles.skillsSection}>
        <SkillsCard>
          <SkillsBar />
          <DesignBar />
        </SkillsCard>
      </div>
      <MyWork />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
