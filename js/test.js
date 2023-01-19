
// controller function
function getValues() {
    let inputString = document.getElementById('reverse').value;


}


function checkForPalindrome(userString) {

    let count = [];
    let endCount = []
    for (let i = 0; i < count.length; i++) {
        count[i] = 0;
    }

    let n = userString.length;

    for (let i = 0, j = n - 1; i < j; i++, j--) {

        // First half
        count[userString[i]]++;

        // Second half
        endCount[userString[j]]--;
    }

    if (count == endCount) {
        return true
    }
}