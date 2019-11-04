

var titulo1 = "Creatividad";
var facebook = "https://www.facebook.com/credivi/"
var instagram = "https://www.instagram.com/credivi/"
var youtube = "https://www.instagram.com/credivi/"
var whatsapp = "https://api.whatsapp.com/send?phone=5491123273372&text=Podras colocar tu mensaje aquí"
var mailto = "mailto:credivi.marketing@gmail.com"


//Fomulario
var action = "https://docs.google.com/forms/d/e/1FAIpQLSesR4Hshf_ZVGerE1tbbI5tZomHX79IvsJ8B1tfwTjIsXjqeg/formResponse";
var name = "entry.1094151350";
var emailAddress = "emailAddress";
var message = "entry.46917182";



/******************************************/
/***********  IMPLEMNTACION  **************/
/******************************************/

//redes
$(document).ready(function() {
  $("#titulo1").text(titulo1);
   $(".facebook").attr("href", facebook);
   $(".instagram").attr("href", instagram);
   $(".youtube").attr("href", youtube);
   $(".whatsapp").attr("href", whatsapp);
   $(".mailto").attr("href", mailto)
});

//Fomulario
$(document).ready(function() {
   $("#form").attr("action",action);
   $("#name").attr("name",name);
   $("#emailAddress").attr("name",emailAddress);
   $("#message").attr("name",message);
});
