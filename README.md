# Secret Number Game

Project developed during the course **Programming Logic: Exploring Functions and Lists**, from **Alura**, with the goal of practicing the fundamentals of programming logic using **JavaScript**.  
The game consists of guessing a **secret number** randomly generated within a defined range, receiving hints whether the number is higher or lower after each attempt.

## What Was Learned in the Course

During the development of this project, the following concepts were covered:

- Fundamentals of programming logic  
- Declaration and use of variables and constants  
- Conditional structures (`if` / `else`)  
- Creation and use of functions  
- Array manipulation  
- Use of logical loops and validations  
- Generating random numbers with `Math.random()`  
- Tracking user attempts  
- DOM manipulation (`querySelector`, `innerHTML`)  
- User input validation (empty, invalid, or out-of-range values)  
- Code organization and reuse  
- Accessibility implementation with voice feedback using `responsiveVoice`

## How the Game Works

- The system generates a random secret number between **1 and the defined limit**.  
- The user enters a number in the input field.  
- The game informs whether the secret number is **higher or lower** than the guess.  
- When the user guesses correctly, the game displays the number of attempts used.  
- The **Guess** button allows starting a new round with a new secret number.

## Additional Features Implemented

Beyond what was proposed in the course, extra features were implemented on my own initiative to make the game more complete:

- Empty field validation  
- Handling values outside the allowed range  
- Validation of invalid values such as decimal or negative numbers  
- Clearer and more informative error messages  
- Improved input handling logic  

These validations were not part of the original course content and were added as a way to deepen my JavaScript knowledge.

## Technologies Used

- JavaScript  
- HTML  
- CSS  
- ResponsiveVoice library (for voice feedback)

## Project Objective

This project has an **educational purpose**, focusing on practical learning of programming logic, functions, arrays, and user interaction, serving as a foundation for more complex projects in the future.
