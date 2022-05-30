const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

//cor do canvas
pincel.fillStyle = 'green'
/*dois primeiros algorismo se referem ao inicio do preenchimento 
e os últimos algorismos se referem a quantidade de espaço que deverá ocupar */
pincel.fillRect(0, 0, 200, 400)

pincel.fillStyle = 'red'
pincel.fillRect(200, 0, 200, 400)

pincel.fillStyle = 'blue'
pincel.fillRect(400, 0, 200, 400)