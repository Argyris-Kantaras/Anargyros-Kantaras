import styles from "./Intro.module.css";
import personIcon from "../../icons/person.png";
import programmingIcon from "../../icons/programming-icon.png";

function Intro() {
  return (
    <div className={styles.intro}>
      <h1 className={styles.profession}>Full Stack Developer</h1>
      <div className={styles.bannerMessage}>What I do is what I love!</div>
      <img className={styles.personIcon} src={personIcon} />
      <img className={styles.programmingIcon} src={programmingIcon} />
      <div className={styles.introduction}>
        <h2>Hello, I’m Anargyros. Nice to meet you.</h2>
        <div className={styles.aboutMe}>
          Growing up, I always had some kind of love towards electronics until I
          learned about programming. I started learning some basics and since
          then, I got passionate and got deep into it. I'm quietly confident,
          naturally curious and perpetually working on improving my skills and
          knowledge, as well as my problem solving ability. I already have some
          great skills but as it is well known in programming we never know
          everything.
        </div>
      </div>
    </div>
  );
}

export default Intro;
