import styles from "./DesignBar.module.css";
import designLogo from "../../icons/design-logo.png";

function DesignBar() {
  return (
    <div className={styles.designSkills}>
      <img className={styles.smallLogo} src={designLogo} />
      <h4>Design</h4>
      <span>
        I do not consider myself a great designer but still trying my best.
      </span>
      <div className={styles.languages}>
        <span>Tools I use:</span>
        <ul>
          <li>figma</li>
          <li>photoshop</li>
        </ul>
      </div>
    </div>
  );
}

export default DesignBar;
