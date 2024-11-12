document.addEventListener('DOMContentLoaded', () => {
    // Function to animate progress bars
    function animateProgressBar(progressBar) {
        const percent = progressBar.getAttribute('per');
        let startCount = 0;
        const endCount = parseInt(percent);

        const interval = setInterval(() => {
            if (startCount >= endCount) {
                clearInterval(interval);
            } else {
                startCount++;
                progressBar.style.width = `${startCount}%`;
                progressBar.querySelector('::before').textContent = `${startCount}%`; // Update the percentage text
            }
        }, 20); // Adjust speed as needed
    }

    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start animation when the progress bar is in view
                const progressBar = entry.target;
                animateProgressBar(progressBar);
                // Unobserve after the animation has started
                observer.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.5
    }); // Trigger when at least 50% of the element is visible

    // Observe each progress bar
    document.querySelectorAll('.progress-bar-per').forEach((progressBar) => {
        observer.observe(progressBar);
    });
});