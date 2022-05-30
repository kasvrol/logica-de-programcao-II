const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'blue';

// comando para começar o movimento
pincel.beginPath();
// primeiro algarismo determina o plano em x, o segundo em y e o terceiro o raio
pincel.arc(300, 100, 80, 0, 2 * 3.14);
pincel.fill()