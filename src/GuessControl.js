import React, { Component, useState } from "react";
import Button from "./Button";

function GuessControl({onGuess}) {
  const [currentGuess, setCurrentGuess] = useState("");

  function handleInputChange(event) {
    setCurrentGuess(event.target.value);
  }

  function onSubmitGuess() {
    const guessAsNumber = parseInt(currentGuess);
    onGuess(guessAsNumber);
    setCurrentGuess("");
  } 

  return (
    <div>
      <input
        type="number"
        value={currentGuess} // Delete state?
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl;