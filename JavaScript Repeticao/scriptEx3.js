function MostrarNome(){
    let Nome = document.getElementById('MeuForm').pnome.value; // buscando valor do imput do HTML
    let Sobrenome = document.getElementById('MeuForm').psobre.value;
    let NomeCompleto = Nome + ' '     + Sobrenome;
    alert(' Olá ' + NomeCompleto);
    
    }

    function MostrarCalc(){
    let  numero1 = document.getElementById('MyCalc').pnumber1.value;
    let numero2 = document.getElementById('MyCalc').pnumber2.value;
    var numeroTotal = (numero1 + numero2);

    alert(' Seu numero' +numeroTotal);

    }
        
    