import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-2xl  bg-red-300">Hello From TailWind</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p className="bg-red-600 font-extrabold text-5xl ">
          Edit <code>App.jsx</code> and save to test HMR updates. oye
        </p>
        <p>
          <p className="text-4xl bg-cyan-300 uppercase mt-24 align-baseline">
            HEllo
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs hai ye
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
