$(document).ready(function(){

	//Categorias para seleccionar peliculas
	$('ul.dropdown-menu li a').click(function() {
		var categoria = $(this).text();
		
		if(categoria == 'Todas') {
			$('div.pelicula div').fadeIn('slow').removeClass('hidden');
		}
		else {
			$('.pelicula div').each(function() {
				if(!$(this).hasClass(categoria)) {
					$(this).fadeOut('normal').addClass('hidden');
				}
				else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		return false;
	});
	//$("div.video")
	//$(".titulo")
	//$("p")
	//$(".actores img")
	//$("h5")

	$(".pelicula div.Acción").click(function() {
		$("a.accion1").attr("href", "peliculas.html");
		window.open(url, '_blank');
		$(".titulo").text("avatar");
		$("p").text("La ultima saga de avatar")
	});

});

