document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;
    document.body.appendChild(canvas);

    var ctx = canvas.getContext("2d");

    // Define the center of the atom
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    // Draw the nucleus
    ctx.beginPath();
    ctx.arc(centerX, centerY, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();

    // Draw electron orbits
    var numElectronOrbits = 4; // Number of electron orbits
    var orbitRadiusIncrement = 30; // Increment in radius for each orbit
    var orbitRadius = 30; // Initial radius for the first orbit

    for (var i = 0; i < numElectronOrbits; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, orbitRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'black';
        ctx.stroke();
        orbitRadius += orbitRadiusIncrement;
    }

    // Function to draw electrons
    function drawElectrons(angle) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

        // Redraw nucleus and electron orbits
        ctx.beginPath();
        ctx.arc(centerX, centerY, 10, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();

        orbitRadius = 30; // Reset orbit radius for electrons

        for (var i = 0; i < numElectronOrbits; i++) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, orbitRadius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'black';
            ctx.stroke();
            orbitRadius += orbitRadiusIncrement;
        }

        // Draw electrons at updated positions
        var numElectronsPerOrbit = [2, 8, 18, 32]; // Number of electrons in each orbit
        var electronAngleIncrement = Math.PI / 4; // Angle increment for placing electrons

        for (var i = 0; i < numElectronsPerOrbit.length; i++) {
            var numElectrons = numElectronsPerOrbit[i];
            var angleIncrement = 2 * Math.PI / numElectrons;
            var orbitAngle = angle * (i + 1) * 0.1; // Adjust the speed of electron motion
            var orbitRadius = 30 + i * orbitRadiusIncrement; // Orbit radius

            for (var j = 0; j < numElectrons; j++) {
                var x = centerX + orbitRadius * Math.cos(orbitAngle);
                var y = centerY + orbitRadius * Math.sin(orbitAngle);
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 2 * Math.PI);
                ctx.fillStyle = 'blue';
                ctx.fill();
                orbitAngle += angleIncrement;
            }
        }
    }

    // Animation loop
    var angle = 0;
    function animate() {
        drawElectrons(angle);
        angle += 0.01; // Adjust the speed of rotation
        requestAnimationFrame(animate);
    }

    animate();
});
