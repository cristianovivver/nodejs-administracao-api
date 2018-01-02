var $Login = (function ($, window, document, undefined) {
	// alias para variaveis globais
	var containerSelector = '.container-login';
	// Inicializa cada ação da tela, funções e métodos
	return {
		go : function () {
			if ( $(containerSelector).length ){
				for (var i in $Login.init) {
					$Login.init[i]();
				}
			};
		},
		init : {
			// Initialize páginas
			inicializa : function() {
						
            },
            login: function(){
                $(document).on('click', '#btn-login', function(){
					// criar um formData
					var data = JSON.stringify({
					  "login": $('#login').val(),
					  "senha": $('#senha').val()
					});
					// criar xmlhttprequest
					var xhr = new XMLHttpRequest();
					// verificar as mudanças de estado
					xhr.onreadystatechange = function(){						
						if(xhr.readyState == 4){
							var resposta = xhr.responseText;							
							$('#mensagem').html(resposta);
						}
					}
					//fazer o envio do nosso request
					xhr.open("POST", "http://10.0.0.10:8033/auths");
					xhr.setRequestHeader("accept", "application/vnd.api+json");
					xhr.setRequestHeader("content-type", "application/json");						
					xhr.send(data);			
				});
            }
		},
		util : {
            authenticated: function(){

            }
		}
	};
	// Pass in jQuery.
})(jQuery, this, this.document);
//
// Dar o pontapé inicial
//
$(document).ready( function () {
	$Login.go();
});
