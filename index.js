// for(let i = 0; i < 10; i++){
//     console.log(`volta número: ${i}`);
// }

for(let i = 1; i <= 31; i++){
    dia.innerHTML += `<option>${i}</option>`;
}

for(let i = 1; i <= 12; i++){
    mes.innerHTML += `<option>${i}</option>`;
}

for(let i = new Date().getFullYear(); i >= new Date().getFullYear() - 50; i--){
    ano.innerHTML += `<option>${i}</option>`;
}

function verificar(){

    if(Number(ano.value) % 4 == 0){
    alert(`Quem nasceu em ${dia.value}/${mes.value}/${ano.value}, nasceu em ano bissexto`)
    }
}

