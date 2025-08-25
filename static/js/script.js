const audio = document.getElementById("audio");
  const progress = document.getElementById("progress");

  // Atualiza o gradiente da barra conforme o valor atual
  function updateProgressBarColor() {
    const value = (progress.value / progress.max) * 100;
    progress.style.background = `linear-gradient(to right, #48003c 0%, #48003c ${value}%, #ffffff ${value}%, #ffffff 100%)`;
  }

  // Atualiza a barra de progresso enquanto a música toca
  audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime;
    updateProgressBarColor();
  });

  // Quando a música carrega, define o valor máximo da barra
  audio.addEventListener("loadedmetadata", () => {
    progress.max = audio.duration;
    updateProgressBarColor();
  });

  // Se o usuário mover a barra, muda o tempo da música
  progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
    updateProgressBarColor();
  });

    function togglePlay() {
    if (audio.paused) {
        audio.play();
        playIcon.src = "./static/img/pausa.png";
    } else {
        audio.pause();
        playIcon.src = "./static/img/botao-play-ponta-de-seta.png";
    }
    }


    // Quando a música termina
    audio.addEventListener("ended", () => {
    audio.currentTime = 0;
    progress.value = 0;
    playIcon.src = "./img/botao-play-ponta-de-seta.png"; // Volta o ícone para "play"
    updateProgressBarColor();  // Reseta a barrinha preenchida
    });


    const currentTimeDisplay = document.getElementById("currentTime");
    const durationDisplay = document.getElementById("duration");

    function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
    }

    // Atualiza o tempo atual enquanto a música toca
    audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime;
    updateProgressBarColor();
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    });

    // Define o tempo total quando os metadados carregam
    audio.addEventListener("loadedmetadata", () => {
    progress.max = audio.duration;
    durationDisplay.textContent = formatTime(audio.duration);
    updateProgressBarColor();
    });

    // Atualiza o tempo atual se o usuário mexer no slider
    progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
    currentTimeDisplay.textContent = formatTime(progress.value);
    updateProgressBarColor();
    });


  function showLove() {
      const loveText = document.getElementById("loveText");
      loveText.classList.add("show");

      // Criar chuva de corações
      setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
          heart.remove();
        }, 6000);
      }, 300);
    }


let estagioAtual = 0;
const coracoesImgs = [
    "./static/img/heart.png",
    "./static/img/heart-blue.png",
    "./static/img/love.png",
    "./static/img/love-always-wins.png",
];

function criarCoracao() {
    const coracao = document.createElement('img');
    coracao.classList.add('coracao');

    // Define a imagem com base no estágio atual
    coracao.src = coracoesImgs[estagioAtual];

    // posição horizontal aleatória
    coracao.style.left = Math.random() * window.innerWidth + 'px';

    // duração e atraso aleatório
    const duracao = 5 + Math.random() * 5;
    coracao.style.animationDuration = duracao + 's';

    // tamanho aleatório
    const tamanho = 40 + Math.random() * 40;
    coracao.style.width = `${tamanho}px`;

    document.body.appendChild(coracao);

    setTimeout(() => coracao.remove(), duracao * 1000);
}

// Começa a gerar corações
setInterval(criarCoracao, 500);

// Altera a imagem a cada 20 segundos
setInterval(() => {
    estagioAtual = (estagioAtual + 1) % coracoesImgs.length;
}, 10000);
