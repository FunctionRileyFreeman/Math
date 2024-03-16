// Function to generate Fibonacci sequence
function generateFibonacciSequence(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Display Fibonacci sequence on the webpage
const fibonacciSequenceDiv = document.getElementById('fibonacci-sequence');
const fibonacciSequence = generateFibonacciSequence(10); // Change the argument to generate more numbers
fibonacciSequence.forEach(number => {
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('fibonacci-number');
    numberDiv.textContent = number;
    fibonacciSequenceDiv.appendChild(numberDiv);
});
