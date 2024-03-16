document.addEventListener('DOMContentLoaded', function() {
    document.body.style.cursor = 'none'; // Hide the cursor

    const cursorText = document.createElement('div');
    cursorText.id = 'cursorText';
    cursorText.style.position = 'fixed';
    cursorText.style.color = '#000';
    cursorText.style.fontWeight = 'bold';
    cursorText.style.pointerEvents = 'none';
    document.body.appendChild(cursorText);

    let timer; // Timer variable for debouncing

    document.addEventListener('mousemove', function(event) {
        cursorText.innerText = cursorNumber;
        cursorText.style.top = `${event.clientY}px`;
        cursorText.style.left = `${event.clientX}px`;
    });

    document.addEventListener('click', function() {
        clearTimeout(timer); // Clear any existing timer
        cursorNumber++; // Increment the cursor number
        timer = setTimeout(function() {
            // Update cursor text after a short delay to debounce
            cursorText.innerText = cursorNumber;
        }, 50); // Adjust debounce delay as needed (in milliseconds)
    });
});

let cursorNumber = 1;
