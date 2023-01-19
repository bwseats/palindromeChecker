
// controller function
function getValues() {
    let inputString = document.getElementById('reverse').value;

    let newString = inputString.replace(/[^\w]/gi,'').toLowerCase();

    let bool = checkForPalindrome(newString);
    
    let revString = reverseAString(inputString);

    displayResults(bool, revString);

}

// logic function
function checkForPalindrome(userString) {

    let firstHalf = '';
    let secondHalf = '';


    for (let i = 0, j = userString.length - 1; i < j; i++, j--) {

        firstHalf += userString[i];

        secondHalf += userString[j];
    }

    return firstHalf == secondHalf
}

// reverse string
function reverseAString(userString) {

    let revString = '';

    for(let i = userString.length - 1; i >= 0; i--) {
        let currentLetter = userString[i];

        revString += currentLetter
    }

    return revString;
}

// view function
function displayResults(bool, revString) {

    let alert = document.getElementById('alert')

    alert.classList.remove('alert-danger');
    alert.classList.remove('alert-info');
    
    if (bool == true) {
        document.getElementById('alert-heading').textContent = "Hey look, that's a palindrome!";
        document.getElementById('results').textContent = `Your string reversed is "${revString}"!`;
        alert.classList.add('alert-info');
    } else if (bool == false) {
        document.getElementById('alert-heading').textContent = "Nope, no palindromes here.";
        document.getElementById('results').textContent = `Your string reversed is "${revString}"!`;
        alert.classList.add('alert-danger');
    }
    
    alert.classList.remove('invisible');
}
