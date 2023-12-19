import WorkFrame from "../Single Site Frame/WorkFrame";
import styles from "./MyWork.module.css";
import maphotAppImg from "../../icons/mapshot.png";
import weatherAppImg from "../../icons/weather-app.png";
import currencyAppImg from "../../icons/currency-convert.png";
import recipesAppImg from "../../icons/recipes-app.png";
import eCommerce from "../../icons/e-commerce.png";
import moviesShelfImg from "../../icons/movies-shelf.png";

function MyWork() {
  return (
    <div>
      <h3>Recent Work</h3>
      <div className={styles.myWork}>
        <WorkFrame
          link="https://movies-shelf.netlify.app/"
          imgSrc={moviesShelfImg}
          title="Movies Shelf ('like IMDB')"
        />
        <WorkFrame
          link="https://power-of-sun.netlify.app/"
          imgSrc={eCommerce}
          title="E-commerce"
        />
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
