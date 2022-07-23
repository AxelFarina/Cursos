$(document).ready(function(){


	// Mover elementos por la pagina
	$(".elemento").draggable();

	// Reedimencionar los elementos
	$(".elemento").resizable();

	// Seleccionar elementos
	//$(".lista-seleccionable").selectable();
	$(".lista-seleccionable").sortable({
		update: function(event, ui){
			console.log("Ha cambiado la lista");
		}
	});

	// Drop
	$("#elemento-movido").draggable();
	$("#area").droppable({
		drop: function(){
			console.log("Haz soltado algo mmg");
		}
	});

	// Efectos
	$("#mostrar").click(function(){
		$(".caja-efectos").toggle("shake");
	});

	// Tooltip
	$(document).tooltip();

	// Dialog
	$("#lanzar-popup").click(function(){
		$("#popup").dialog();
	});

	// DatePicker
	$("#calendario").datepicker();

	// Tabs
	$("#pestanas").tabs();

});