
function calcular() {
    let idade = Number(document.getElementById('input-idade').value)
    let altura = Number(document.getElementById('input-alt').value)
    let peso = Number(document.getElementById('input-peso').value)
    let res = document.getElementById('res')
    
    //Validação de dados
    if(idade == 0 || altura == 0 || peso == 0) {
        alert('erro')
    } else {
        
      let IMC = (peso / (altura * altura)).toFixed(2)

      res.innerHTML = `${IMC}`
    }
    
}