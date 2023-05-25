
let listaMail = ['alex@gmail.com' , 'pluto@alice.it', 'fabrizio@hotmail.com', 'giovanni@gmail.com', 'luca@chiocciola.com'];

let checkMail = prompt('inserisci la tua email');
let mail = false;

for (let i = 0; i < listaMail.length; i++) {
  let lista = listaMail[i];
  if(lista == checkMail){
    mail = true;
  }
}

if (mail === true){
  alert('Accesso effuato.');
}else{
  alert('Email non corretta o inesistente.');
}
