export function translatesToYes(word) {
    const firstLetter = word.charAt(0).toLowerCase();
    const resultYes = firstLetter === 'y';
    //if it results in a yes then returns true
    return resultYes;
};