
function calcular() {
    let idade = Number(document.getElementById('input-idade').value)
    let altura = Number(document.getElementById('input-alt').value)
    let peso = Number(document.getElementById('input-peso').value)
    let res = document.getElementById('res')

    
    
    //Validação de dados
    if(idade == 0 || altura == 0 || peso == 0) {
        res.innerHTML = 'Preencha todos od campos!'
    } else {
        
      let IMC = (peso / (altura * altura)).toFixed(1)

      let tabela = ''
      
      if(IMC < 17) {
        tabela = 'muito abaixo do peso!'
      } else if(IMC >= 17 && IMC < 18.5) {
          tabela = 'abaixo do peso!'
      } else if(IMC >= 18.5 && IMC < 25) {
          tabela = 'com peso ideal!'
      } else if(IMC >= 25 && IMC < 30) {
          tabela = 'com sobrepeso!'
      } else if(IMC >= 30 && IMC < 35) {
          tabela = 'com obesidade grau 1!'
      } else if(IMC >= 35 && IMC < 40) {
          tabela = 'com obesidade grau 2 (severa)!'
      } else {
          tabela = 'com obesidade grau 3 (mórbida)!'
      }

      res.innerHTML = `Você tem ${idade} anos, seu IMC é de ${IMC} e você está ${tabela}`
    }
    
}