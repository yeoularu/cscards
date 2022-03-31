import { useState } from "react";

function Card() {
  let [hidden, setHidden] = useState(true);

  function setAnswerCSS() {
    return `${hidden ? "text-neutral-800" : "text-sky-400"}`;
  }

  return (
    <div
      className="flex justify-center items-center w-80 h-96 rounded-2xl bg-neutral-800 text-lg"
      onClick={() => setHidden(!hidden)}
    >
      <p className="w-64 rounded-full text-white text-center break-keep">
        스택은 제일 마지막으로 삽입된 원소가 제일 먼저 삭제되는{" "}
        <span className={setAnswerCSS()}>후입선출</span> 자료구조이다.
      </p>
    </div>
  );
}

export default Card;
