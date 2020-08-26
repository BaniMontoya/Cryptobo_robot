javascript: (function(e, s) {
	e.src = s;
	e.onload = function() {
		jQuery.noConflict();
	};
	document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js')

rand = 100;
cont = 0;
max_cont = 20;
minimo_solo = 70;
minimo_duo = 130;
intevalo = 20;
min_potencia = 2;

precio_nuevo = parseFloat($('#price-pointer-value').html().replace(" ", ""));
precio_antiguo = parseFloat($('#price-pointer-value').html().replace(" ", ""));
min_inversion = "0.00000005";

function Ganar() {
	volumen_top = parseFloat($('#volumes-top').html().replace("%", ""));
	orders_top = parseFloat($('#orders-top').html().replace("%", ""));
	volumen_bottom = parseFloat($('#volumes-bottom').html().replace("%", ""));
	orders_bottom = parseFloat($('#orders-bottom').html().replace("%", ""));
	duo1 = parseFloat(volumen_top) + parseFloat(orders_top);
	duo2 = parseFloat(volumen_bottom) + parseFloat(orders_bottom);
	$('#close_all').click();
	$('.notif_item-close').click();


	accion = "N";

	try {
		ultima_jugada = parseFloat($('#scroll-container > table > tbody > tr:nth-child(1) > td:nth-child(10)').html().replace("BTC&nbsp;", ""));
	} catch (error) {
		//console.error(error);
	}

	if ($('#btnCall').hasClass('btn-disabled') == false && cont < max_cont) {



		volumen_top = parseFloat($('#volumes-top').html().replace("%", ""));
		orders_top = parseFloat($('#orders-top').html().replace("%", ""));
		volumen_bottom = parseFloat($('#volumes-bottom').html().replace("%", ""));
		orders_bottom = parseFloat($('#orders-bottom').html().replace("%", ""));


		if (cont < max_cont) {
			if (jQuery('.highcharts-point')[jQuery('.highcharts-point').size() - 1].outerHTML.search("up") == -1 && jQuery('.highcharts-point')[jQuery('.highcharts-point').size() - 2].outerHTML.search("up") == -1 && jQuery('.highcharts-point')[jQuery('.highcharts-point').size() - 3].outerHTML.search("up") == -1) {

				$('#btnPut').click();
				cont = cont + 1;
			}

			if (jQuery('.highcharts-point')[jQuery('.highcharts-point').size() - 1].outerHTML.search("up") != -1 && jQuery('.highcharts-point')[jQuery('.highcharts-point').size() - 2].outerHTML.search("up") != -1 && jQuery('.highcharts-point')[jQuery('.highcharts-point').size() - 3].outerHTML.search("up") != -1) {

				$('#btnCall').click();
				cont = cont + 1;
			}

			if (jQuery('.highcharts-point')[jQuery('.highcharts-point').size() - 1].outerHTML.search("up") == -1 && jQuery('.highcharts-point')[jQuery('.highcharts-point').size() - 2].outerHTML.search("up") == -1 && jQuery('.highcharts-point')[jQuery('.highcharts-point').size() - 3].outerHTML.search("up") != -1 && jQuery('.highcharts-point')[jQuery('.highcharts-point').size() - 4].outerHTML.search("up") != -1) {

				$('#btnPut').click();
				cont = cont + 1;
			}

			if (jQuery('.highcharts-point')[jQuery('.highcharts-point').size() - 1].outerHTML.search("up") != -1 && jQuery('.highcharts-point')[jQuery('.highcharts-point').size() - 2].outerHTML.search("up") != -1 && jQuery('.highcharts-point')[jQuery('.highcharts-point').size() - 3].outerHTML.search("up") == -1 && jQuery('.highcharts-point')[jQuery('.highcharts-point').size() - 4].outerHTML.search("up") == -1) {

				$('#btnCall').click();
				cont = cont + 1;
			}


			if (parseFloat(volumen_top) >= minimo_solo || parseFloat(orders_top) >= minimo_solo) {

				$('#btnCall').click();
				cont = cont + 1;
			}
			if (parseFloat(parseFloat(volumen_top) + parseFloat(orders_top)) >= minimo_duo) {

				$('#btnCall').click();
				cont = cont + 1;
			}


			if (parseFloat(volumen_bottom) >= minimo_solo || parseFloat(orders_bottom) >= minimo_solo) {

				$('#btnPut').click();
				cont = cont + 1;
			}
			if (parseFloat(parseFloat(volumen_bottom) + parseFloat(orders_bottom)) >= minimo_duo) {

				$('#btnPut').click();
				cont = cont + 1;
			}

		}

	}
	if ($('#btnCall').hasClass('btn-disabled') == true) {
		cont = 0;
	}
}
setInterval(function() {
	Ganar();
}, rand);


setInterval(function() {
	$('#dealsButtonsRegion > ul > li:nth-child(2) > span').click();
}, 10000);
