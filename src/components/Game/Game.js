import React from "react";
import WordForm from "../WordForm/";
import GuessDisplay from "../GuessDisplay/";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function updateGuessList(guess) {
    const validatedGuess = checkGuess(guess, answer);
    const nextGuessList = [...guessList];
    nextGuessList.push(validatedGuess);
    setGuessList(nextGuessList);
  }

  return (
    <>
      <GuessDisplay guessList={guessList}></GuessDisplay>
      <WordForm updateGuessList={updateGuessList}></WordForm>
    </>
  );
}

export default Game;
