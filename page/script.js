var btn = document.querySelector(".no");
var position
btn.addEventListener("click", function() {
position ? (position = 0) : (position =     150);
btn.style.transform =    `translate(${position}px,0px)`;
btn.style.transition = "all 0.3s ease";
});
function tanks() {
alert("tanks :)")
}  
function not() {
document.getElementsByClassName('no').style.translateX = ("150px");
}
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    btn.addEventListener("touchstart", function() {
        position ? (position = 0) : (position = 150);
        btn.style.transform = `translate(${position}px,0px)`;
        btn.style.transition = "all 0.3s ease";
      });
      
      btn.addEventListener("touchend", function() {
        position ? (position = 0) : (position = 150);
        btn.style.transform = `translate(${position}px,0px)`;
        btn.style.transition = "all 0.3s ease";
      });
  } else {
    btn.addEventListener("mouseover", function() {
        position ? (position = 0) : (position = 150);
        btn.style.transform = `translate(${position}px,0px)`;
        btn.style.transition = "all 0.3s ease";
        });
  }

function tanks() {
alert("Eu também te amo e prometo te fazer muito feliz! :)")
}  

function not() {
alert("Você nem ta maluca de não aceitar, volte lá e clique no sim! :(")
}  
