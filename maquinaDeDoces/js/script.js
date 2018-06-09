 $('#kitkatQtd').change(function() {
   // alert( $('#kitkatQtd').val() );
     // Capture the entered values of two input boxes
        var doce01 = document.getElementById('kitkatQtd').value * 0.8;
        var doce02 = document.getElementById('diamanteNegroQtd').value * 0.75;
        var doce03 = document.getElementById('suflairQtd').value * 1.0 ;

        // Add them together and display
        var sum = doce01 + doce02 + doce03;

        document.getElementById('total').value = sum.toFixed(2);
        localStorage.setItem("valorCompra", sum.toFixed(2));

});


function carregaValorDaCompra() {
       // Retrieve
document.getElementById("valorDoces").value = localStorage.getItem("valorCompra");


};

 $('#diamanteNegroQtd').change(function() {
    $('#kitkatQtd').change();

});

  $('#suflairQtd').change(function() {
   $('#kitkatQtd').change();

});

window.onload = carregaValorDaCompra();

$('#pgMoeda100').change(function() {
        var moeda100 = document.getElementById('pgMoeda100').value * 1;
        var moeda050 = document.getElementById('pgMoeda050').value * 0.5;
        var moeda025 = document.getElementById('pgMoeda025').value * 0.25;
        var moeda010 = document.getElementById('pgMoeda010').value * 0.1;
        var moeda005 = document.getElementById('pgMoeda005').value * 0.05;
        var moeda001 = document.getElementById('pgMoeda001').value * 0.01;

        var sum = moeda100 + moeda050 + moeda025 + moeda010 + moeda005 + moeda001;

        document.getElementById('pagamento').value = sum.toFixed(2);


});

$('#pgMoeda050').change(function() {
   $('#pgMoeda100').change();

});
$('#pgMoeda025').change(function() {
   $('#pgMoeda100').change();

});
$('#pgMoeda010').change(function() {
   $('#pgMoeda100').change();

});
$('#pgMoeda005').change(function() {
   $('#pgMoeda100').change();

});
$('#pgMoeda001').change(function() {
   $('#pgMoeda100').change();

});
$("#btnResetPagamento").on("click", function(e) {
  document.getElementById('pgMoeda100').value=0;
  document.getElementById('pgMoeda050').value=0;
  document.getElementById('pgMoeda025').value=0;
  document.getElementById('pgMoeda010').value=0;
  document.getElementById('pgMoeda005').value=0;
  document.getElementById('pgMoeda001').value=0; 
  $('#pgMoeda100').change();

});

$("#btnConcluiCompra").on("click", function(e) {
  var valorCompra = document.getElementById('valorDoces').value;
  var valorPago = document.getElementById('pagamento').value;

  if(parseFloat(valorPago).toFixed(2) < parseFloat(valorCompra).toFixed(2)){
    alert("Valor insuficiente");

  }else{
    var troco = calculaTroco(valorPago,valorCompra);
    var currentdate = new Date(); 
    var datetime = "Compra realizada em: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " às "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    var dia = currentdate.getDate();
    var mes = currentdate.getMonth()+1;
    var ano = currentdate.getFullYear();
    var cliente = document.getElementById('nomeCliente').value;
    var atendente = document.getElementById('selectOne').value;
    criarVendaJSON(dia, mes, ano, cliente, valorCompra, valorPago, troco, atendente);

    alert(datetime);

  }
  
});

function calculaTroco(valorPago, valorCompra) {
    //Remover as casas decimais
    var trocoTotal = 100*((valorPago - valorCompra).toFixed(2));

    //Variável criada apenas para facilitar a leitura, virtualmente desnecessária
    var trocoRestante = trocoTotal;
    //Lembrando que 100 significa 100 centavos, ou seja, 1 real
    var moedasDe100 = parseInt(trocoRestante / 100);
    trocoRestante = trocoRestante % 100;
    


    var moedasDe050 = parseInt(trocoRestante / 50);
    trocoRestante = trocoRestante  % 50;
    var moedasDe025 = parseInt(trocoRestante / 25);
    trocoRestante = trocoRestante   % 25;
    

    var moedasDe010 = parseInt(trocoRestante / 10);
    trocoRestante = trocoRestante  % 10;
    var moedasDe005 = parseInt(trocoRestante / 5);
    trocoRestante = trocoRestante  % 5;
    var moedasDe001 = parseInt(trocoRestante / 1);
    trocoRestante = trocoRestante  % 1;

    document.getElementById('trocoMoeda100').value=moedasDe100; 
    document.getElementById('trocoMoeda050').value=moedasDe050; 
    document.getElementById('trocoMoeda025').value=moedasDe025; 
    document.getElementById('trocoMoeda010').value=moedasDe010; 
    document.getElementById('trocoMoeda005').value=moedasDe005; 
    document.getElementById('trocoMoeda001').value=moedasDe001; 
    return (valorPago - valorCompra).toFixed(2);
           
};

function criarVendaJSON(vDia, vMes, vAno, vCliente, vValorCompra, vValorPago, vTroco, vAtendente){

var venda = {
  dia:vDia,
  mes:vMes,
  ano:vAno,
  cliente:vCliente,
  valorCompra:vValorCompra,
  valorPago:vValorPago,
  troco:vTroco,
  atendente: vAtendente
};

alert(venda.dia);

};