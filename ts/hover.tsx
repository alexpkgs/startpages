// hover.ts

// Get the profile picture element
const profilePic = document.getElementById('profilePic') as HTMLImageElement;

// Define a function to handle mouse enter
const handleMouseEnter = () => {
    profilePic.style.transform = 'scale(1.1)'; // Scale up the image
    profilePic.style.transition = 'transform 0.3s ease'; // Add transition effect
};

// Define a function to handle mouse leave
const handleMouseLeave = () => {
    profilePic.style.transform = 'scale(1)'; // Scale back to original
};

// Add event listeners for mouse enter and leave
profilePic.addEventListener('mouseenter', handleMouseEnter);
profilePic.addEventListener('mouseleave', handleMouseLeave);

