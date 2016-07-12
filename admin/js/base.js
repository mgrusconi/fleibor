$(function () {
	
	
	$('.subnavbar').find ('li').each (function (i) {
	
		var mod = i % 3;
		
		if (mod === 2) {
			$(this).addClass ('subnavbar-open-right');
		}
		
	});

	$(document).ready(function() {
		$('#select-permiso-usuario').change(function(event){

			$.ajax({url: "includes/ajax_request.php?action=getSelectPermisos&categoria="+event.target.value, success: function(result){
				$('#div-permiso-usuario').html(result);
			}});
		});

		$('#select-envase-medidas').change(function(event){
			$.ajax({url: "includes/ajax_request.php?action=getSelectEnvaseMedidas&envase="+event.target.value, success: function(result){
				$('#div-envase-medidas').html(result);
			}});
		});
		$('#select-medida-unidades').change(function(event){
			$.ajax({url: "includes/ajax_request.php?action=getSelectMedidaUnidades&medida="+event.target.value, success: function(result){
				$('#div-medida-unidades').html(result);
			}});
		});
		$('#select-envase-producto').change(function(event){
			$.ajax({url: "includes/ajax_request.php?action=getMedidasByEnvase&envase="+event.target.value, success: function(result){
				console.log(result);
				$('#div-envase-producto').html(result);
			}});
		});
		$('.select-medida-pedido').change(function(event){
			var id = $(this).attr("id").split('-');
			id = id['3'];
			$.ajax({url: "includes/ajax_request.php?action=getSelectUnidadesPedidos&id_producto="+id+"&id_medida="+event.target.value, success: function(result){
				$('#empaque-pedido-'+id).html(result);
			}});
		});

		$('#select-tipo-producto').change(function(){
			var myValue = $(this).val();
			if(myValue == 'color'){
				$('#listado-colores').removeClass('ocultar');
				$('#listado-gustos').addClass('ocultar');
			}else{
				$('#listado-gustos').removeClass('ocultar');
				$('#listado-colores').addClass('ocultar');
			}
		});


		$(".btn-medidas").live('click', function() {
			var id = $(this).attr("id");
			if($(this).find("span").hasClass('icon-chevron-down')){
				$(this).find("span").removeClass('icon-chevron-down');
				$(this).find("span").addClass('icon-chevron-up');
			}else{
				$(this).find("span").removeClass('icon-chevron-up');
				$(this).find("span").addClass('icon-chevron-down');
			}
			$("#medida-" + id).toggle(function(){});
		});

		$(".option-to-cart").live('click', function() {
			var id = $(this).attr("id").split('-');
			id = id['2'];
			//alert(id);

			if($(this).html() == 'Ocultar opciones'){
				$(this).removeClass('btn-danger');
				$(this).addClass('btn-invert');
				$(this).html('Ver opciones');
				$("#product-"+id).addClass('ocultar');
				$(this).addClass('btn-invert');
			}else{
				$(this).removeClass('btn-invert');
				$(this).addClass('btn-danger');
				$("#product-"+id).removeClass('ocultar');
				$(this).html('Ocultar opciones');
			}
			$("#container-product-" + id).toggle(function(){});
		});

		$(".add-to-cart").live('click', function() {
			var id = $(this).attr("id");
			//alert(id);
		});
	});






});