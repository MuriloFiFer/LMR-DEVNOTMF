function Enviar() {
    var nome = document.getElementById("pnome").value;
    var endereco = document.getElementById("InputEndereco").value;
    var email = document.getElementById("InputEmail").value;
    var confEmail = document.getElementById("InputEmail1").value;
    var senha = document.getElementById("InputPassword").value;
    var confSenha = document.getElementById("InputPassword1").value;
  
    if (nome === "") {
      alert("Por favor, preencha o campo Nome Completo.");
      return false;
    }
  
    if (endereco === "") {
      alert("Por favor, preencha o campo Endereço.");
      return false;
    }
  
    if (email === "") {
      alert("Por favor, preencha o campo Email.");
      return false;
    }
  
    if (email !== confEmail) {
      alert("Os campos de Email e Confirmação de Email devem ser iguais.");
      return false;
    }
  
    if (senha === "") {
      alert("Por favor, preencha o campo Senha.");
      return false;
    }
  
    if (senha !== confSenha) {
      alert("Os campos de Senha e Confirmação de Senha devem ser iguais.");
      return false;
    }
  

 
  

  
    // Se chegou até aqui, todos os campos foram preenchidos corretamente
    alert("Cadastro realizado com sucesso!");
    alert( "Seu nome:"+ nome);
    alert("seu email:"+email)
    return true;
  }
  