import { useRef } from "react";
import styles from "./WorkFrame.module.css";

function WorkFrame(props) {
  const overlayRef = useRef();
  return (
    <div
      onMouseOver={() => {
        overlayRef.current.style.opacity = "10";
      }}
      onMouseLeave={() => (overlayRef.current.style.opacity = "0")}
      className={styles.workFrame}
    >
      <label className={styles.title}>{props.title}</label>
      <img src={props.imgSrc} title={props.title} />
      <div ref={overlayRef} className={styles.siteOverlay}>
        <div onClick={() => window.open(props.link)}>Visit site</div>
      </div>
    </div>
  );
}

export default WorkFrame;
