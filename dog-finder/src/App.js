import "./App.css";
import Routes from "./Routes";
import NavBar from "./NavBar";

const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: "./images/whiskey.jpg",
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!",
    ],
  },
  {
    name: "Duke",
    age: 3,
    src: "src/images/duke.jpg",
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs.",
    ],
  },
  {
    name: "Perry",
    age: 4,
    src: "./images/perry.jpg",
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain.",
    ],
  },
  {
    name: "Tubby",
    age: 4,
    src: "./images/tubby.jpg",
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore.",
    ],
  },
];

App.defaultProps = { dogs };

function App({ dogs }) {
  return (
    <div className="App">
      <NavBar dogs={dogs} />
      <div>
        <Routes dogs={dogs} />
      </div>
    </div>
  );
}

export default App;
