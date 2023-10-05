const btnSubscribe = document.getElementById('btn-sub');

function isEmail(){
    let email = document.getElementById('email');
    let textError = document.querySelectorAll('label');
    let modalSucess = document.getElementById('sucess-box');
    let contentPage = document.getElementById('content-page');
    
    if(email.value == ""){
        email.classList.toggle('error');
        textError[1].style.display = 'block';
    }
    else{
        modalSucess.style.display = 'flex';
        contentPage.style.display = 'none';
    }
}

btnSubscribe.addEventListener('click', isEmail);