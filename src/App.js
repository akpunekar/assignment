import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Assignment Tasks</h1>
      <p>
        <Link to="/assignment1">Assignment 1</Link>
      </p>
      <p>
        <Link to="/assignment2">Assignment 2</Link>
      </p>
    </div>
  );
}

export default App;
