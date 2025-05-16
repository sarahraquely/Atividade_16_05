
const jsonString = '{"nome":"Samuel","idade":17, "cidade":"Santarem"}';
const pessoa = JSON.parse(jsonString);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);
