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
      window.location.href = "file:///C:/Users/junior/Documents/marla/page/pedido.html"; // Redireciona para a página do pedido de namoro
    } else {
      alert("Resposta incorreta! Tente novamente.");
    }
  }
  