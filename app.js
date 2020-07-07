// import functions and grab DOM elements
import { translatesToYes } from './yes-function.js' 
// grabbing button from html
 const quizButton = document.getElementById('quiz-button');
//grabbing the span to print results of quiz
const quizResults = document.getElementById('quiz-results');
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
    //alerts user that the quiz is over and results to be posted on page
    const alertsUser = alert('The quiz is completed! Results will be posted on the page!')
    let score = 0;

    //adds to score if first question returns true(yes)
    if (translatesToYes(paws)) {
        return score++;
    };
    //adds to score if second question returns false(no)
    if (!translatesToYes(cuddling)) {
        return score++;
    };
    //adds to score if third question returns true(yes)
    if (translatesToYes(kokoGF)) {
        return score++;
    };


})