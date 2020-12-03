document.getElementById("btnMailto").innerHTML="Contact";

btnMailto.onclick = function () {
    
   document.getElementById("btnMailto").innerHTML="A très bientot"; 
}


$(".cta").click(function(){
  $(this).addClass("active").delay(300).queue(function(next){
    $(this).removeClass("active");
    next();
  });
});