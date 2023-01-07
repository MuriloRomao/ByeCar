const liEls = document.querySelectorAll(".carousel-cards li");
let index = 0;

function show(delta){
index = index + delta;
index = Math.min(Math.max(index, 0), liEls.length - 1);
liEls[index].scrollIntoView({behavior:"smooth"});
}

function next() {
// Código para avançar o carrossel para a próxima imagem aqui
show(+1);
}

function previous() {
// Código para voltar o carrossel para a imagem anterior aqui
show(-1);
}
function start() {
setInterval(next, 5000);
}

function reverse() {
setInterval(previous, 5000);
}

function loop() {
start();
setTimeout(reverse, 5000 * 2);
}
loop();
setInterval(loop, 5000 * 4);
/*const btnOpenModal = document.getElementById('btnOpenModal');
const modal = document.getElementById('myModal');

btnOpenModal.addEventListener('click', () => {
modal.style.display = "block";

});

const items = document.querySelectorAll('.item');

items.forEach((item) => {
item.addEventListener('click', () => {
// Código para exibir o modal aqui
});
});*/