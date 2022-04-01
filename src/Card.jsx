import { useState } from "react";
import data from "./data.js";

function Card() {
  let [hidden, setHidden] = useState(true);

  const text = data[0].text;
  const start = text.indexOf("**");
  const end = text.indexOf("**", start + 2);
  const answer = text.substring(start + 2, end);

  const cardCSS = `flex justify-center items-center w-80 h-96 rounded-2xl bg-neutral-800 text-lg ${
    hidden ? null : "border border-white"
  }`;
  const answerCSS = `${hidden ? "text-neutral-800" : "text-sky-400"}`;

  return (
    <div className={cardCSS} onClick={() => setHidden(!hidden)}>
      <p className="w-64 rounded-full text-white text-center break-keep">
        {text.substring(0, start)}
        <span className={answerCSS}>{answer}</span>
        {text.substring(end + 2)}
      </p>
    </div>
  );
}

function Text() {}

export default Card;
