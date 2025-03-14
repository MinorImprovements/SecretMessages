// Xavier Welker 20250313
// The script file for SecretMessages in udemy

document.querySelector('form').addEventListener('submit', event =>{
    event.preventDefault();

    const input = document.querySelector('input');
    console.log(input.value);
})