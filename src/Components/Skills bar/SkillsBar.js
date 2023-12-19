import styles from "./SkillsBar.module.css";
import smallLogo from "../../icons/small-logo.png";

function SkillsBar() {
  return (
    <div className={styles.frontSkills}>
      <img className={styles.smallLogo} src={smallLogo} />
      <h4>Frontend Skills</h4>
      <span className={styles.smallText}>
        Coding from scratch and bringing new ideas to the web is my thing.
      </span>
      <div className={styles.languages}>
        <span>Languages I "speak":</span>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Redux</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>Git</li>
          <li>Python(basics)</li>
          <li>PHP(basics)</li>
        </ul>
      </div>
    </div>
  );
}

export default SkillsBar;
