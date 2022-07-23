$(document).ready(function(){

var caja = $("#caja");

	$("#mostrar").hide();

	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();
		caja.show();
		
	});

	$("#ocultar").click(function(){
		caja.hide();
		$(this).hide();
		$("#mostrar").show();
	});


	$("#todoenuno").click(function(){
		caja.toggle('fast');
	});

	$("#animar").click(function(){
		caja.animate({
			marginLeft: '500px',
			fontSize: '40px',
			height: '110px'

						},'slow')
			.animate({
				borderRadius: '900px',
				marginTop: '80px'
			},'slow')
			.animate({
				borderRadius: '0px',
				marginLeft: '0px'
			},'slow')
			.animate({
				borderRadius: '100px',
				marginTop: '0px'
			},'slow')
			.animate({
			marginLeft: '500px',
			fontSize: '40px',
			height: '110px'

						},'slow')
		;
	});


});