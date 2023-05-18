function MostrarNome(){
    let Nome = document.getElementById('MeuForm').pnome.value; // buscando valor do imput do HTML
    let Sobrenome = document.getElementById('MeuForm').psobre.value;
    let NomeCompleto = Nome + ' '     + Sobrenome;
    alert(' Olá ' + NomeCompleto);
    
    }

    
    let pvalor1;
    let pvalor2;
    let resultado;
        function somar(){
          
            pvalor1 = document.getElementById('MyCalc').pvalor1.value;
            pvalor2 = document.getElementById('MyCalc').pvalor2.value;
            if(pvalor1==""||pvalor2==""){
                alert("Preencha todos os campos");
            }else{
                resultado = parseInt(pvalor1) + parseInt(pvalor2);
                alert("O resustado é" +resultado);
            }
              //parseInt para transformar texto em numero
          
        }
    
        
    