let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("pink");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(355, 0, 15));
  textAlign(CENTER, CENTER);
  textSize(45);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Harry Potter e a Pedra Filosofal";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Percy Jackson e os Olimpianos: O Ladrão de Raios";          
        } else{
         return "A Fantástica Fábrica de Chocolate";
        }
      } else {
        if (gostaDeFantasia) {
          return "O Labirinto do Fauno";
        } else {
          return "O Rei Leão";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Jurassic Park";
    
    } else {
      return "Harry Potter e a Câmara Secreta";
    }
  }
}
