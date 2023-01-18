const input = document.getElementById('input');
const resposta = document.getElementById('resultado');
const btn = document.getElementById('btn');


btn.addEventListener('click',()=>{solution(input.value)});
window.addEventListener('keydown',(e)=>{if(e.keyCode == 13){solution(input.value)}})









function solution(number){
const romano = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  const numero = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  
  let resultado = ''
  
  for(let i = 0;i < numero.length;i++){
    while(number >= numero[i]){
      resultado = resultado + romano[i]
      number = number - numero[i]
    }
  }
  
  
  
  resposta.textContent = resultado.trim()
  input.value = ''
}
