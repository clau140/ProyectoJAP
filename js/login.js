let email = document.getElementById('box-email');
let password = document.getElementById('box-password');
let button = document.getElementById('get-into');

if (sessionStorage.getItem('condition') == 'loggedInUser') {
    location.href = "index.html";
}

button.addEventListener('click', function(event){

    
    event.preventDefault();

  
    if ((email.value != 0 && password.value == 0) || (email.value != 0 && password.value == 0) || (email.value.length == 0 && password.value == '') ||(email.value == 0 && password.value != 0)  ){
        password.classList.add('is-invalid');
        email.classList.add('is-invalid');
    }

    
    else {
       
        location.href = "index.html";
        
        //a través de sessionStorage se obtuvo el valor del email del usuario ingresado
        sessionStorage.setItem('loggedInUser', email.value);
    }
})