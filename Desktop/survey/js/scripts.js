
$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));
  const place = $("input:radio[name=place]:").val();
  const dod = $("#death").val();
  const notmiss = $("#notmiss").val();
  const beverage = $("#death").val();


  if (age >= 20) {
    $('#notdead').show();
    else {
      $('#under-20').show();
    }
  }

event.preventDefault();
});