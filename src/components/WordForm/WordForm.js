import React from "react";

function WordForm({ status, updateGuessList }) {
  const [formValue, setFormValue] = React.useState("");

  function handleChange(e) {
    setFormValue(e.target.value.toUpperCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formValue.length !== 5) return;
    updateGuessList(formValue);
    setFormValue("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess: </label>
      <input
        id="guess-input"
        type="text"
        disabled={status !== "running"}
        maxLength="5"
        minLength="5"
        value={formValue}
        onChange={handleChange}
      ></input>
    </form>
  );
}

export default WordForm;
