function enviar(){
    let Nome = document.getElementById('pnome').value; 
    let Endereco = document.getElementById('pendereco').value; 
    let Email = document.getElementById('pemail').value;
    let ConfEmail = document.getElementById('cponfEmail').value;
    let Senha = document.getElementById('psenha').value;
    let ConfSenha = document.getElementById('pconfSenha').value;
    
    //conferencia dos campos
    
    if(nome==""){
        alert("Campo nome não preenchido");
    }else if(endereco==""){
        alert("Campo endereço não preenchido");
    }else if(email==""){
        alert("Campo email não preenchido");
    }else if(confEmail==""){
        alert("Campo email não preenchido");
    }else if(senha==""){
        alert("Campo senha não preenchido");
    }else if(confSenha==""){
        alert("Campo senha não preenchido");
    }

    

    alert(' Olá ' +Nome);
}



