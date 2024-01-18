import React from "react";

function Banner({ status, guesses, answer }) {
  const happy = (
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>{guesses > 1 ? ` ${guesses} guesses` : " 1 guess"}</strong>.
    </p>
  );
  const sad = (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );
  return (
    <div className={`${status} banner`}>{status === "happy" ? happy : sad}</div>
  );
}

export default Banner;
