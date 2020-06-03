
//if (age >= 20) {
  //$('#notdead').show();
//} else if (age ===21) {
  //alert("Welcome to the afterlife")
//} else {
    //$('#under-20').show();
  //}

$(document).ready(function() {
  $("form#ghostquiz").submit(function(event) {
  //const age = parseInt(prompt("How old are you?"));
  const place = $("input:radio[name=place]:").val();
  const dod = $("#death").val();
  const notmiss = $("#notmiss").val();
  $(".results").text(result);
  
  event.preventDefault();
  });
});