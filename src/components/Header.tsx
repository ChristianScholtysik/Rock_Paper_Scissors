import Dark from "./Dark";
import "./Header.css";

interface HeaderProps {
  dark: boolean;

  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = (props) => {
  console.log(props);

  const toggleMode = () => {
    props.setDark((pizza) => !pizza);
  };
  return (
    <div className="header">
      <div className="toogleDarkMode" onClick={toggleMode}>
        <p className="dayNight para">
          {props.dark ? "Light" : "Dark"}
          <Dark />
        </p>
      </div>
      <h1>Rock </h1>
      <h1>Paper </h1>
      <h1>Scissors</h1>
      <a className="start-btn" href="#choose-field">
        Start
        <img
          src="/public/arrow_circle_down_70dp_E8EAED_FILL0_wght200_GRAD0_opsz48.svg"
          alt="Arrow down"
        />
      </a>
    </div>
  );
};

export default Header;
