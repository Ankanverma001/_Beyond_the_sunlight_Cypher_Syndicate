document.addEventListener('DOMContentLoaded', () => {
    // Interactive content
    const showInfoButton = document.getElementById('show-info');
    const infoText = document.getElementById('info-text');

    if (showInfoButton) {
        showInfoButton.addEventListener('click', () => {
            infoText.classList.toggle('hidden');
            showInfoButton.textContent = infoText.classList.contains('hidden') ? 'Learn More' : 'Show Less';
        });
    }

    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            const username = form.querySelector('#username');
            const password = form.querySelector('#password');
            const email = form.querySelector('#email');
            if ((username && username.value.trim() === '') || 
                (password && password.value.trim() === '') || 
                (email && email.value.trim() === '')) {
                alert('Please fill in all required fields.');
                event.preventDefault();
            }
        });
    });
});
