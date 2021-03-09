// This is a JavaScript file
$(document).on("click","#somar",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var resultado = parseFloat(valor1) + parseFloat(valor2);

  $("#resultado").val(resultado);
});
$(document).on("click","#subtracao",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var resultado = parseFloat(valor1) - parseFloat(valor2);

  $("#resultado").val(resultado);
});
$(document).on("click","#multiplicacao",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var resultado = parseFloat(valor1) * parseFloat(valor2);

  $("#resultado").val(resultado);
});
$(document).on("click","#divisao",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var resultado = parseFloat(valor1) / parseFloat(valor2);

  $("#resultado").val(resultado);
});
$(document).on("click","#exponenciacao",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var resultado = parseFloat(valor1) / parseFloat(valor2);

  $("#resultado").val(resultado);
});
$(document).on("click","#exponenciacao",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var resultado = parseFloat(Math.pow(valor1,valor2));

  $("#resultado").val(resultado);
});
