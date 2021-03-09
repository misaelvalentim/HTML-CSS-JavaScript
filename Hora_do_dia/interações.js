function carregar() {

    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutes = data.getMinutes();
    msg.innerHTML = `Agora são exatamente ${hora}:${minutes}h`
    if (hora < 12) {
        img.src = '/Hora_do_dia/pictures/morning.jpg'
        document.body.style.backgroundImage = 'repeating-linear-gradient(#3c91c2, #234713)'   
    }
    else if (hora < 18) {
        img.src = '/Hora_do_dia/pictures/afternoon2.jpg'
        img.style.width = '40%'
        document.body.style.backgroundImage = 'repeating-linear-gradient(#ffad33b7, #312f2f)'
    }
    else {
        img.src = '/Hora_do_dia/pictures/night2.jpg'
        img.style.width = '40%'
        document.body.style.backgroundImage = 'repeating-linear-gradient(yellow, black)'

    }
}