var jogadorEscolha = 0;
	var jogadorPoontuacao = 0;
	var computadorPoontuacao = 0;
	var computadorEscolha = 0;
	var ganhador = -1;
	var nomeJogador;


function iniciar() {
	do{
	nomeJogador = window.prompt("Digite seu nome:", "");
	} while (nomeJogador == null || nomeJogador == "")
	document.getElementById("jogador-nome").innerHTML = nomeJogador;
}

	function jogar(escolha){
		jogadorEscolha = escolha;

		computadorEscolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

	if((jogadorEscolha == 1) && (computadorEscolha == 1)) {
		ganhador = 0;
	}

	else if((jogadorEscolha == 1) && (computadorEscolha == 2)) {
		ganhador = 2;
	}

	else if((jogadorEscolha == 1) && (computadorEscolha == 3)) {
		ganhador = 1;
	}

	else if((jogadorEscolha == 2) && (computadorEscolha == 1)) {
		ganhador = 1;
	}

	else if((jogadorEscolha == 2) && (computadorEscolha == 2)) {
		ganhador = 0;
	}

	else if((jogadorEscolha == 2) && (computadorEscolha == 3)) {
		ganhador = 2;
	}

	else if((jogadorEscolha == 3) && (computadorEscolha == 1)) {
		ganhador = 2;
	}

	else if((jogadorEscolha == 3) && (computadorEscolha == 2)) {
		ganhador = 1;
	}

	else if((jogadorEscolha == 3) && (computadorEscolha == 3)) {
		ganhador = 0;
	}

	document.getElementById("jogador-escolha-1").classList.remove('selecionado');
	document.getElementById("jogador-escolha-2").classList.remove('selecionado');	
	document.getElementById("jogador-escolha-3").classList.remove('selecionado');
	document.getElementById("computador-escolha-1").classList.remove('selecionado');
	document.getElementById("computador-escolha-2").classList.remove('selecionado');
	document.getElementById("computador-escolha-3").classList.remove('selecionado');



	document.getElementById("jogador-escolha-" + jogadorEscolha).classList.add('selecionado');

	document.getElementById("computador-escolha-" + computadorEscolha).classList.add('selecionado');


    if(ganhador == 0) {
	document.getElementById('mensagens').innerHTML = 'Empate';
	}
    else if(ganhador == 1) {
	document.getElementById('mensagens').innerHTML = (nomeJogador+' Ganhou');
		jogadorPoontuacao++;
	}
	else if(ganhador == 2) {
	document.getElementById('mensagens').innerHTML = 'Computador Ganhou';
		computadorPoontuacao++;
	}

	document.getElementById('jogador-pontos').innerHTML = jogadorPoontuacao;

	document.getElementById('computador-pontos').innerHTML = computadorPoontuacao;

	}
