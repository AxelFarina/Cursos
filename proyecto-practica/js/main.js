$(document).ready(function(){

	//Slider
	if(window.location.href.indexOf('index') || window.location.href.indexOf('akatsuki') || window.location.href.indexOf('hxh') > -1){
		 $('.galeria').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 1200
	  });
}
	 	//Galeria de imagenes con direccion a su foto
	 	//NO SE PUDO, ME LLEVO EL DIABLO


	 //Posts
	 var posts = [
	 	{
	 		tittle: 'One Piece',
	 		date: 'Publicado el dia '+ moment().date()+ ' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
	 		content: 'One Piece es un anime y manga escrito e ilustrado por Eiichirō Oda y actualmente es el manga más comprado en el mundo. Comenzó a publicarse en la revista japonesa Weekly Shōnen Jump el 22 de julio de 1997 y a la fecha se han publicado 100 volúmenes, por otra parte Toei Animation realiza el anime que se transmite en Fuji TV desde el 20 de octubre de 1999 el cual está en emisión actualmente.'
	 	},
	 	{
	 		tittle: 'Argumento',
	 		date: 'Publicado el dia '+ moment().date()+ ' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
	 		content: 'La serie comienza con la ejecución de Gol D. Roger, un hombre conocido como El Rey de los Piratas. Justo antes de su muerte, Roger hace mención de su gran tesoro legendario, el One Piece y que puede ser tomado por quien lo encuentre. Esto marca el inicio de una era conocida como la Gran Era Pirata. Como resultado, un sin número de piratas zarparon hacia el Grand Line con el objetivo de encontrarlo.'
	 	},
	 	{
	 		tittle: 'Frutas del Diablo',
	 		date: 'Publicado el dia '+ moment().date()+ ' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
	 		content: 'Las akuma no mi «Frutas del Diablo» son un tipo de frutas que, si se ingieren, conceden poderes sobrehumanos a quien las consuma, aunque con la consecuencia de no poder nadar. Existen tres tipos: <ul><li><p><strong>Zoan:</strong> Permite a su usuario transformarse, ya sea parcial o totalmente en un animal específico; si bien estos pueden ser animales comunes, también existen usuarios que pueden mutar en criaturas mitológicas como el fénix o en animales prehistóricos como dinosaurios.</p></li><li><p><strong>Logia:</strong> Otorga al usuario habilidades «capaces de transformar su cuerpo en el elemento al que la fruta representa», haciéndolo inmune a ataques físicos, es el tipo de fruta más poderosa entre las tres, pero este tipo de fruta puede ser contrarrestada por usuarios de haki de armadura.</p></li><li><p><strong>Paramecia:</strong> Brinda poderes sobrehumanos a quien haya consumido. Estos poderes tienen que ver con el cuerpo físico, manipular el medio ambiente o producir algún tipo de sustancia y resulta ser la más común de las tres.</p></li></ul>'
	 	},
	 	{
	 		tittle: 'Haki',
	 		date: 'Publicado el dia '+ moment().date()+ ' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
	 		content: 'Otra habilidad, llamada «Haki» es un poder latente que se encuentra en todos los seres vivos del mundo de One Piece, aunque en la mayoría de ellos se encuentra en un estado de reposo. Sin embargo, una desventaja latente del Haki es que si se llega a utilizar de manera frecuente, este dejará de funcionar por un cierto período de tiempo. Existen tres variedades principales del Haki: <ul><li><p><strong>Kenbunshoku no Haki:</strong> Este tipo permite percibir la presencia de otros seres y también predecir cuáles serán sus movimientos.</p></li><li><p><strong>Busōshoku no Haki:</strong> Este tipo permite crear una especie de armadura irrompible que permite golpear a cualquier usuario de una Fruta del Diablo que modifica las propiedades de su cuerpo, por ejemplo ser capaz de dañar a un hombre cuyo cuerpo normalmente es etéreo e invulnerable a los ataques físicos comunes.</p></li><li><p><strong>Haōshoku no Haki:</strong> El tipo único de Haki que no puede ser entrenado, sino que quien lo posea debió haber nacido con él. Le permite a su usuario intimidar aquellos seres que tengan una fuerza de voluntad débil, dejando inconscientes a cualquier individuo que esté cerca de quien lo posea. Se ha confirmado que el Haki aumenta a medida que aumenta la voluntad del usuario, también puede interaccionar con el entorno, (dañando el espacio cercano).</p></li></ul>'
	 	},
	 ];

	 posts.forEach((item, index) =>{
	 	var post = `
	 		<article class="post">
						<h2>${item.tittle}</h2>
						<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
				<a href="#" class="button-more">Leer Mas</a>
			</article>
	 	`;

	 	$("#posts").append(post);

	 });

	 //Posts De akatsuki
	 var postsk = [
	 	{
	 		tittle: 'Akatsuki',
	 		date: 'Publicado el dia '+ moment().date()+ ' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
	 		content: 'Akatsuki fue en sus comienzos, una organización que buscaba acabar con la tiranía y la opresión a través de medios pacíficos, pero que pronto cambiaría sus métodos hasta volverse una organización criminal constituida por varios ninjas renegados de Clase S que se convirtieron en los principales antagonistas de la serie'
	 	},
	 	{
	 		tittle: 'Vestimenta',
	 		date: 'Publicado el dia '+ moment().date()+ ' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
	 		content: 'Los miembros de Akatsuki tienen una forma de vestir similar entre ellos, lo cual se harían notar si una aldea es alertada de su presencia. Inicialmente sus miembros llevaban una capa la cual era de color oscuro por fuera y lila por dentro la capa llevaba un cinturón sobre la cintura para poder llevar bolsas porta armas después de los Akatsuki comenzaron a llevar una larga capa de color negro, interior rojo y cuello largo para cubrirles el rostro, decorada con unas nubes de color rojo, esta capa tiene una variación en la que el cuello largo ya no está y en su lugar tiene una capucha. <ul id="img"><img src="img/bata.jpg" /></ul>'
	 	},
	 	{
	 		tittle: 'Objetivo principal',
	 		date: 'Publicado el dia '+ moment().date()+ ' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
	 		content: 'Las Bestias con Cola, nueve demonios "Gigantescos" de inmenso poder, son el objetivo principal de gran parte de los miembros de Akatsuki. A cada miembro se le asigna la captura de una de las nueve bestias vivas o en la mayoría de los casos, la persona que tiene a la bestia en ella, es decir los Jinchūriki. Sin embargo, Akatsuki solo logró sellar a siete de las nueve bestias antes del inicio de la Cuarta Guerra Mundial Shinobi.'
	 	},
	 	{
	 		tittle: 'Curiosidades',
	 		date: 'Publicado el dia '+ moment().date()+ ' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
	 		content: '"Akatsuki " tiene dos significados. Uno es "Amanecer" que es el mas usado; y el otro es "Luna Roja" (Aka(赤) "rojo" y Tsuki(月) "luna" ), de hecho, originalmente esto representaba un juego de palabras. El nombre de la organización tiene mucha similitud con el plan de Madara y Obito el cual es proyectar su Sharingan desde la Luna. Las nubes rojas de la capa de Akatsuki simbolizan la sangre que cayó de los miembros de Amegakure en la guerra.'
	 	},
	 ];

	 postsk.forEach((item, index) =>{
	 	var postk = `
	 		<article class="post">
						<h2>${item.tittle}</h2>
						<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
				<a href="#" class="button-more">Leer Mas</a>
			</article>
	 	`;

	 	$("#postsk").append(postk);

	 });


	  //Posts De hxh
	 var postsh = [
	 	{
	 		tittle: 'Hunter X Hunter',
	 		date: 'Publicado el dia '+ moment().date()+ ' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
	 		content: 'La historia tiene como protagonista a Gon Freecss, un niño de doce años que desea encontrar a su padre a toda costa, por lo que decide convertirse en «cazador», justo como él, y de alguna forma hallar su paradero. A medida que avanza la historia, Gon se hace amigo de otros tres aspirantes a cazador: Leorio, Kurapika y Killua, quienes lo acompañarán en sus aventuras.'
	 	},
	 	{
	 		tittle: 'Argumento',
	 		date: 'Publicado el dia '+ moment().date()+ ' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
	 		content: 'Doce años antes del inicio de la historia, Ging Freecss abandonó a su hijo Gon en manos de su tía Mito en Isla Ballena. Gon, quien siempre creyó que sus padres habían muerto, descubre un día gracias al aprendiz de su padre, Kite, que este aún se encuentra con vida y se ha convertido en uno de los mejores cazadores, individuos de élite y acreditados para el rastreo de tesoros secretos, bestias exóticas e, incluso, otros individuos. Motivado por esta revelación, Gon decide dejar su hogar y presentarse al examen de cazador, una serie de desafíos que buscan probar las habilidades, supervivencia y trabajo en equipo de sus participantes.'
	 	},
	 	{
	 		tittle: 'Nen',
	 		date: 'Publicado el dia '+ moment().date()+ ' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
	 		content: 'Nen (念, fuerza mental). Es una técnica que permite a un ser vivo usar y manipular su propia energía vital (conocida como Aura). La palabra "Nen" también se puede utilizar en una conversación para referirse al aura. Aprender a usar Nen es el último paso para convertirse en un Cazador profesional debido a que los trabajos más solicitados requieren el uso del mismo como requisito mínimo. La técnica tiene la capacidad de mejorar la fuerza de los ataques físicos u objetos en función de la cantidad de aura empleada y el tipo aura de un individuo. Debido a que uno puede elaborar casi cualquier tipo de poder psíquico con sólo usar mente, el Nen es considerado un poder desconocido y peligroso para el público en general.'
	 	},
	 	{
	 		tittle: 'Gon Rage',
	 		date: 'Publicado el dia '+ moment().date()+ ' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
	 		content: '<strong>¿Qué es el Rage de Gon?</strong><br> Es cuando Gon al estar anteriormente lleno de odió finalmente estalla haciéndolo madurar físicamente a sí mismo años en el futuro para obtener la fuerza que con el tiempo tendría antes. Gon quién solo quería ver lo bueno en las personas a pesar de lo que hayan hecho perdió en ese momento todo rastro de amabilidad y inocencia solo sentía un odio enorme y tenía un deseo insaciable de venganza por quién había matado a su amigo la gota que derramó el vaso fue cuando neferpitou le dijo la verdad a Gon sobre qué ya no podía revivir a su amigo Kite que sólo lo mantenía como títere con sus habilidad Nen, para este momento Gon obviamente no sabía que su amigo estaba muerto tenía las esperanzas de que pudiera vivir aún esto hizo que desatará toda su ira de golpe.<ul id="imgh"><img src="img/gonm.jpg" /></ul>'
	 	},
	 ];

	 postsh.forEach((item, index) =>{
	 	var postk = `
	 		<article class="post">
						<h2>${item.tittle}</h2>
						<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
				<a href="#" class="button-more">Leer Mas</a>
			</article>
	 	`;

	 	$("#postsh").append(postk);

	 });





	 //Selector de tema
	 var theme = $("#theme");
	 
	 $("#to-green").click(function(){
	 		theme.attr("href","css/green.css");
	 });

	 $("#to-red").click(function(){
	 		theme.attr("href","css/red.css");
	 });

	 $("#to-blue").click(function(){
	 		theme.attr("href","css/blue.css");
	 });

	 // Scroll arriba de la web
	 $(".subir").click(function(e){
	 	e.preventDefault();

	 	$('html, body').animate({
	 		scrollTop: 0

	 	}, 500);

	 	return false;

	 });

	 $("#login form").submit(function(){
	 	var form_name = $("#form_name").val();

	 	localStorage.setItem("form_name", form_name);

	 });

	 var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name !="undefined" ){
		var about_parrafo = $("#about p");

		 about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
		 about_parrafo.append("<br><a href='#' id='logout'>Cerrar Sesion</a>")

		 $("#login").hide();

		 $("#logout").click(function(){
		 	localStorage.clear();
		 	location.reload();
		 });
	}

	// Acordeon
	 if(window.location.href.indexOf('contacto') > -1){
	 	$("#acordeon").accordion();
	 }

	 // Reloj
	 if(window.location.href.indexOf('contacto') > -1){


	 	setInterval(function(){

	 		var reloj = moment().format("hh:mm:ss");
	 		$("#reloj").html(reloj);

	 	}, 1000);
	 	

	 }

});