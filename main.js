/* global $*/

$(document).ready(function(){
  $("#sp_navi_btn").click(function(){
    $(".sp_navi_li").slideToggle();
  });
});

$(window).load(function(){
  $(".product_small img").click(function(){
    var img_src = $(this).attr("src");
    $(".product_big img").attr("src", img_src);
  });
});