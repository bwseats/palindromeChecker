
// controller function
function getValues() {
    let inputString = document.getElementById('reverse').value;

    let newString = inputString.replace(/[^\w]/gi,'').toLowerCase();

    let bool = checkForPalindrome(newString);
    displayResults(bool);

}

// logic function
function checkForPalindrome(userString) {

    let firstHalf = '';
    let secondHalf = '';


    for (let i = 0, j = userString.length - 1; i < j; i++, j--) {

        firstHalf += userString[i];

        secondHalf += userString[j];
    }

    if (firstHalf == secondHalf) {
        return true
    } else {
        return false
    }
}

// view function
function displayResults(bool) {

    let pass = "Hey look, that's a palindrome!";
    let fail = "Nope, no palindromes here.";

    document.getElementById('alert').classList.remove('invisible');
    
    if (bool == true) {
        document.getElementById('alert-heading').innerHTML = pass;
        document.getElementById('alert').classList.remove('alert-danger');
        document.getElementById('alert').classList.add('alert-info');
    } else if (bool == false) {
        document.getElementById('alert-heading').innerHTML = fail;
        document.getElementById('alert').classList.remove('alert-info');
        document.getElementById('alert').classList.add('alert-danger');
    }

}
