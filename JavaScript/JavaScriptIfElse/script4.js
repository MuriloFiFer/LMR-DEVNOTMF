let operacai;
let numero1, numero2;

operacao = prompt("Digite a operação desejada","+, -, *, /")
numero1 = prompt("Digite um nº")
numero2 = prompt("Digite outro nº")
switch(operacao){
    case("+"): document.write(parseInt(numero1)+parseInt(numero2));
    break;
    case("-"): document.write(parseInt(numero1)-parseInt(numero2));
    break;
    case("*"): document.write(parseInt(numero1)*parseInt(numero2));
    break;
    break;
    case("/"):
    if(numero2==0){
        document.write("Não dividirás por Zero");
    } else{
        document.write(parseFloat(numero1)/parseFloat(numero2));
    }
    break;
    default:document.write("Escolha uma operação válida");
}