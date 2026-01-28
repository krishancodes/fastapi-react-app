import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  return (
    <div>
      <h1>React + FastAPI Full Stack App</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
