
const carros = [
    { name: "Carro 1", velocidade: 0, distancia: 0 },
    { name: "Carro 2", velocidade: 0, distancia: 0 },
    { name: "Carro 3", velocidade: 0, distancia: 0 },
    { name: "Carro 4", velocidade: 0, distancia: 0 },
    { name: "Carro 5", velocidade: 0, distancia: 0 },
    { name: "Carro 6", velocidade: 0, distancia: 0 },
];

function atualizarPosicao() {

    let vencedor;
    let carro;
    let quantidade = carros.length;

    do {

        let indexRandom = parseInt(Math.random() * carros.length);
        carro = carros[indexRandom];
        carro.distancia += parseInt(Math.random() * 10 + 10);
        vencedor = carro.name;

        console.log(`${carro.name} - Distancia percorrida: ${carro.distancia} metros`);
        quantidade--;

    } while(quantidade > 0 && carro.distancia < 100);

    if(vencedor && carro.distancia >= 100) {
        console.log(`${vencedor} venceu a corrida!`);
        clearInterval(interval);
    }

    /*
    for(let index in carros) {
        let indexRandom = parseInt(Math.random() * 3);
        let carro = carros[indexRandom];

        carro.distancia += parseInt(Math.random() * 10 + 10);

        console.log(`${carro.name} - Distancia percorrida: ${carro.distancia} metros`);

        if(!vencedor && carro.distancia >= 100) {
            vencedor = carro.name;
            break;
        }
    }

    if(vencedor) {
        console.log(`${vencedor} venceu a corrida!`);
        clearInterval(interval);
    }*/


   
    
}

const interval = setInterval(atualizarPosicao, 1000);