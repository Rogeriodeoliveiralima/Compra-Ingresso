

function comprar(){
  let tipoIngresso = document.getElementById('tipo-ingresso');
  let quantidade = document.getElementById('qtd').value;

  if(tipoIngresso.value == 'pista'){
    comprarPista(quantidade);
  }

  
  
}

function comprarPista(quantidade){
  let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

  if(quantidade  > qtdPista ){
   alert('Quantidade de Ingressos indisponivel para setor Pista');
  }else{
    qtdPista = qtdPista - quantidade;
    document.getElementById('qtd-pista').textContent = qtdPista;
    alert('Compra realizada com sucesso!');
    
  }
  
  
}