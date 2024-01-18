import React from "react";

function GuessRow({ guess }) {
  let strArr;
  guess ? (strArr = guess.split("")) : (strArr = ["", "", "", "", ""]);

  return (
    <p className="guess">
      {strArr.map((char, index) => {
        return (
          <span key={index} className="cell">
            {char}
          </span>
        );
      })}
    </p>
  );
}

export default GuessRow;
