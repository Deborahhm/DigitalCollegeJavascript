

let name = "Kelvys";

let lastName = 'Moura';

let setTimeoutData = setTimeout(function() {
    console.log('iniciou o codigo bloqueante');

    for (let index = 0; index <= 10000000000; index++){
        index += 10
    }

    console.log('finalizou o codigo bloqueante')
}, 1000);


console.log(name);
console.log(lastName);

clearTimeout(setTimeoutData);