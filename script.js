// Shared JavaScript across all pages
console.log('MediCare Hospital System loaded');

// Set active tab based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navTabs = document.querySelectorAll('.nav-tab');
    
    navTabs.forEach(tab => {
        const href = tab.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
});