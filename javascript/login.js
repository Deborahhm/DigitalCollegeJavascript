
// Dados de um formulário
let email = "jose@mail.com";
let password = '126';

// Meu sistema de armazenamento (ex: Banco de dados)
let storage = [
    {
        email: "admin@mail.com",
        password: "654321"
    },
    {
        email: "teste@mail.com",
        password: "123456"
    }
];

let sucesso = `Usuário ${email} fez login com sucesso!`;

if (
    (email === storage[0].email && password === storage[0].password) ||
    (email === storage[1].email && password === storage[1].password)
) {

    console.log(sucesso);

} else {

    let msg;

    if(email !== storage[0].email && email !== storage[1].email) {
        msg = "Email";
    }

    if(password !== storage[0].password && password !== storage[1].password) {
        msg += " ou Password"
    }

    console.log(`${msg} com error`);

}

