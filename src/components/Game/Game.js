import React from "react";
import WordForm from "../WordForm/";
import GuessDisplay from "../GuessDisplay/";
import Banner from "../Banner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [status, setStatus] = React.useState("running");

  function updateGuessList(guess) {
    const validatedGuess = checkGuess(guess, answer);
    const nextGuessList = [...guessList];
    nextGuessList.push(validatedGuess);
    setGuessList(nextGuessList);
    if (guess === answer) setStatus("happy");
    if (nextGuessList.length === 6 && guess !== answer) setStatus("sad");
  }

  return (
    <>
      <GuessDisplay guessList={guessList}></GuessDisplay>
      <WordForm status={status} updateGuessList={updateGuessList}></WordForm>
      {status !== "running" && (
        <Banner
          status={status}
          guesses={guessList.length}
          answer={answer}
        ></Banner>
      )}
    </>
  );
}

export default Game;
