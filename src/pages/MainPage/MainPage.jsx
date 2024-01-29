import tracksList from "../../assets/tracksList";
import style from "./mainPage.module.scss";
import Track from "../../cmponents/Track/Track";

const MainPage = () => { 
  return (
    <div className={style.search}>
         <>surask</>
      <div className={style.list}>
        {tracksList.map((track) => (
         <Track key={track.id}{...track}/>
       
        ))}
      </div>
    </div>
  );
};

export default MainPage;