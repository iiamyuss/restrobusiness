const burger = document.getElementById('burger-menu');
const nav = document.querySelector('.nav-links');
const form = document.getElementById('noodle-form');
const formMessage = document.getElementById('form-message');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            form.reset();
            btn.innerText = originalText;
            btn.disabled = false;
            formMessage.innerText = 'Thanks for reaching out! We will reply soon.';
            
            setTimeout(() => {
                formMessage.innerText = '';
            }, 3000);
        }, 1200);
    });
}