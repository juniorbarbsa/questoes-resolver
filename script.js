function verificarResposta1() {
    var resposta1 = document.getElementById("resposta1").value.toLowerCase();
    if (resposta1 === "buraco") {
      document.getElementById("charada1").style.display = "none";
      document.getElementById("charada2").style.display = "block";
    } else {
      alert("Resposta incorreta! Tente novamente.");
    }
  }
  
  function verificarResposta2() {
    var resposta2 = document.getElementById("resposta2").value.toLowerCase();
    if (resposta2 === "mapa") {
      // Resposta correta!
      showFireworks(); // Chama a função para exibir os fogos de artifício
      setTimeout(function() {
        window.location.href = "https://pedidomarla.netlify.app/"; // Redireciona para a página do pedido de namoro após alguns segundos
      }, 5000); // Tempo de espera em milissegundos (5 segundos)
    } else {
      alert("Resposta incorreta! Tente novamente.");
    }
  }
  
  function showFireworks() {
    // Cria um elemento <div> para cada fogos de artifício
    for (var i = 0; i < 20; i++) {
      var fireworks = document.createElement("div");
      fireworks.className = "fireworks";
      document.body.appendChild(fireworks);
  
      // Define as posições aleatórias dos fogos de artifício na tela
      var posX = Math.floor(Math.random() * window.innerWidth);
      var posY = Math.floor(Math.random() * window.innerHeight);
      fireworks.style.left = posX + "px";
      fireworks.style.top = posY + "px";
    }
  }
  
