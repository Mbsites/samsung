/*validação nome*/
function checkNome(form) {
	var eobj = document.getElementById('erronome');
	var nome = form.value;
	var ctrs = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
	var error = false;
	eobj.innerHTML = '';
	if (nome == '') {
		error = 'O nome é obrigatório!';
	} else if (nome.length < 3) {
		error = "O nome deve ter pelo menos 3 caracteres";
	} else if (!ctrs.test(nome)) {
		error = "Digite apenas letras.";
	}
	if (error) {
		eobj.innerHTML = error;
		return false;
	}
	return true;
}

function erroclear(span){
    var eobj = document.getElementById(span);
    eobj.innerHTML = '';
}

/*validação sobrenome*/
function checkSobreNome(form) {
	var eobj = document.getElementById('errosobrenome');
	var sobrenome = form.value;
	var ctrs = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
	var error = false;
	eobj.innerHTML = '';
	if (sobrenome == '') {
		error = 'O sobrenome é obrigatório!';
	} else if (sobrenome.length < 3) {
		error = "O nome deve ter pelo menos 3 caracteres";
	} else if (!ctrs.test(sobrenome)) {
		error = "Digite apenas letras.";
	}
	if (error) {
		eobj.innerHTML = error;
		return false;
	}
	return true;
}

/*validação email*/
function checkEmail(form) {
	var eobj = document.getElementById('erroremail');
	eobj.innerHTML = '';
	var error = false;
	if (form.value.length == 0) {
		error = 'Informe um endereço de e-mail.';
	} else if (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(form.value)) {
		return true;
	} else {
		error = 'Por favor insira um endereço de e-mail válido.';
	}
	if (error) {
		eobj.innerHTML = error;
		return false;
	}
	return true;
}

/*validação telefone*/
function checkTelefone(form) {
	var eobj = document.getElementById('errotelefone');
	var phone = form.value;
	var error = false;
	eobj.innerHTML = '';
	if (phone == '') {
		error = 'Digite o número de telefone';
	} else if (!phone.length > 1 || phone.length < 13) {
		error = 'Comprimento de número de telefone inválido! Por favor, tente novamente.';
	}
	if (error) {
		eobj.innerHTML = error;
		return false;
	}
	return true;
}

/*validação termos*/
function checkPrivacy(form) {
	var eobj = document.getElementById('erroprivacy');
	eobj.innerHTML = '';
	var error = false;
	if (!form.checked) {
		error = 'É preciso aceitar as politicas de privacidade.';
	}
	if (error) {
		eobj.innerHTML = error;
		return false;
	}
	return true;
}

/*mascara telefone*/
function mascaraTelefone(campo) {

	function trata(valor, isOnBlur) {
		valor = valor.replace(/\D/g, "");
		valor = valor.replace(/^(\d{2})(\d)/g, "($1)$2");
		if (isOnBlur) {
			valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
		} else {
			valor = valor.replace(/(\d)(\d{3})$/, "$1-$2");
		}
		return valor;
	}

	campo.onkeypress = function (evt) {
		var code = (window.event) ? window.event.keyCode : evt.which;
		var valor = this.value
		if (code > 57 || (code < 48 && code != 8)) {
			return false;
		} else {
			this.value = trata(valor, false);
		}
	}
	campo.maxLength = 14;
}
mascaraTelefone(document.getElementById('telefone'));

/*validação form*/
function validate() {
	var nome = checkNome(document.getElementById("nome"));
	var sobrenome = checkSobreNome(document.getElementById("sobrenome"));
	var email = checkEmail(document.getElementById("email"));
	var telefone = checkTelefone(document.getElementById("telefone"));
	var privacy = checkPrivacy(document.getElementById("privacy"));

	if (nome != "" && sobrenome != "" && email != "" && telefone != "" && privacy != "") {
		return true;
	}
	return false;
}