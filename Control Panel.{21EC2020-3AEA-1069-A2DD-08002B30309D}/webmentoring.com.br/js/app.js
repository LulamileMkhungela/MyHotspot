function sendContact() {
		$('#enviar').attr('disabled', 'disabled');
		$(".submit-button").attr("disabled", true);
	    var valid;
	    valid = validateContact();
	    if(valid) {
        jQuery.ajax({
            url: "../contact_mail.php",
            data:'name='+$("#name").val()+'&email='+
            $("#email").val()+'&mensagem='+
            $("#mensagem").val()+'&fone='+
            $("#fone").val(),
            type: "POST",
            success:function(data){
                $("#mail-status").html(data);
                $(".submit-button").attr("disabled", true);
                $(".w-form-done").css("display", "block");
            },
            error:function (){}
        });
    }
}
function validateContact() {
    var valid = true;
    $(".w-input").css('background-color','');
  //  $(".info").html('');
    if(!$("#name").val()) {
      //  $("#name-info").html("(required)");
        $("#name").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#email").val()) {
     //   $("#email-info").html("(required)");
        $("#email").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
       // $("#email-info").html("(invalid)");
        $("#email").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#mensagem").val()) {
       // $("#content-info").html("(required)");
        $("#mensagem").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#fone").val()) {
        // $("#content-info").html("(required)");
         $("#fone").css('background-color','#FFFFDF');
         valid = false;
     }
    return valid;
}
