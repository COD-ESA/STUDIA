$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		console.log("отправил заказ");
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../php/phpmailer.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
