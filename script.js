// Subtle cursor glow effect
document.addEventListener('DOMContentLoaded', () => {

    // Create a subtle radial glow that follows the cursor
    const glow = document.createElement('div');
    glow.style.cssText = `
        position: fixed;
        width: 600px;
        height: 600px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 0;
        background: radial-gradient(circle, rgba(0,0,0,0.015) 0%, transparent 70%);
        transform: translate(-50%, -50%);
        transition: opacity 0.4s ease;
        opacity: 0;
    `;
    document.body.appendChild(glow);

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        glow.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });

    // Smooth follow with lerp
    function animate() {
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;
        glow.style.left = currentX + 'px';
        glow.style.top = currentY + 'px';
        requestAnimationFrame(animate);
    }
    animate();
});
