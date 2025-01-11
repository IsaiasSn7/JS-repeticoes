// for(let i = 0; i < 10; i++){
//     console.log(`volta número: ${i}`);
// }

// for(let i = 1; i <= 28; i++){
//     dia.innerHTML += `<option>${i}</option>`;
// }
for(let i = 1; i <= 31; i++){
    dia.innerHTML += `<option>${i}</option>`;
}

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
    } else{
        alert(`Quem nasceu em ${dia.value}/${mes.value}/${ano.value}, Não nasceu em ano bissexto`)
    }
}

function mesAtual(){
    const mA = mes.value;

    if(mA == 1 || mA == 3 || mA == 5 || mA == 7 || mA == 8 || mA == 10 || mA == 12){
        for(let i = 1; i <= 31; i++){
            dia.innerHTML += `<option>${i}</option>`;
    }

} else if(mA == 2){
    for(let i = 1; i <= 28; i++){
        dia.innerHTML += `<option>${i}</option>`;
}

} else{
    for(let i = 1; i <= 30; i++){
        dia.innerHTML += `<option>${i}</option>`;
}
}
}

function anoBissesto(){
    if(ano.value % 4 == 0){
        for(let i = 1; i <= 29; i++){
            dia.innerHTML += `<option>${i}</option>`;
    }
} else if(ano.value % 4 !== 0){
    for(let i = 1; i <= 28; i++){
        dia.innerHTML += `<option>${i}</option>`;
}
}
}
