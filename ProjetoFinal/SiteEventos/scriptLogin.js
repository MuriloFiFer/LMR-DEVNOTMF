function Enviar() {
   
    var email = document.getElementById("InputEmail").value;
    var senha = document.getElementById("InputPassword").value;
 
  
   
    if (email === "") {
      alert("Por favor, preencha o campo Email.");
      return false;
    }
  
  
    if (senha === "") {
      alert("Por favor, preencha o campo Senha.");
      return false;
    }
  
 
  

  
    alert("Login realizado com sucesso!");
    alert( "Seu email:" + email);
      return true;
  }
  