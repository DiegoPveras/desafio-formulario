const url = "http://localhost:3000/pessoas";


function enviar() {
  // Pegar valores dos campos do form;
  const nomeValue = document.getElementById("nome").value;
  const emailValue = document.getElementById("email").value;
  const mensagemValue = document.getElementById("mensagem").value;

  // Inicia a instância de um request;
  let request = new XMLHttpRequest();

  // Config da requisição;
  request.open("POST", url, true)
  request.setRequestHeader("Content-Type",  "application/json");
  
  // Montando o objeto pessoa
  const pessoa = {
    nome: nomeValue,
    email: emailValue,
    mensagem: mensagemValue,
  };
  
  // Fazendo a requisição;
  request.send(JSON.stringify(pessoa))
}