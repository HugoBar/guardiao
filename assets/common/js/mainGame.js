// Variaveis Globais
var escolha = 0; // Indica o quadrado selecionado pelo utilizador
var redes = 0; // Indica o quadrado selecionado pelo guarda-redes
var defesa; // Define se o guarda redes conseguiu defender ou nao
var dificuldade = getDificuldade();
console.log("Dificuldade: " + dificuldade);

// Coordenadas do rato
var mouseX;
var mouseY;

// Array para os quadrados
var arrayQuadrados = [];

// Construtor dos quadrados
function Quadrado(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.selected = false;
}

// Adiciona os quadrados ao array. Se for para mudar as coordenadas, muda-se aqui
function criarQuadrado() {
    arrayQuadrados.push(new Quadrado(357, 81, 189, 97));
    arrayQuadrados.push(new Quadrado(544, 81, 189, 97));
    arrayQuadrados.push(new Quadrado(731, 81, 189, 97));
    arrayQuadrados.push(new Quadrado(357, 176, 189, 97));
    arrayQuadrados.push(new Quadrado(544, 176, 189, 97));
    arrayQuadrados.push(new Quadrado(731, 176, 189, 97));
    arrayQuadrados.push(new Quadrado(357, 271, 189, 97));
    arrayQuadrados.push(new Quadrado(544, 271, 189, 97));
    arrayQuadrados.push(new Quadrado(731, 271, 189, 97));
}

// O Guarda-redes escolhe qual quadrado defender
function guardaRedes() {
    if (dificuldade == "f") {
        redes = Math.floor(Math.random() * 9 + 1);
    } else if (dificuldade == "m") {
        redes = Math.floor(Math.random() * 6 + 1);
    } else if (dificuldade == "d") {
        redes = Math.floor(Math.random() * 3 + 1);
    } else {
        console.log("Erro na dificuldade.")
    }
    console.log("Redes: " + redes);
}

// Funcao que ativa no clique do rato
function click(e) {
    // Receber coordenadas do rato
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop;
    //console.log('x: ' + mouseX + ' y: ' + mouseY);

    // Ciclo for para percorrer o array dos quadrados
    for (var i = 0; i < arrayQuadrados.length; i++) {
        // If para checkar se o clique foi dentro de um dos retangulos
        if (((arrayQuadrados[i].x < mouseX) && ((arrayQuadrados[i].w + arrayQuadrados[i].x) > mouseX)) && ((arrayQuadrados[i].y < mouseY) && ((arrayQuadrados[i].h + arrayQuadrados[i].y) > mouseY))) {
            arrayQuadrados[i].selected = true;
            // Guarda o quadrado escolhido pelo utilizador
            escolha = i + 1;
            console.log("Escolha: " + escolha);

            if (escolha == redes) {
                defesa = true;
                resultado();
            } else {
                defesa = false;
                resultado();
            }
        }

    }
    // Atribuir movimento da bola a cada escolha
    if (escolha == 1) {
        timerBola = window.setInterval(function () { desenhar(610, 583, 368, 450, 280, 186, 429, 110) }, 10)
    }
    else if (escolha == 2) {
        timerBola = window.setInterval(function () { desenhar(610, 583, 485, 444, 390, 216, 625, 110) }, 10)
    }
    else if (escolha == 3) {
        timerBola = window.setInterval(function () { desenhar(610, 583, 843, 520, 975, 113, 800, 110) }, 10)
    }
    else if (escolha == 4) {
        timerBola = window.setInterval(function () { desenhar(610, 583, 474, 520, 355, 340, 429, 195) }, 10)
    }
    else if (escolha == 5) {
        timerBola = window.setInterval(function () { desenhar(610, 583, 841, 410, 466, 331, 625, 195) }, 10)
    }
    else if (escolha == 6) {
        timerBola = window.setInterval(function () { desenhar(610, 583, 830, 547, 954, 306, 800, 195) }, 10)
    }
    else if (escolha == 7) {
        timerBola = window.setInterval(function () { desenhar(610, 583, 479, 564, 456, 259, 429, 290) }, 10)
    }
    else if (escolha == 8) {
        timerBola = window.setInterval(function () { desenhar(610, 583, 700, 476, 690, 352, 625, 290) }, 10)
    }
    else if (escolha == 9) {
        timerBola = window.setInterval(function () { desenhar(610, 583, 893, 470, 969, 340, 800, 290) }, 10)
    }



}

// Define se o utilizador marcou ou nao
function resultado() {
    if (defesa == true) {
        alert("You lost...");
    } else if (defesa == false) {
        alert("You won!");
    }
    resetVariaveis();
}

// Da reset as variaveis
function resetVariaveis() {
    var escolha = 0; // Indica o quadrado selecionado pelo utilizador
    var redes = 0; // Indica o quadrado selecionado pelo guarda-redes
    var defesa; // Define se o guarda redes conseguiu defender ou nao
    guardaRedes();
}

criarQuadrado(); // Cria as areas de clique
guardaRedes(); // Define o quadrado que o guarda-redes ira defender

canvas.addEventListener('click', click); //evento clique do rato