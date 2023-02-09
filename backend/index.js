const url = "http://localhost:3000/pessoas";

const nodemailer = require('nodemailer');

function sendEmail(destinatario) {

  const transporter = nodemailer.createTransport({
    host: "diegopveras02@gmail.com",
    port: 25,
    secure: false, 
    auth: {
      user: "diegopveras@gmail.com",
      pass: "senha"
    },
    tls: { rejectUnauthorized: false }
  });

  const mailOptions = {
    from: 'diegopveras02@gmail.com',
    to: destinatario,
    subject: 'E-mail enviado usando Node!',
    text: 'Bem fácil, não? ;)'
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
}

function enviar() {
  // Pegar valores dos campos do form;
  const nomeValue = document.getElementById("nome").value;
  const emailValue = document.getElementById("email").value;
  const mensagemValue = document.getElementById("mensagem").value;

  // Inicia a instância de um request;
  let request = new XMLHttpRequest();

  // Config da requisição;
  request.open("POST", url, true)
  request.setRequestHeader("Content-Type", "application/json");

  // Montando o objeto pessoa
  const pessoa = {
    nome: nomeValue,
    email: emailValue,
    mensagem: mensagemValue,
  };

  // Fazendo a requisição para salvar os dados;
  request.send(JSON.stringify(pessoa))

  //  Fazer uma req para a twilio
  sendEmail(pessoa.email);
}
