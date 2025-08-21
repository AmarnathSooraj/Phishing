let login = document.getElementById('loginform').value;
let checkbox = document.getElementById('checkbox');
let pass = document.getElementById('pass');

login.addEventListener('click',()=>{
    console.log(login)
})

checkbox.addEventListener('click',()=>{
    if(pass.type==='text'){
        pass.type='password'
    }
    else{
        pass.type='text' 
    }
})


