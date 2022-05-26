let usuario_correto = 1234,senha_correta = 9999,count = 0,seg = 0;
const entrada_usuario = require("readline");

const interfaceDaEntradaUsuario = entrada_usuario.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let timer = setInterval(()=>{seg++;},1000);

function checkOptionsUsuario(){
	interfaceDaEntradaUsuario.question('1 - tentar novamente\n0 - encerrar sistema: ',function(answerUsuario){
		if(answerUsuario == 1){
			iniciar();
		}else{
			clearInterval(timer);
			interfaceDaEntradaUsuario.close();
		}
	});
}

function checkSenha(){
	interfaceDaEntradaUsuario.question('Informa senha:', function(answerUsuario){
		if(answerUsuario == senha_correta){
			console.log('Acesso Permitido');
			interfaceDaEntradaUsuario.close();
			clearInterval(timer);
		}else{
			console.log('Senha Incorreta');
			checkOptionsUsuario();
		}
	});
}

function iniciar(){
	interfaceDaEntradaUsuario.question("Informa usuário: ",function(answerUsuario){
			if(answerUsuario == usuario_correto){
				checkSenha();
			}else{
				console.log(`Usuário invalido!\nTempo em execução do script ${seg} segundos`);
				clearInterval(timer);
				interfaceDaEntradaUsuario.close();
			}
	});
}
iniciar();
