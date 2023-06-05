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
  
    var evento = document.getElementsByName("NomeEvent")[0].value;
    var quantidadeIngressos = document.getElementsByName("quantIngressos")[0].value;
  
    // Realize as ações desejadas com os dados do formulário
    // ...
  
    // Exemplo: exibir os dados no console
    console.log("Nome: " + nome);
    console.log("Endereço: " + endereco);
    console.log("Email: " + email);
    console.log("Evento: " + evento);
    console.log("Quantidade de Ingressos: " + quantidadeIngressos);
  
    // Se chegou até aqui, todos os campos foram preenchidos corretamente
    alert("Formulário enviado com sucesso!");
    return true;
  }
  