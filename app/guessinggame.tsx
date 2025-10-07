"use client";
import { Button } from "@/components/ui/button";
// Guessing Game
import React, { useCallback, useState } from "react";
import { set } from "react-hook-form";

// Predefined responses for incorrect guesses
const responses = [
  (guess: number) => `${guess} is not my number. Try again!`,
  (guess: number) => `Nope, ${guess} is not it. Guess again!`,
  (guess: number) => `Wrong! ${guess} isn't my number. Give it another shot!`,
  (guess: number) => `Not even close! ${guess} is not my number. Try again!`,
  (guess: number) => `Still no luck. ${guess} is not my number. Keep guessing!`,
];

// Define Components: note all usestates can be combined into one object
const GuessingGame: React.FC = () => {
  // State variables
  const [gameStarted, setGameStarted] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const [computerNumber, setComputerNumber] = useState<number>(0);
  const [playing, setPlaying] = useState(true);
  const gameOver = userInput === computerNumber.toString();

  // Start a new game conditions
  const startGame = () => {
    setGameStarted(true);
    setMessage("Guess a number between 1 and 10!");
    setComputerNumber(Math.floor(Math.random() * 11));
  };
  // End the game conditions
  const endGame = (message: string) => {
    setMessage(message);
    setGameStarted(false);
  };

  // Ask to play again
  const askToPlayAgain = (playAgain: boolean) => {
    // using react state "reactive" state which auto checks for changes
    if (playAgain) {
      setComputerNumber(Math.floor(Math.random() * 11));
      setMessage("Great! Give me a second to think ... ... ... ok, guess!");
    } else {
      endGame("Thanks for playing! See you next time!");
    }
  };

  // Handle user inputs - use "usecallback" if performance issues arise
  const handleGuess = useCallback(() => {
    if (userInput.toLowerCase() === "quit") {
      endGame("Game Terminated. Thanks for playing!");
    } else if (isNaN(Number(userInput))) {
      setMessage("This is not a number. Try again.");
    } else {
      let guess = parseInt(userInput);
      if (guess === computerNumber) {
        setMessage("Congrats! You guessed my number: ${computerNumber}!");
      } else {
        const randomResponse =
          responses[Math.floor(Math.random() * responses.length)];
        setMessage(randomResponse(guess)); // Random incorrect guess response
      }
    }
    setUserInput(""); // Clear input field
  }, [userInput, computerNumber]);
  return (
    <div className="guessing-game">
      {!gameStarted ? (
        <Button onClick={startGame}>Start Game</Button>
      ) : gameOver ? (
        <div>
          <Button onClick={() => askToPlayAgain(true)}>Play Again</Button>
          <Button onClick={() => askToPlayAgain(false)}>Quit</Button>
        </div>
      ) : (
        <div>
          <p>{message}</p>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter your guess or 'quit' to exit"
          />
          <Button onClick={handleGuess}>Submit Guess</Button>
        </div>
      )}
    </div>
  );
};

export default GuessingGame;
