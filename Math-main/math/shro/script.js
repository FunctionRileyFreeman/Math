var isChanging = false;

function changeCatState() {
    if (isChanging) {
        return; // If already changing, ignore the click
    }
    
    var cat = document.getElementById('cat');
    var catState = document.getElementById('cat-state');
    var button = document.querySelector('button');

    var randomNum = Math.random();
    if (randomNum < 0.5) {
        cat.style.backgroundColor = 'green'; // Alive
        catState.textContent = 'Alive Cat';
    } else {
        cat.style.backgroundColor = 'red'; // Dead
        catState.textContent = 'Dead Cat';
    }

    isChanging = true; // Set to true to prevent multiple clicks

    setTimeout(function() {
        cat.style.backgroundColor = 'black'; // Reset color to black
        catState.textContent = ''; // Clear the cat state text
        isChanging = false; // Set back to false to allow button click
    }, 5000); // 5000 milliseconds = 5 seconds
}
