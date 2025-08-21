let login = document.getElementById('loginform');
let checkbox = document.getElementById('checkbox');
let pass = document.getElementById('pass');
let formlogin = document.getElementById('formlogin')

checkbox.addEventListener('click',()=>{
    if(pass.type==='text'){
        pass.type='password'
    }
    else{
        pass.type='text' 
    }
})


