
const carros = [
    { name: "Carro 1", velocidade: 0, distancia: 0 },
    { name: "Carro 2", velocidade: 0, distancia: 0 },
    { name: "Carro 3", velocidade: 0, distancia: 0 }
];

function atualizarPosicao() {

    let vencedor;

    carros.forEach(function (carro) {
        carro.distancia += carro.velocidade + parseInt(Math.random() * 10 + 10);
        
        if(!vencedor && carro.distancia >= 100) {
            vencedor = carro.name;
        }
        console.log(`${carro.name} - Distancia percorrida: ${carro.distancia} metros`);
    });

    if(vencedor) {
        console.log(`${vencedor} venceu a corrida!`);
        clearInterval(interval);
    }
    
}

const interval = setInterval(atualizarPosicao, 1000);