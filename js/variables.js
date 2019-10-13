

var titulo1 = "Credivi";
var facebook = "https://www.facebook.com/credivi/"
var instagram = "https://www.instagram.com/credivi/"
var youtube = "https://www.instagram.com/credivi/"
var whatsapp = "https://api.whatsapp.com/send?phone=5491123273372&text=Podras colocar tu mensaje aquí"
var mailto = "mailto:credivi.marketing@gmail.com"

$(document).ready(function() {
  $("#titulo1").text(titulo1);
   $(".facebook").attr("href", facebook);
   $(".instagram").attr("href", instagram);
   $(".youtube").attr("href", youtube);
   $(".whatsapp").attr("href", whatsapp);
   $(".mailto").attr("href", mailto)
});