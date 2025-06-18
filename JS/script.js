document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.getElementById('primary-navigation');

    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.dataset.visible = !isExpanded; // Toggle data-visible attribute
    });

    // Close nav when a link is clicked (for smoother mobile UX)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.dataset.visible === 'true') { // Only close if nav is open
                navToggle.setAttribute('aria-expanded', 'false');
                navLinks.dataset.visible = 'false';
            }
        });
    });
});
*/
