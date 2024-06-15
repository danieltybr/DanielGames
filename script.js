const obstaclefunc = () => {
  let obstacle = document.querySelector(".obstacle");
  randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  obstacle.src = `img/obstacle${randomNumber}.png`;
  console.log(`Número: ${randomNumber}`);
};

const checkCollision = () => {
  let player = document.querySelector(".player");
  let obstacle = document.querySelector(".obstacle");

  let playerRect = player.getBoundingClientRect();
  let obstacleRect = obstacle.getBoundingClientRect();

  if (
    playerRect.top < obstacleRect.bottom &&
    playerRect.bottom > obstacleRect.top &&
    playerRect.right > obstacleRect.left &&
    playerRect.left < obstacleRect.right
  ) {
    // Houve colisão, faça o que for necessário aqui
    console.log("Colisão detectada!");
    window.location.href = window.location.href
  }
};

const playfunc = () => {
  let titlescreen = document.querySelector(".title");
  let gamescreen = document.querySelector(".game");
  let obstacle = document.querySelector(".obstacle");

  titlescreen.style.display = "none";
  gamescreen.style.display = "block";
  obstacle.classList.add("move");
  setInterval(obstaclefunc, 1500);
  setInterval(checkCollision, 10);
};

const jump = () => {
  let player = document.querySelector(".player"),
  jump = false;

  if (!jump) {
    jump = true;
    player.classList.toggle("jump");
  setTimeout(() => {
    player.classList.toggle("jump");
  }, 1000);
  }
};