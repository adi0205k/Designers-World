window.addEventListener('load', () => {
    const loadingAnimation = document.querySelector('.loading-animation');
    if (loadingAnimation) {
        loadingAnimation.classList.add('hidden');
    }
});

const scrollBtn = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', function() {
    if (scrollBtn) {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    }
});

if (scrollBtn) {
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initPortalNavigation() {
    const navLinks = document.querySelectorAll('.portal-nav a');
    const sections = document.querySelectorAll('.portal-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            link.classList.add('active');
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.portal-nav')) {
        initPortalNavigation();
    }
});