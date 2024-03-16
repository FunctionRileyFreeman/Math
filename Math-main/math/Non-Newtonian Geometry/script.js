// Example 1: Fractals
var canvas1 = document.getElementById('canvas1');
var ctx1 = canvas1.getContext('2d');
ctx1.fillStyle = '#FFFFFF';
ctx1.fillRect(0, 0, canvas1.width, canvas1.height);

// Draw a Sierpinski Triangle (Fractal)
function drawSierpinski(ctx, x, y, size, depth) {
    if (depth === 0) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size / 2, y + size * Math.sqrt(3) / 2);
        ctx.closePath();
        ctx.fillStyle = '#000';
        ctx.fill();
    } else {
        drawSierpinski(ctx, x, y, size / 2, depth - 1);
        drawSierpinski(ctx, x + size / 2, y, size / 2, depth - 1);
        drawSierpinski(ctx, x + size / 4, y + size * Math.sqrt(3) / 4, size / 2, depth - 1);
    }
}
drawSierpinski(ctx1, 20, 20, 260, 5); // Call the function to draw Sierpinski Triangle

// Example 2: Hyperbolic Geometry
var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');
ctx2.fillStyle = '#FFFFFF';
ctx2.fillRect(0, 0, canvas2.width, canvas2.height);

// Draw a Poincaré Disk Model (Hyperbolic Geometry)
function drawPoincareDisk(ctx, centerX, centerY, radius) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#000';
    ctx.stroke();

    // Draw concentric circles
    for (let i = 0; i < radius; i += 20) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, i, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
drawPoincareDisk(ctx2, canvas2.width / 2, canvas2.height / 2, 120); // Call the function to draw Poincaré Disk Model

// Example 3: Non-Euclidean Geometry
var canvas3 = document.getElementById('canvas3');
var ctx3 = canvas3.getContext('2d');
ctx3.fillStyle = '#FFFFFF';
ctx3.fillRect(0, 0, canvas3.width, canvas3.height);

// Draw a Pseudosphere (Non-Euclidean Geometry)
function drawPseudosphere(ctx, centerX, centerY, radius) {
    for (let y = -radius; y <= radius; y++) {
        const x = Math.sqrt(radius * radius - y * y);
        ctx.beginPath();
        ctx.arc(centerX, centerY + y, x, 0, Math.PI * 2);
        ctx.stroke();
    }
}
drawPseudosphere(ctx3, canvas3.width / 2, canvas3.height / 2, 100); // Call the function to draw Pseudosphere
