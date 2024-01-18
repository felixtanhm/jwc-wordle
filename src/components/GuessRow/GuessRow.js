import React from "react";
import { range } from "../../utils";

function GuessRow({ guess }) {
  if (guess) {
    return (
      <p className="guess">
        {guess.map((obj, index) => {
          return (
            <span key={index} className={`${obj.status} cell`}>
              {obj.letter}
            </span>
          );
        })}
      </p>
    );
  } else {
    return (
      <p className="guess">
        {range(5).map((item) => {
          return <span key={item} className="cell"></span>;
        })}
      </p>
    );
  }
}

export default GuessRow;
