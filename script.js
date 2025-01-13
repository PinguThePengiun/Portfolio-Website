function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const iframe = document.getElementById('bee-iframe');

let mouseX = window.innerWidth / 2; // Default X position (middle of the screen)
let mouseY = window.innerHeight / 2; // Default Y position (middle of the screen)
let beeX = mouseX; // Bee's current X position
let beeY = mouseY; // Bee's current Y position
let isMoving = false; // Track whether the cursor is moving

const radius = 10; // Smaller radius for less vertical movement
let hoverAngle = 0; // Starting angle for up-down hover
const hoverSpeed = 0.02; // Slower speed for smoother hover motion
const hoverFrequency = 0.05; // Adjust frequency for smoother motion

// Function to smoothly follow the cursor
function followCursor() {
    const followSpeed = 0.1; // Speed at which the bee follows the cursor

    // Calculate smooth movement towards the cursor
    beeX += (mouseX - beeX) * followSpeed;
    beeY += (mouseY - beeY) * followSpeed;

    // Apply movement to the iframe
    iframe.style.left = beeX + 'px';
    iframe.style.top = beeY + 'px';

    // If the cursor stops, add the up-and-down hover effect
    if (!isMoving) {
        // Smooth vertical oscillation
        let hoverY = Math.sin(hoverAngle * hoverFrequency) * radius;
        iframe.style.transform = `translateY(${hoverY}px)`; // Up and down motion
        hoverAngle += hoverSpeed;
    } else {
        // If moving, reset the transform
        iframe.style.transform = 'translateY(0)';
        hoverAngle = 0; // Reset hover effect when moving
    }

    requestAnimationFrame(followCursor); // Continuously animate the bee
}

// Track mouse movement and update positions
document.addEventListener('mousemove', function(e) {
    mouseX = e.pageX; // Update mouse X position
    mouseY = e.pageY; // Update mouse Y position
    isMoving = true; // Set the flag that the cursor is moving

    // After some time, if there's no mouse movement, the bee will hover
    clearTimeout(mouseStopped);
    mouseStopped = setTimeout(() => {
        isMoving = false;
    }, 200); // 200ms delay before hovering when the mouse stops
});

// Start the bee's movement
let mouseStopped;
followCursor();

// Function to toggle the color panel
function togglePanel() {
  const panel = document.getElementById("color-panel");
  panel.classList.toggle("open");
}

// Function to change the background color
function changeColor(color) {
  document.body.style.backgroundColor = color;
}
