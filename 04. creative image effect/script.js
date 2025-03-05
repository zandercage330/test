document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.image-container');

    containers.forEach(container => {
        container.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = container.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;

            const image = container.querySelector('.effect-image');
            let xOffset = (x - 0.5) * 20;
            let yOffset = (y - 0.5) * 20;

            // Custom effects based on theme
            if (container.classList.contains('naruto')) {
                // Leaf village effect - more dramatic movement
                xOffset *= 1.5;
                yOffset *= 1.5;
            } else if (container.classList.contains('death-stranding')) {
                // Ethereal effect - slower, more subtle movement
                xOffset *= 0.7;
                yOffset *= 0.7;
            } else if (container.classList.contains('boruto')) {
                // Dynamic ninja effect - quick response
                xOffset *= 1.2;
                yOffset *= 1.2;
            }

            image.style.transform = `scale(1.1) translate(${xOffset}px, ${yOffset}px)`;

            // Add custom overlay effect
            const overlay = container.querySelector('.overlay');
            const overlayOffset = Math.abs(xOffset) + Math.abs(yOffset);
            overlay.style.background = container.classList.contains('death-stranding')
                ? `linear-gradient(${45 + overlayOffset}deg, rgba(169, 169, 169, 0), rgba(0, 0, 0, 0.9))`
                : container.classList.contains('naruto')
                ? `linear-gradient(rgba(255, 165, 0, ${overlayOffset * 0.01}), rgba(0, 0, 0, 0.8))`
                : `linear-gradient(rgba(0, 191, 255, ${overlayOffset * 0.01}), rgba(0, 0, 0, 0.8))`;
        });

        container.addEventListener('mouseleave', () => {
            const image = container.querySelector('.effect-image');
            const overlay = container.querySelector('.overlay');
            
            image.style.transform = 'scale(1)';
            
            // Reset overlay gradient
            if (container.classList.contains('death-stranding')) {
                overlay.style.background = 'linear-gradient(rgba(169, 169, 169, 0), rgba(0, 0, 0, 0.9))';
            } else if (container.classList.contains('naruto')) {
                overlay.style.background = 'linear-gradient(rgba(255, 165, 0, 0), rgba(0, 0, 0, 0.8))';
            } else {
                overlay.style.background = 'linear-gradient(rgba(0, 191, 255, 0), rgba(0, 0, 0, 0.8))';
            }
        });
    });
}); 