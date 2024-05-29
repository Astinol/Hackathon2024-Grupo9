
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        var nameError = document.getElementById('nameError');
        var emailError = document.getElementById('emailError');
        var messageError = document.getElementById('messageError');

        nameError.innerHTML = '';
        emailError.innerHTML = '';
        messageError.innerHTML = '';

        if (name === '') {
            nameError.innerHTML = 'Por favor, insira seu nome.';
            event.preventDefault();
        }

        if (email === '') {
            emailError.innerHTML = 'Por favor, insira seu e-mail.';
            event.preventDefault();
        } else if (!isValidEmail(email)) {
            emailError.innerHTML = 'Por favor, insira um e-mail válido.';
            event.preventDefault();
        }

        if (message === '') {
            messageError.innerHTML = 'Por favor, insira sua mensagem.';
            event.preventDefault();
        }
    });

    function isValidEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
