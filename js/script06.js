const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

function parteVerde() {
    pincel.fillStyle = 'green';
    pincel.fillRect(0, 0, 800, 500);
}

function parteAmarela() {
    pincel.fillStyle = 'yellow'
    pincel.beginPath();
    pincel.moveTo(133, 250);
    pincel.lineTo(400, 400);
    pincel.lineTo(400, 100);
    pincel.fill();

    pincel.beginPath();
    pincel.moveTo(667, 250);
    pincel.lineTo(400, 400);
    pincel.lineTo(400, 100);
    pincel.fill();
}

function parteAzul() {
    pincel.fillStyle = 'darkblue';
    pincel.beginPath()
    pincel.arc(400, 250, 80, 0, 2 * 3.14);
    pincel.fill();
}



parteVerde()
parteAmarela()
parteAzul()