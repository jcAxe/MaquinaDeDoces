 $('#kitkatQtd').change(function() {
   // alert( $('#kitkatQtd').val() );
     // Capture the entered values of two input boxes
        var my_input1 = document.getElementById('kitkatQtd').value * 0.8;
        var my_input2 = document.getElementById('diamanteNegroQtd').value * 0.75;
        var my_input3 = document.getElementById('suflairQtd').value * 1.0 ;

        // Add them together and display
        var sum = my_input1 + my_input2 + my_input3;

        document.getElementById('total').value = sum.toFixed(2);


});

 $('#diamanteNegroQtd').change(function() {
    $('#kitkatQtd').change();

});

  $('#suflairQtd').change(function() {
   $('#kitkatQtd').change();

});