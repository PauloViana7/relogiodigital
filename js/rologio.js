
function zero(x) {
    if (x < 10){
        x = '0' + x;
    } return x;
}

function mostrarHora() {
    let dataAtual = new Date();
    let hora = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth();
    let ano = dataAtual.getFullYear();
    let semana = dataAtual.getDay();

    hora = zero(hora);
    minutos = zero(minutos);
    segundos = zero(segundos);

    document.getElementById("horas").innerHTML = hora;
    document.getElementById("minutos").innerHTML = ":" + minutos;
    document.getElementById("segundos").innerHTML = ":" + segundos;
    document.getElementById("datas").innerHTML = converteSemana[semana] + ", " + dia + " de " + converteMes[mes] + " de " + ano;
   
}

let converteMes = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

let converteSemana = [
    'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado'
]

setInterval(mostrarHora, 100);