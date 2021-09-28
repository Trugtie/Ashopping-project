btnup= document.getElementById("toTopBtn");
btDisplay= document.getElementById("toDisplayBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    {
      btnup.style.display = "block";
    }
  } else {
    btnup.style.display = "none";
  }
}


container=document.getElementById("container");

btDisplay.addEventListener("click",displayOff);

function displayOff(){
  if(container.style.display!="none")
  {
  container.style.display="none";
  }
  else
  container.style.display="block";
}