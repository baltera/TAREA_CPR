	function show_error(el,msg){
            var elto= $('#input_'+el);
                elto.tooltip({title:msg,placement:"top",trigger:"manual",template:'<div class="tooltip tooltip-error"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'}).tooltip("show");
                elto.focus();
                setTimeout(function(){elto.tooltip("destroy")},5000)};
	
	$(document).ready(function() {

	// form_dominio 
	var validator_dominio =    new FormValidator("dominio",[{name:"nombre",display:"Nombre",rules:"required|max_length[80]"},
			{name:"correo",display:"Correo electrónico",rules:"required|valid_email"},
			{name:"organizacion",display:"Nombre de la Organización",rules:"required|max_length[100]"},
			
			{name:"facnombre",display:"Nombre de Contacto",rules:"required|min_length[3]|max_length[50]"},
			{name:"facorganizacion",display:"Nombre de la Organización",rules:"required|min_length[3]|max_length[50]"},
			{name:"facdireccion",display:"Dirección",rules:"required|min_length[3]|max_length[50]"},
			{name:"facciudad",display:"Ciudades",rules:"required|min_length[3]|max_length[50]"},
			{name:"facpostal",display:"Código Postal",rules:"required|min_length[3]|max_length[50]"},
			{name:"facnif",display:"DNI - CUIL",rules:"required|min_length[3]|max_length[50]"},
			{name:"acepto_ppd",display:"Política",rules:"required|callback_check_politicas"},
			{name:"facemail",display:"E-mail",rules:"required|valid_email"},
			{name:"acepto_ppd",display:"Políticas",rules:"required|callback_check_politicas"}],

	function(er,ev){if(er.length>0){ ev.preventDefault();show_error(er[0].name,er[0].message);}else document.dominio.submit();});
	// form_hosting 
	var validator_hosting = new FormValidator("hosting",[
			{name:"dominio",display:"Dominio",rules:"required"},
			{name:"nombre",display:"Nombre",rules:"required|max_length[80]"},
			{name:"correo",display:"Correo electrónico",rules:"required|valid_email"},
			{name:"direccion",display:"Dirección",rules:"required"},
			{name:"cp",display:"Código Postal",rules:"required"},
			{name:"ciudad",display:"Ciudad",rules:"required"},
			{name:"nif_cif",display:"DNI - CUIL",rules:"required"},
			{name:"contacto",display:"Contacto",rules:"valid_email"},
			{name:"acepto_ppd",display:"Política",rules:"required|callback_check_politicas"}
	  ],

	function(er,ev){if(er.length>0){ ev.preventDefault();show_error(er[0].name,er[0].message);}else document.hosting.submit();});


	 var validator_domainsearch = new FormValidator("DomainSearch",[
		{name:"domain",display:"Dominio",rules:"required|alpha_numeric|max_length[80]"}
	],

	function(er,ev){if(er.length>0){ ev.preventDefault();show_error(er[0].name,er[0].message);}else document.hosting.submit();});

	validator_dominio.registerCallback('check_politicas', function(value) {

		if (jQuery('#input_acepto_ppd').is(':checked')) {
			return true;
		}
		return false;
	})
	.setMessage('check_politicas', 'Debe aceptar las políticas de seguridad');

	validator_hosting.registerCallback('check_politicas', function(value) {

		if (jQuery('#input_acepto_ppd').is(':checked')) {
			return true;
		}

		return false;
	})
	.setMessage('check_politicas', 'Debe aceptar las políticas de seguridad');
})