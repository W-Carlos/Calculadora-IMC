let idade = document.getElementById('input-idade')
let altura = document.getElementById('input-alt')
let peso = document.getElementById('input-peso')
let res = document.getElementById('res')

function calcular () {
    //Validação de dados
    if(idade.value.length == 0 || altura.value.length == 0 || peso.value.length == 0) {
        alert('erro')
    } else {
        let res = peso / Number(altura * 2)
    }
    res.innerHTML = `Você tem ${idade} anos e seu imc é ${res}`
}