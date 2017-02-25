var imgSeg = [
  "images/dt.png",
  "images/gilgamesh.png",
  "images/hilda.png",
  "images/more_hilda.png",
  "images/lucifer.png",
  "images/rebellion.png",
  "images/deimos.png"
];

var count = 0;

$(document).ready(function() {
   $("#next").on("click", function() {

     if (count == imgSeg.length - 1) {
       count = 0;
     }else{
       count = count + 1;
     }
     $("img").attr("src",imgSeg[count])
   });

   //----------------------------------

   $("#prev").on("click", function() {
     if(count == 0) {
       count = imgSeg.length - 1
     }else{
       count = count - 1;
     }

     $("img").attr("src",imgSeg[count]);
   })
 });
