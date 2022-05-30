const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'yellow';

// comando para começar o movimento
pincel.beginPath();
// comando para o inicio do movimento, primeiro ponto no plano cartesiano
pincel.moveTo(300, 200);
// segundo ponto no plano
pincel.lineTo(200, 400);
// terceiro ponto no plano
pincel.lineTo(400, 400);
// preenchimento entre os pontos
pincel.fill()