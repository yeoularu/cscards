import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function Card(props) {
  const [localData, setLocalData] = useLocalStorage(`${props.data.id}`, {});

  const parsedText = parseText(props.data.text);

  function parseText(text) {
    const start = text.indexOf("**");
    const end = text.indexOf("**", start + 2);
    const answer = text.substring(start + 2, end);
    const beforeAnswer = text.substring(0, start);
    const afterAnswer = text.substring(end + 2);

    return {
      beforeAnswer,
      answer,
      afterAnswer,
    };
  }

  function handleOpen() {
    const copy = { ...localData };
    copy.open = !copy.open;
    setLocalData(copy);
  }

  return (
    <div
      className={`relative w-80 h-96 my-10 flex justify-center items-center rounded-2xl bg-neutral-800 text-lg ${
        localData.open ? "border border-white" : null
      }`}
      onClick={() => handleOpen()}
    >
      <span
        className={`absolute top-0 left-0 m-5 text-lg ${
          localData.open ? "text-sky-400" : "text-neutral-500"
        }`}
      >
        {props.data.id}
      </span>
      <p className="w-64 rounded-full text-white text-center break-keep">
        {parsedText.beforeAnswer}
        <span
          className={`${
            localData.open
              ? "text-sky-400"
              : "underline decoration-neutral-500 underline-offset-4 text-neutral-800"
          }`}
        >
          {parsedText.answer}
        </span>
        {parsedText.afterAnswer}
      </p>
    </div>
  );
}

export default Card;
