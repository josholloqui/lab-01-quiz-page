// import functions and grab DOM elements

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

    const paws = prompt('Are my paws often referred to "Grinch Feet"?')

    const cuddling = prompt('Do I hate cuddling?');

    const kokoGF =prompt('Do I consider KoKo my girlfriend?')
})