// Simulate a loading process
window.addEventListener('load', function() {
    const loadingContainer = document.querySelector('.loading-container');
    const loadingText = document.querySelector('.loading-text');
    const progressBar = document.querySelector('.progress-bar');
    
    // Add retro sound effect
    const beepSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
    beepSound.volume = 0.1;
    
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            loadingText.textContent = 'COMPLETE!';
            progressBar.style.width = '100%';
            beepSound.play();
            clearInterval(interval);
            
            // Hide the loading animation after a delay
            setTimeout(() => {
                loadingContainer.style.opacity = '0';
                setTimeout(() => {
                    loadingContainer.style.display = 'none';
                }, 1000);
            }, 1000);
        } else {
            progressBar.style.width = `${Math.floor(progress)}%`;
            loadingText.textContent = `LOADING...${Math.floor(progress)}%`;
            beepSound.play();
        }
    }, 500);
});
