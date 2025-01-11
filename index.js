// for(let i = 0; i < 10; i++){
//     console.log(`volta número: ${i}`);
// }

// for(let i = 1; i <= 28; i++){
//     dia.innerHTML += `<option>${i}</option>`;
// }
const mes = document.getElementById('mes');

const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

for (let i = 0; i < meses.length; i++) {
    mes.innerHTML += `<option value="${i + 1}">${meses[i]}</option>`;
}


for(let i = new Date().getFullYear(); i >= new Date().getFullYear() - 50; i--){
    ano.innerHTML += `<option>${i}</option>`;
}

function verificar(){

    if(Number(ano.value) % 4 == 0){
    alert(`Quem nasceu em ${dia.value}/${mes.value}/${ano.value}, nasceu em ano bissexto`)
    }
}

function mesAtual(){


    if(mes.value == 1){
        for(let i = 1; i <= 31;i++){
            dia.innerHTML += `<option>${i}</option>`;
    }

} else if(mes.value == 2){
    for(let i = 1; i <= 28; i++){
        dia.innerHTML += `<option>${i}</option>`;
}
} else if(mes.value == 3){
    for(let i = 1; i <= 31; i++){
        dia.innerHTML += `<option>${i}</option>`;
}
}
}