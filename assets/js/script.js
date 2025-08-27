const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const formulario = document.getElementById("formulario");

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const campoNome = document.querySelector("#name");
    const errNome = document.querySelector("#errNome");

    if (campoNome.value.length < 3) {
        errNome.innerHTML = 'O nome deve ter no minimo 3 caracteres.';
        campoNome.focus();
        return;
    } else {
        errNome.innerHTML = '';
    }

    const campoEmail = document.querySelector('#email');
    const errEmail = document.querySelector('#errEmail');

    if (!campoEmail.value.match(emailRegex)) {
        errEmail.innerHTML = 'Insira um email valido.';
        campoEmail.focus();
        return;
    } else {
        errEmail.innerHTML = '';
    }

    const campoSubject = document.querySelector('#subject');
    const errSubject = document.querySelector('#errSubject');

    if (campoSubject.value.length < 5) {
        errSubject.innerHTML = 'O assunto deve ter no minimo 5 caracteres.';
        campoSubject.focus();
        return;
    } else {
        errSubject.innerHTML = '';
    }

    const campoMessage = document.querySelector('#message');

    window.alert(`Formulario enviado com sucesso!`)

    campoNome.value = '';
    campoEmail.value = '';
    campoSubject.value = '';
    campoMessage.value = '';


});