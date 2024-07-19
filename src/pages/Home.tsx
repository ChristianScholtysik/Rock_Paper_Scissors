import { useState } from "react";
import "./Home.css";
import Header from "../components/Header";

const Home = () => {
  const cpuWeaponArray = ["Rock", "Paper", "Scissors"];

  function getRandomWeapon(array: string[]): string {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  const [dark, setDark] = useState<boolean>(false);

  const [weapon, setWeapon] = useState<string>("");
  const [cpuWeapon, setCpuWeapon] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const [gamesPlayed, setGamesPlayed] = useState<number>(0);
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);

  const getResult = (humanWeapon: string, cpuWeapon: string): string => {
    if (humanWeapon === cpuWeapon) return "drawn!";
    else if (
      (humanWeapon === "Rock" && cpuWeapon === "Scissors") ||
      (humanWeapon === "Paper" && cpuWeapon === "Rock") ||
      (humanWeapon === "Scissors" && cpuWeapon === "Paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  };

  const handleClick = (weapon: string) => {
    setWeapon(weapon);
    const cpuChoice = getRandomWeapon(cpuWeaponArray);
    setCpuWeapon(cpuChoice);
    const gameResult = getResult(weapon, cpuChoice);
    setResult(gameResult);

    setGamesPlayed((game) => game + 1);
    if (gameResult === "You win!") {
      setPlayerScore((game) => game + 1);
    }

    if (gamesPlayed + 1 === 4) {
      if (playerScore > highScore) {
        setHighScore(playerScore);
      }
      setGamesPlayed(0);
      setPlayerScore(0);
    }
  };

  return (
    <main className={`${dark && "dark"}`}>
      <Header dark={dark} setDark={setDark} />
      <section className="home-wrapper">
        <h2>Choose your weapon</h2>
        <section className="score-wrapper">
          <div className="result-field">
            <p>You chose: {weapon}</p>
            <p>Computer chose: {cpuWeapon}</p>
            <p>Result: {result}</p>
          </div>
          <div className="score-table">
            <h3>Game Statistics</h3>

            <table>
              <thead>
                <tr>
                  <th>Games Played</th>
                  <th>Current Score</th>
                  <th>High Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{gamesPlayed}</td>
                  <td>{playerScore}</td>
                  <td>{highScore}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <div className="choose-field" id="choose-field">
          <button onClick={() => handleClick("Rock")} value="Rock">
            👊
          </button>
          <button
            onClick={() => handleClick("Paper")}
            value="Paper"
            id="choose-field">
            🤚
          </button>
          <button onClick={() => handleClick("Scissors")} value="Scissors">
            ✌️
          </button>
        </div>

        <p className="gamesPlayed">You played {gamesPlayed} games out of 3!</p>
      </section>
    </main>
  );
};

export default Home;
