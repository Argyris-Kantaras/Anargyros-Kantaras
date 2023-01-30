import styles from "./SkillsCard.module.css";

function SkillsCard(props) {
  return <div className={styles.skillsCard}>{props.children}</div>;
}

export default SkillsCard;
