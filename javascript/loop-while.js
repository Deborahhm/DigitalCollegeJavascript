
let email = "teste@mail.com";
let password = '123456';

let storage = [
    {
        email: "admin@mail.com",
        password: "654321"
    },
    {
        email: "teste@mail.com",
        password: "123456"
    },
    {
        email: "teste3@mail.com",
        password: "2222"
    }
];

let index = 0;

let authorized = false;

/*while (index < storage.length) {
    let userEmail = storage[index].email;
    let userPassword = storage[index].password
    
    if(email === userEmail && password === userPassword ) {
        authorized = true
        break;
    }

    index++;
}*/

do {
    console.log(storage[index]);

    let userEmail = storage[index].email;
    let userPassword = storage[index].password
    
    if(email === userEmail && password === userPassword ) {
        authorized = true;
        break;
    }
    
    index++;
}
while (index < storage.length)


console.log(authorized ? "Está logado" : "Não está logado")




