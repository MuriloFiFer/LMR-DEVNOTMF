let HT; // horas trabalhadas
let VH; //valor hora
let PD; // percentual de desconto
let TD; // total de desconto
let SB; // salário brutoo
let SL; // salário líquido

HT = prompt('Digite as horas trabalhadas:1', 'Informe');
VH = prompt('Entre com o valor da hora','Informe aqui');
PD = prompt('Informe o Percentual de desconto:','em porcentagem');
SB = parseFloat(HT)*parseFloat(VH);
TD = parseFloat(PD)*SB/100;
SL = SB - TD;

document.write('Salário =', SL);


