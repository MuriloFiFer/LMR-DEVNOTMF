function MostrarNome(){
let Nome = document.getElementById('MeuForm').pnome.value; // buscando valor do imput do HTML
let Sobrenome = document.getElementById('MeuForm').psobre.value;
let NomeCompleto = Nome + ' '     + Sobrenome;
alert(' Olá ' + NomeCompleto);

}
    
