document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content');
    
    // Add smooth scroll behavior
    content.style.scrollBehavior = 'smooth';
    
    // Optional: Add scroll position indicator
    content.addEventListener('scroll', function() {
        const scrollPercentage = (content.scrollTop / (content.scrollHeight - content.clientHeight)) * 100;
        console.log(`Scroll position: ${Math.round(scrollPercentage)}%`);
    });
}); 