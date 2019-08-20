// var endereco = {
//     rua: "Rua dos pinheiros",
//     numero: 1293,
//     bairro: "Centro",
//     cidade: "São Paulo",
//     uf: "SP"
// }

// console.log(`O usuário moda em ${endereco.cidade} / ${endereco.uf}, 
// no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}. `);

// function pares(x, y) {
//     if (x % 2 == 0) {
//         for (i = x; i <= y; i += 2) {
//             console.log(i);
//         }
//     } else {
//         var z = x + 1;
//         for (i = z; i <= y; i += 2) {
//             console.log(i);
//         }
//     }
// }
// pares(32, 321)

function temHabilidade (skills) {
    var index =  skills.indexOf("Javascript");
    return index == -1 ? false : true;

}
var skills = ["Javascript", "ReactJS", "React Native"];
console.log((temHabilidade(skills)));
