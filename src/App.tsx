import { useState } from "react";
import "./App.css";
import { Greeting } from "./components/Greeting";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greeting name="Seunghwan" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
