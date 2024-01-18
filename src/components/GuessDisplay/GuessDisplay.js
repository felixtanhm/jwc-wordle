import React from "react";

function GuessDisplay({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => {
        return (
          <p className="guess" key={guess}>
            {guess}
          </p>
        );
      })}
    </div>
  );
}

export default GuessDisplay;
