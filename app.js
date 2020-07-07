// import functions and grab DOM elements
import { translatesToYes } from './yes-function.js' 
// initialize state
 const quizButton = document.getElementById('quiz-button');
// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    //ask for name
    const firstName = prompt('What is your first name?');
    //confirming that they want to take quiz
    const areYouSure = confirm('Are you sure you are ready?');
    //cancels start of quiz
    if (!really) return;
    //answer is yes
    const paws = prompt('Are my paws often referred to "Grinch Feet"?')
    //answer is no
    const cuddling = prompt('Do I hate cuddling?');
    //answer is yes
    const kokoGF =prompt('Do I consider KoKo my girlfriend?')

    let score = 0;
})