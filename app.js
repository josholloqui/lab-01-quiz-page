// import functions and grab DOM elements
import { translatesToYes } from './yesfunction.js' 
// grabbing button from html
const quizButton = document.getElementById('quiz-button');
//grabbing the span to print results of quiz
const quizResults = document.getElementById('results');
console.log(quizResults)
// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    //ask for name
    const firstName = prompt('What is your first name?');
    console.log(firstName);
    //confirming that they want to take quiz
    const areYouSure = confirm('Are you sure you are ready?');
    //cancels start of quiz
    if (!areYouSure) {
        return
    }
    //answer is yes
    const answer1 = prompt('Are my paws often referred to "Grinch Feet"?')
    console.log(answer1);
    //answer is no
    const answer2 = prompt('Do I hate cuddling?');
    console.log(answer2);
    //answer is yes
    const answer3 = prompt('Do I consider KoKo my girlfriend?')
    console.log(answer3);
    // the score starts at zero
    let score = 0;
    //adds to score if first question returns true(yes)
    if (translatesToYes(answer1)) {
        score++;
    }
    //adds to score if second question returns false(no)
    if (!translatesToYes(answer2)) {
        score++;
    }
    //adds to score if third question returns true(yes)
    if (translatesToYes(answer3)) {
        score++;
    }
    console.log(score);
    //alerts user that the quiz is over and results to be posted on page
    alert('The quiz is completed! Results will be posted on the page!')
    // results get printed in the span element in html
    quizResults.textContent = 'hello please throw me a bone';
});