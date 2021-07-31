$(document).ready(function(){

    $('.menu').click(function(){
      $('.navbar').toggle();
      $('.menu .fa-bars').toggleClass('fa-times');
      $('section').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
      $('.navbar').hide();
      $('.menu .fa-bars').removeClass('fa-times');
      $('section').removeClass('nav-toggle');
    }); 


    
  });


  function clearall(){
    document.getElementById("login").value="";
    document.getElementById("login1").value="";
    document.getElementById("login2").value="";
    document.getElementById("login3").value="";
   

    var x3=document.getElementById("login").value;
    var x4=document.getElementById("login1").value;
    var x5=document.getElementById("login2").value;
    var x6=document.getElementById("login3").value;
    alert("No event at that place")
  }

function clearemail(){
    document.getElementById("news").value="";
    
    
}


function change(){
  document.getElementById("ka1").value="";
  document.getElementById("ka2").value="";
  document.getElementById("ka3").value="";
  document.getElementById("ka4").value="";
  document.getElementById("ka5").value="";
  
  
  var x2=document.getElementById("contact").value;
  alert("Your query sent succesfully...")
  
}