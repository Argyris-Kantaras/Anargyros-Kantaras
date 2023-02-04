import WorkFrame from "../Single Site Frame/WorkFrame";
import styles from "./MyWork.module.css";
import maphotAppImg from "../../icons/mapshot.png";
import weatherAppImg from "../../icons/weather-app.png";
import currencyAppImg from "../../icons/currency-convert.png";
import recipesAppImg from "../../icons/recipes-app.png";

function MyWork() {
  return (
    <div>
      <h3>Recent Work</h3>
      <div className={styles.myWork}>
        <WorkFrame
          link="https://worldwide-weather-forecasts.netlify.app/"
          imgSrc={weatherAppImg}
          title="Worldwide weather"
        />
        <WorkFrame
          link="https://rec-ipes.netlify.app/"
          imgSrc={recipesAppImg}
          title="Rec...ipes"
        />

        <WorkFrame
          link="https://currency-app-convert.netlify.app/"
          imgSrc={currencyAppImg}
          title="Currency converter"
        />
      </div>
    </div>
  );
}
export default MyWork;
