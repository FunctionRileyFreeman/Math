const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 800;

function drawCircle(x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

let circles = [];

function dropCircle(speedMultiplier, count = 1) {
    // Clear existing circles
    circles = [];

    for (let j = 0; j < count; j++) {
        const newCircle = {
            x: Math.random() * canvas.width,
            y: 0,
            radius: 20,
            color: speedMultiplier === 3 ? 'blue' : 'gray',
            speed: speedMultiplier * 2
        };
        circles.push(newCircle);
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < circles.length; i++) {
            const circle = circles[i];
            drawCircle(circle.x, circle.y, circle.radius, circle.color);
            circle.y += circle.speed;
            if (circle.y > canvas.height) {
                circles.splice(i, 1);
                i--;
            }
        }

        // Check if there are at least 2 circles
        if (circles.length >= 2) {
            const circle1 = circles[0];
            const circle2 = circles[1];
            const midX = (circle1.x + circle2.x) / 2;
            const midY = (circle1.y + circle2.y) / 2;
            ctx.beginPath();
            ctx.moveTo(circle1.x, circle1.y);
            ctx.lineTo(circle2.x, circle2.y);
            ctx.strokeStyle = 'red'; // You can change the line color here
            ctx.stroke();
        }
    }

    const animation = setInterval(animate, 1000 / 60);
}

document.getElementById('earthButton').addEventListener('click', function() {
    dropCircle(3);
});

document.getElementById('moonButton').addEventListener('click', function() {
    dropCircle(0.3);
});

document.getElementById('earthLineButton').addEventListener('click', function() {
    dropCircle(3, 2);
});

document.getElementById('moonLineButton').addEventListener('click', function() {
    dropCircle(0.3, 2);
});
