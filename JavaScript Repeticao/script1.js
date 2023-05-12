function DiaSemana(){
    var Hoje= new Date(document.getElementById('data').value);
    var Dia = Hpje.getDay();

    Semana[0] ='Domingo';
    Semana[1] ='Segunda';
    Semana[2] ='Terça-feira';
    Semana[3] ='Quarta-feira';
    Semana[4] ='Quinta-feira';
    Semana[5] ='Sexta-feira';
    Semana[6] ='Sabado';

    document.write(Semana[Dia]);
    document.write('<br>',Hoje);

}
function ColorirNome(){
    var Cor= new Array('Black', 'Magenta', 'Gren', 'Blue', 'Red', 'Yellow', 'Silver');
    var nome = document.getElementById('pNome').value;

    for(let i=0; i<=Cor.length; i++){
    document.write(Nome.fontcolor(Cor[i]) + '<br>');
}

}