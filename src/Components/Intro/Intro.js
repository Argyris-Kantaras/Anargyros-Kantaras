import styles from "./Intro.module.css";
import personIcon from "../../icons/person.png";
import programmingIcon from "../../icons/programming-icon.png";

function Intro() {
  return (
    <div className={styles.intro}>
      <h1 className={styles.profession}>Frontend Developer</h1>
      <div className={styles.bannerMessage}>What I do is what I love!</div>
      <img className={styles.personIcon} src={personIcon} />
      <img className={styles.programmingIcon} src={programmingIcon} />
      <div className={styles.introduction}>
        <h2>Hello, I’m Anargyros. Nice to meet you.</h2>
        <div className={styles.aboutMe}>
          Growing up, I had to pass through many jobs until I found out about
          programming. Since then, I got passionate and want to know more and
          more. I'm quietly confident, naturally curious, and perpetually
          working on improving my skills and knowledge, as well as my problem
          solving ability.
        </div>
      </div>
    </div>
  );
}

export default Intro;
