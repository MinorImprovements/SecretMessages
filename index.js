// Xavier Welker 20250313
// The script file for SecretMessages in udemy

document.querySelector('form').addEventListener('submit', event =>{
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const output = document.querySelector('#link-input');
    output.value = `${window.location}#${encrypted}`;
    output.select();
})