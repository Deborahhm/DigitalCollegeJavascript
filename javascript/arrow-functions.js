
function funcaoDeclarada() {
    return "Minha função declarada";
}

let funcaoVariavel = function () {
    return "Minha função variavel"
}

const funcaoConst = function () {
    return "Minha função const"
}

let arrowFunction = () => {
    return "Minha função const"
}

let arrowFunctionParam = param => {
    return "Param: " + param;
}

let arrowFunctionParamReturn = param => "Param: " + param

let result = arrowFunctionParamReturn("Frase");

console.log(result);


