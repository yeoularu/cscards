import { useState, useEffect } from "react";
import data from "./data.js";

function Card(props) {
  let [hidden, setHidden] = useState(true);

  const text = data[props.id].text;
  const start = text.indexOf("**");
  const end = text.indexOf("**", start + 2);
  const answer = text.substring(start + 2, end);

  const cardCSS = `flex justify-center items-center w-80 h-96 rounded-2xl bg-neutral-800 text-lg ${
    data[props.id].hidden ? "border border-white" : null
  }`;
  const answerCSS = `${
    data[props.id].hidden ? "text-sky-400" : "text-neutral-800"
  }`;

  return (
    <div
      className={cardCSS}
      onClick={() => {
        setHidden(!hidden);
        data[props.id].hidden = hidden;
      }}
    >
      <p className="w-64 rounded-full text-white text-center break-keep">
        {text.substring(0, start)}
        <span className={answerCSS}>{answer}</span>
        {text.substring(end + 2)}
      </p>
    </div>
  );
}

export default Card;
