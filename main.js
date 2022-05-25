let inputEmail = document.getElementById('email');
let button = document.getElementById('button');

button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmail();
});

function validateEmail(){ 
    
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let typingError = expReg.test(inputEmail.value);
    
    if(typingError == false){
        error.innerHTML = 'Please provide a valid email address';
        inputEmail.style.border = '1px solid red'
    }else{
        error.innerHTML = '';
        inputEmail.value = '';
        inputEmail.style.border = '1px solid hsl(223, 87%, 63%)'
    }
    
}