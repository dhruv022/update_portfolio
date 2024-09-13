document.querySelector('.image-container').addEventListener('mousemove', function(event) {
    const container = event.currentTarget;
    const shape = container.querySelector('.background-shape');
    
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Set CSS variables for mouse position relative to the image
    shape.style.setProperty('--mouse-x', `${x - 5}px`); // Offset for the shape size
    shape.style.setProperty('--mouse-y', `${y - 5}px`);
});

