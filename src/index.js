import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const gamesData = [
  {
    title: "Catan",
    players: "3-4",
    price: 45,
    photo: "images/catan.png",
    playtime: 90,
    soldOut: false,
  },
  {
    title: "Ticket to Ride",
    players: "2-5",
    price: 40,
    photo: "images/ticket_to_ride.png",
    playtime: 60,
    soldOut: false,
  },
  {
    title: "Gloomhaven",
    players: "1-4",
    price: 120,
    photo: "images/gloomhaven.png",
    playtime: 120,
    soldOut: true,
  },
  {
    title: "Carcassonne",
    players: "2-5",
    price: 35,
    photo: "images/Carcassonne.png",
    playtime: 45,
    soldOut: false,
  },
  {
    title: "Pandemic",
    players: "2-4",
    price: 50,
    photo: "images/pandemic.png",
    playtime: 60,
    soldOut: false,
  },
  {
    title: "Azul",
    players: "2-4",
    price: 40,
    photo: "images/Azul.png",
    playtime: 30,
    soldOut: false,
  },
  {
    title: "Root",
    players: "2-4",
    price: 70,
    photo: "images/root.png",
    playtime: 90,
    soldOut: true,
  },
  {
    title: "Wingspan",
    players: "1-5",
    price: 65,
    photo: "images/wingspan.png",
    playtime: 60,
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <GameList />
      <Footer />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Header() {
  return (
    <header>
      <h1>welcome to tabletop treasures</h1>
      <h2 className="subheading">
        We have the best games for the best gaming memories
      </h2>
    </header>
  );
}

function GameList() {
  const games = gamesData;
  const gamesLength = games.length;

  return gamesLength > 0 ? (
    <ul className="gamelist">
      {games.map((game) => (
        <Game gameObj={game} key={game.title} />
      ))}
    </ul>
  ) : (
    <p>Sorry, we currently don't have any games.</p>
  );
}

function Game({ gameObj }) {
  const players = gameObj.players;
  const playTime = gameObj.playtime;
  const price = gameObj.price;

  function alerting() {
    gameObj.soldOut
      ? alert("This Game Is Sold Out!")
      : alert(
          "Now you would be redirected to the product page! But that is a project for another day"
        );
  }

  return (
    <li
      className={gameObj.soldOut ? "game sold-out" : "game"}
      onClick={() => alerting()}
    >
      <img src={gameObj.photo} alt={gameObj.title} />
      <div className="game-detail-container">
        <h3>{gameObj.title}</h3>
        <DetailsList players={players} playTime={playTime} price={price} />
      </div>
    </li>
  );
}

function DetailsList({ players, playTime, price }) {
  return (
    <ul className="details">
      <li>
        <p>
          Players: <span>{players}</span>
        </p>
      </li>
      <li>
        <p>
          Duration: <span>{playTime} minutes</span>
        </p>
      </li>
      <li>
        <p>
          Price: <span>${price}</span>
        </p>
      </li>
    </ul>
  );
}

function Footer() {
  const phoneNumber = "012-345678";
  const openHour = 8;
  const closeHour = 18;
  const time = new Date().getHours();
  const isOpen = time >= openHour && time <= closeHour;
  return (
    <footer>
      <p>
        {isOpen
          ? `We are currently open! Come visit us until ${closeHour}:00. For questions please call ${phoneNumber}`
          : `We are currently closed! Please come visit us tomorrow from ${openHour}:00 until ${closeHour}:00. Thank You`}
      </p>
    </footer>
  );
}
