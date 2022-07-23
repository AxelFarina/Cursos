$(document).ready(function(){


	// Slider

	if(window.location.href.indexOf('index') > -1){

	 $('.galeria').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200
 		});

	}

	 // Posts
	 if(window.location.href.indexOf('index') > -1){
	 var posts = [
	 	{
	 		tittle: 'prueba de titulo 1',
	 		date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
	 		content: 'rem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt congue blandit. Morbi volutpat eget mauris at euismod. Integer laoreet ac dolor vitae sodales. Donec eu iaculis dui, nec feugiat nulla. Fusce eu orci ultrices, sodales mi id, dictum quam. Mauris tristique in lacus ut dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla convallis nibh vulputate ullamcorper ullamcorper. Duis rutrum fringilla augue et consequat. Duis eget turpis eget ex fermentum euismod id non sem. Quisque malesuada metus sed massa euismod, et tempus nisl gravida. Nam et leo eu est euismod tristique.'
	 	},
	 	{
	 		tittle: 'prueba de titulo 2',
	 		date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
	 		content: 'rem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt congue blandit. Morbi volutpat eget mauris at euismod. Integer laoreet ac dolor vitae sodales. Donec eu iaculis dui, nec feugiat nulla. Fusce eu orci ultrices, sodales mi id, dictum quam. Mauris tristique in lacus ut dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla convallis nibh vulputate ullamcorper ullamcorper. Duis rutrum fringilla augue et consequat. Duis eget turpis eget ex fermentum euismod id non sem. Quisque malesuada metus sed massa euismod, et tempus nisl gravida. Nam et leo eu est euismod tristique.'
	 	},
	 	{
	 		tittle: 'prueba de titulo 3',
	 		date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
	 		content: 'rem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt congue blandit. Morbi volutpat eget mauris at euismod. Integer laoreet ac dolor vitae sodales. Donec eu iaculis dui, nec feugiat nulla. Fusce eu orci ultrices, sodales mi id, dictum quam. Mauris tristique in lacus ut dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla convallis nibh vulputate ullamcorper ullamcorper. Duis rutrum fringilla augue et consequat. Duis eget turpis eget ex fermentum euismod id non sem. Quisque malesuada metus sed massa euismod, et tempus nisl gravida. Nam et leo eu est euismod tristique.'
	 	},
	 	{
	 		tittle: 'prueba de titulo 4',
	 		date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
	 		content: 'rem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt congue blandit. Morbi volutpat eget mauris at euismod. Integer laoreet ac dolor vitae sodales. Donec eu iaculis dui, nec feugiat nulla. Fusce eu orci ultrices, sodales mi id, dictum quam. Mauris tristique in lacus ut dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla convallis nibh vulputate ullamcorper ullamcorper. Duis rutrum fringilla augue et consequat. Duis eget turpis eget ex fermentum euismod id non sem. Quisque malesuada metus sed massa euismod, et tempus nisl gravida. Nam et leo eu est euismod tristique.'
	 	},
	 	{
	 		tittle: 'prueba de titulo 5',
	 		date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
	 		content: 'rem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt congue blandit. Morbi volutpat eget mauris at euismod. Integer laoreet ac dolor vitae sodales. Donec eu iaculis dui, nec feugiat nulla. Fusce eu orci ultrices, sodales mi id, dictum quam. Mauris tristique in lacus ut dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla convallis nibh vulputate ullamcorper ullamcorper. Duis rutrum fringilla augue et consequat. Duis eget turpis eget ex fermentum euismod id non sem. Quisque malesuada metus sed massa euismod, et tempus nisl gravida. Nam et leo eu est euismod tristique.'
	 	},

	 ];

	 posts.forEach((item,index) => {
	 	var post = `
	 	<article class="post">
			<h2>${item.tittle}</h2>
			<span class="date">${item.date}Fecha de publicacion</span>
			<p>
			${item.content}
			</p>
			<a href="#" class="button-more">Leer mas</a>
		</article>
	 	`;

	 	$("#post").append(post);

	 });
}

	 // Selector de tema
	 var theme = $("#theme");
	 $("#to-green").click(function(){
	 	theme.attr("href", "css/green.css")
	 });

	 $("#to-red").click(function(){
	 	theme.attr("href", "css/red.css")
	 });

	 $("#to-blue").click(function(){
	 	theme.attr("href", "css/blue.css")
	 });

	 // Scroll arriba de la web
	 $('.subir').click(function(e){
	 	e.preventDefault();


	 	$('html, body').animate({
	 		scrollTop: 0
	 	}, 500);

	 	return false;

	 });

	 // Login falso
	 $("#login form").submit(function(){
	 	var form_name = $("#form_name").val();

	 	localStorage.setItem("form_name", form_name);
	 });

	 var form_name = localStorage.getItem("form_name");

	 if(form_name != null && form_name != "undefined"){
	 	var about_parrafo = $("#about p");

	 	about_parrafo.html("<br><strong>"+"Bienvenido, "+form_name+"</strong> ");
	 	about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");

	 	$("#login").hide();


	 	$("#logout").click(function(){
	 		localStorage.clear();
	 		location.reload();
	 	});
	 }
	 
	 // Acordeon
	 if(window.location.href.indexOf('about') > -1){
	 	$("#acordeon").accordion();
	 }

	 // Reloj
	 if(window.location.href.indexOf('reloj') > -1){


	 	setInterval(function(){

	 		var reloj = moment().format("hh:mm:ss");
	 		$("#reloj").html(reloj);

	 	}, 1000);
	 	

	 }

		 // Validacion
		 if(window.location.href.indexOf('contact') > -1){

		 	$("form input[name='date']").datepicker({
		 		dateFormat: 'dd-mm-yy'
		 	});

		 $.validate({
		 	lang:'es'
		 });

	}


});