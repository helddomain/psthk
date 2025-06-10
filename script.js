function downloadCheat() {
    console.log("Download initiated");
    // Simulate download
    const link = document.createElement('a');
    link.href = 'https://github.com/Arate4/Psat/releases/download/1.3/PassatHook.exe';
    link.download = 'PassatHook.exe';
    link.click();
}

function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');
    
    if (answer.classList.contains('show')) {
        answer.classList.remove('show');
        icon.classList.remove('rotate');
    } else {
        // Close all other FAQs
        document.querySelectorAll('.faq-answer').forEach(item => {
            item.classList.remove('show');
        });
        document.querySelectorAll('.faq-icon').forEach(item => {
            item.classList.remove('rotate');
        });
        
        // Open clicked FAQ
        answer.classList.add('show');
        icon.classList.add('rotate');
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});