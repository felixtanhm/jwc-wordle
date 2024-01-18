import React from "react";
import GuessRow from "../GuessRow";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessDisplay({ guessList }) {
  const guessRows = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {guessRows.map((row) => {
        return <GuessRow key={row} guess={guessList[row]}></GuessRow>;
      })}
    </div>
  );
}

export default GuessDisplay;
