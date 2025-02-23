# Quiz Game

> **Note:** This project serves as **documentation** of our **learning journey** and is not intended for ongoing use or maintenance.
> The repository is kept public to be viewed as part of our portfolios.

<br>

This project contains a quiz game developed using a public quiz API and Philips Hue's API. The game offers an interactive quiz experience where users answer 10 questions sequentially. The purpose of this project is to demonstrate API integration with interactive hardware.

## Overview

- **Quiz Mechanics:**  
  The game presents 10 questions one at a time. After each answer is submitted, a Philips Hue lamp provides immediate visual feedback—lighting green for a correct response or red for an incorrect one. While a question is active, the lamp displays blue, indicating that the answer is being processed.

- **Scoring & Replay:**  
  Upon completion of all questions, a final screen displays the total number of correct answers. Users are then given the option to play again.

## Technical Details

- **Quiz API Integration:**  
  The quiz questions are sourced from [Open Trivia Database](https://opentdb.com/). The API uses a token mechanism to ensure that the same question is not repeated within a single round. This token is automatically reset after each game, allowing previously seen questions to reappear in subsequent rounds.

- **Philips Hue API Integration:**  
  The game leverages the Philips Hue API to control a Hue lamp. Conditional statements change the lamp's color based on the user's response:
  - **Green:** When the user answers correctly.
  - **Red:** When the user answers incorrectly.
  - **Blue:** While the user is actively answering a question.

## Reference

- **Quiz API:**  
  [Open Trivia Database (opentdb.com)](https://opentdb.com/)
