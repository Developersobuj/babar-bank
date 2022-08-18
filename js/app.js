document.getElementById('submit-btn').addEventListener('click', function () {
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;

    const passwordInput = document.getElementById('password-input');
    password = passwordInput.value;

    if (email === 'sobuj@gmail.com' && password === '12345') {
        window.location.href = 'bankarea.html'
    }
    else {
        alert('Vai tui kkk sotik user and password de na hoy giye nak aa tel deye guma')
    }
    emailInput.value = ' ';
    passwordInput.value = ''
})