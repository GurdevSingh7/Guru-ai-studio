import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [mode, setMode] = useState("chat");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [image, setImage] = useState(null);

  const handleClick = () => {
    if (!input) return;

    if (mode === "chat") {
      setOutput("Thinking...");
      setTimeout(() => {
        setOutput(
          `⚡ GURU AI:\n\n"${input}" ka answer ready hai.\n\nMade by Gurdev Singh 🚀`
        );
      }, 1000);
    } else {
      setImage("https://picsum.photos/800/500");
    }
  };

  return (
    <div className="app">
      <h1>GURU AI STUDIO</h1>

      <div>
        <button onClick={() => setMode("chat")}>Chat Bot</button>
        <button onClick={() => setMode("image")}>Image Studio</button>
      </div>

      <input
        placeholder="Ask or generate..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleClick}>Go</button>

      {mode === "chat" && <pre>{output}</pre>}

      {mode === "image" && image && <img src={image} />}
    </div>
  );
}
