// Your code goes here.
$(function(){
  $(".thumbnail").on("click", function(event){
    let currentImg = $(this).find("img");
    let altImg = $(currentImg).attr("alt");
    let srcImg = $(currentImg).attr("src");
    $(".hero").find("img").attr({src:srcImg, alt:altImg});
  });
  
});