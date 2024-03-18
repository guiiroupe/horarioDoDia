function carregar() {
  var msg = document.getElementById('msg');
  var img = document.getElementById('imagem');
  var data = new Date();
  var hora = data.getHours();
  //hora = 22
  msg.innerHTML = `Agora são ${hora} horas. `;

  if (hora >= 0 && hora < 12) {
    //BD
    img.src = 'manha_resized.png';
    document.body.style.background = '#A5A6AB'
  } else if (hora >= 12 && hora < 18) {
    //BT
    img.src = 'tarde_resized.png';
    document.body.style.background = '#C15D16'
  } else {
    //BN
    img.src = 'noite_resized.png'
    document.body.style.background = '#392C4A'
  }

}
