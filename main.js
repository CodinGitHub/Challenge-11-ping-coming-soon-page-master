let inputEmail = document.getElementById('email');
let button = document.getElementById('button');

button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmail(inputEmail.value);
});

function validateEmail(email){ 
    
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let typingOK = expReg.test(email);
    
    if(typingOK == true){
        error.style.visibility = 'hidden';
        inputEmail.style.border = '1px solid hsl(223, 87%, 63%)'
        inputEmail.value = '';
    }else{
        inputEmail.style.border = '1px solid red'
        error.style.visibility = 'visible'; 
    }
    
}