// IMPORT MODULES under test here:
// import example from '../example.js';
import { translatesToYes } from '../yesfunction.js'

const test = QUnit.test;

test('it should return true if anything is passed that starts with y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const word1 = 'yes';
    const word2 = 'yup';
    const word3 = 'yeah';
    const word4 = 'YES';
    const word5 = 'Yassssss';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = translatesToYes(word1);
    const actual2 = translatesToYes(word2);
    const actual3 = translatesToYes(word3);
    const actual4 = translatesToYes(word4);
    const actual5 = translatesToYes(word5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
    expect.equal(actual4, expected);
    expect.equal(actual5, expected);
});
