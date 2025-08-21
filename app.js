let inputemail = document.getElementById('inputemail');
let formemail = document.getElementById('formemail');
let checkbox = document.getElementById('checkbox');
let inputpass = document.getElementById('pass');
let content = document.getElementById('content');

formemail.addEventListener('submit',(e)=>{
    e.preventDefault()
    content.innerText = inputemail.value;
})

checkbox.addEventListener('click',()=>{
    if(inputpass.type==='text'){
        inputpass.type='password'
    }
    else{
        inputpass.type='text' 
    }
})


