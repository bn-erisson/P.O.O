import { Usuario } from "./Usuario";
import { UsuarioRep } from "./UsuarioRep";
import { Cliente } from "./Cliente";
import { Gerente } from "./Gerente";
import { OperadorDeSistema } from "./OperadorDeSistema";
import { ProdutoRep } from "./ProdutoRep";
import { Produto } from "./Produto";
import { Video } from "./Video";
import { Filme } from "./Filme";
import { Serie } from "./Serie";
import { Musica } from "./Musica";
import { Podcast } from "./Podcast";
import { NoLimitCreditCardError } from "./NoLimitCreditCardError";
import { Pacote } from "./Pacote";
import { Data } from "./Data";
import { CartaoDeCredito } from "./CartaoDeCredito";


declare function require(name: string): any;
var readline = require('readline-sync');

let usuarioRep: UsuarioRep = new UsuarioRep();
let produtosRep: ProdutoRep = new ProdutoRep();

let operador: OperadorDeSistema = new OperadorDeSistema("Erisson", "erisson@", "123", "123", 10);
usuarioRep.adicionarUsuario(operador);
usuarioRep.operadores.push(operador);

/* let filme1: Filme = new Filme("666", "Conga La Conga", "Porn", 1, 2018, 18, 10);
let filme2: Filme = new Filme("669", "La La Land", "Porn", 9, 2018, 18, 15);
let filme3: Filme = new Filme("699", "Pedra Dura", "Porn", 1, 2018, 18, 15);
let data : Data = new Data(18,6,2018);
let pacote1 : Pacote = new Pacote("44", "testepacote", "drama", undefined, [filme1,filme3],data);
produtosRep.adicionar(pacote1);
produtosRep.adicionar(filme1);
produtosRep.adicionar(filme2);
produtosRep.adicionar(filme3);
let dataNasC: Data = new Data(10, 10, 2018);
let dataValCC: Data = new Data(10, 1, 20000);
let cartaoCliente: CartaoDeCredito = new CartaoDeCredito("123", dataValCC, 123, 100000);
let cliente: Cliente = new Cliente("Matt", "matt@", "123", "quixadá", dataNasC, [],cartaoCliente);
usuarioRep.adicionarUsuario(cliente);
usuarioRep.clientes.push(cliente); */

let gerente: Usuario = new Gerente("Sleila", "gerente@admin.com", "admin", "00", 950);
usuarioRep.adicionarUsuario(gerente);

let user: Usuario | undefined = undefined;

while (true) {

    let comando: string = readline.question("---------------------------------------------------------- Bem Vindo ao Spotflix -------------------------------------------------------- \n" +
        "1- Logar \n" +
        "2- Cadastrar-se como cliente \n" +
        "3- Sair\n" +
        "Digite o número referente a opção desejada e pressione a tecla enter ");

    if (comando == "1") {

        console.log("------------------------------------------------ Tela de login --------------------------------------------------");
        let emailLogin: string = readline.question("Digite seu Email: ");
        let senhaLogin: string = readline.question("Digite sua senha: ");
        let user = usuarioRep.retornaUsuario(emailLogin);
        if (user != undefined) {
            if (user.getSenha() == senhaLogin) {
                while (user instanceof Gerente) {
                    console.log("--------------------------------Bem vindo gerente " + user.getNome() + "-------------------------------------- \n" +
                        "1 – Cadastrar Operador \n" +
                        "2 – Remover Operador \n" +
                        "3 – Listar Produtos \n" +
                        "4 – Listar Clientes \n" +
                        "5 – Listar Operadores \n" +
                        "6 – Procurar Produto \n" +
                        "7 – Procurar Cliente \n" +
                        "8 – Procurar Operador \n" +
                        "9 – Sair");

                    let comandoGerente: string = readline.question("Digite o numero referente a opção desejada e pressione a tecla enter: ");

                    if (comandoGerente == "1") {
                        console.log("---------------------------------- Digite os dados do operador -----------------------------");
                        let nome: string = readline.question("Digite o nome do operador: ");
                        let email: string = readline.question("Digite o email do operador: ");
                        let senha: string = readline.question("Digite a senha do operador: ");
                        let matricula: string = readline.question("Digite o numero de matricula do operador: ");
                        let salario: number = Number(readline.question("Digite o salário do operador: "));
                        // Dava pra receber isso numa linha só?
                        // Não seria melhor criar um metodo para instaciar um novo usuario a para cada nova operação?
                        // ou talvez um for que pergunta quantos operadores o gerente quer adicionar
                        // Eu não deveria pegar um  usuario ja existente e instanciar ele como operador colocando os novos dados? 
                        if (nome != "" || email != "" || senha != "" || matricula != "" || isNaN(salario) || usuarioRep.retornaUsuario(email) == undefined) {
                            // essa conparação esta certa?
                            let operador1: OperadorDeSistema = new OperadorDeSistema(nome, email, senha, matricula, Number(salario));
                            usuarioRep.adicionarUsuario(operador1);
                            usuarioRep.operadores.push(operador1);
                            console.log("Operador " + operador1.getNome() + " cadastrado com sucesso! ");
                            //console.log(usuarioRep.retornaUsuario(email) instanceof OperadorDeSistema);
                            //console.log(usuarioRep.retornaUsuario(email));
                            //console.log("Operador cadastrado com sucesso");
                            // Colocar um console.log para afirmar que deu certo?
                        } else if (nome == "" || email == "" || senha == "" || matricula == "" || isNaN(salario)) {
                            console.log("Você deixou um campo vazio, tente novamente");
                        } else if (usuarioRep.retornaUsuario(email) != undefined) {
                            console.log("Usuário já exite, não é possivel cadastrar");
                        }
                    }

                    else if(comandoGerente == "2"){
                        let matricula: string = readline.question("Digite a matrícula do operador que você deseja remover: ");
                        let emailOp: string | undefined = usuarioRep.retonarEmail(matricula);
                        if(emailOp != undefined){
                            usuarioRep.removerUsuario(emailOp);
                            for(let operador of usuarioRep.operadores){
                                if(operador.getEmail() == emailOp){
                                    let indice: any = usuarioRep.operadores.indexOf(operador);
                                    usuarioRep.operadores.splice(indice, 1);

                                }

                            }
                        }
                    }

                    else if (comandoGerente == "3") {
                        for (let produto of Array.from(produtosRep.getProdutos())) {
                            console.log(produto);
                        }
                    }

                    else if (comandoGerente == "4") {
                        console.log(usuarioRep.listarClientes());
                    }

                    else if (comandoGerente == "5") {
                        console.log(usuarioRep.listarOperadores());
                        /* console.log(usuarioRep.retornaUsuario('1') instanceof OperadorDeSistema);
                        for(let usuario of Array.from(usuarioRep.getUsuarios())){
                            console.log(usuario instanceof Usuario);
                            if(usuario instanceof OperadorDeSistema){
                                console.log(usuario);
                            }
                        } */
                    }

                    else if (comandoGerente == "6") {
                        let codigoProcurado: string = readline.question("Digite o código do produto que você quer procurar: ");
                        if (produtosRep.retornar(codigoProcurado) instanceof Produto) {
                            console.log(produtosRep.retornar(codigoProcurado));
                        } else {
                            console.log("O produto procurado não existe");
                        }
                    }

                    else if (comandoGerente == "7") {
                        let emailProcurado: string = readline.question("Digite o e-mail do cliente que você quer procurar: ");
                        if (usuarioRep.retornaUsuario(emailProcurado) instanceof Cliente) {
                            console.log(usuarioRep.retornaUsuario(emailProcurado));
                        }
                        else {
                            console.log("Cliente não existe");
                        }
                    }

                    else if (comandoGerente == "8") {
                        let emailProcuradoOpe: string = readline.question("Digite o e-mail do operador que você quer procurar: ");
                        if (usuarioRep.retornaUsuario(emailProcuradoOpe) instanceof OperadorDeSistema) {
                            console.log(usuarioRep.retornaUsuario(emailProcuradoOpe));
                        }
                        else {
                            console.log("Operador não existe no sistema. ");
                        }
                    }

                    else if (comandoGerente == "9") {
                        console.log("O gerente " + user.getNome() + " está saindo do sistema.");
                        user = undefined;
                        break;
                        //como faço isso?
                    }
                    else {
                        console.log("Lancar erro de comando invalido DEVEMOS REALMENTE LANÇAR ESSE ERRO???????")
                    }

                }
                while (user instanceof OperadorDeSistema) {
                    console.log("--------------------------------Bem vindo operador de sistema " + user.getNome() + "-------------------------------------- \n" +
                        "1 – Cadastrar Produto \n" +
                        "2 – Remover Produto \n" +
                        "3 – Listar Produtos \n" +
                        "4 – Listar Clientes \n" +
                        "5 – Procurar Produto \n" +
                        "6 – Procurar Cliente \n" +
                        "7 – Sair");
                    let comandoOperadorDeSistema: string = readline.question("Digite o numero referente a opção desejada e pressione a tecla enter: ");

                    if (comandoOperadorDeSistema == "1") {
                        let produto1: Produto; //ACHO Q ISSO AQUI NÃO
                        console.log("----------------------------------------------------Tipos de produtos------------------------------------------------------\n" +
                            "1 - Filme \n" +
                            "2 - Serie\n" +
                            "3 - Musica\n" +
                            "4 - Podcast\n" +
                            "5 - Pacote \n");
                        let tipoDeProtudo: string = readline.question("Digite o tipo de produto que voce deseja adicionar: ");

                        if (tipoDeProtudo == "1") {
                            //daria pra fazer um metodo que cadastrasse o produto?  digitar isso tudo nos outros produtos é chato pra caralho :/
                            let codigo: string = readline.question("Digite o codigo do filme: ");
                            let nome: string = readline.question("Digite aqui o nome do filme: ");
                            let genero: string = readline.question("Digite aqui o genero do filme: ");
                            let preco: number = readline.question("Digite aqui o preço do filme: ");
                            let anoDeLancamento: number = readline.question("Digite aqui o ano de lançamento do filme: ");
                            let faixaEtaria: number = readline.question("Digite aqui a faixa etaria do filme: ");
                            let duracao: number = readline.question("Digite aqui a duração do filme: ");
                            if (codigo != "" || nome != "" || genero != "" || isNaN(preco) || isNaN(anoDeLancamento) || isNaN(faixaEtaria) || isNaN(duracao) || produtosRep.retornar(codigo) == undefined) {
                                //essa conparação esta certa ?
                                let filme: Video = new Filme(codigo, nome, genero, Number(preco), Number(anoDeLancamento), Number(faixaEtaria), Number(duracao));
                                produtosRep.adicionar(filme);
                                console.log("Produto cadastrado com sucesso!")
                            }
                            else if (produtosRep.retornar(codigo) != undefined) {
                                console.log("Produto já exite, não é possivel cadastrar");
                            }
                            else if (codigo == "" || nome == "" || genero == "") {
                                console.log("Lançar erro de campos vazios, não é possivel cadastrar: ");
                            }
                        }
                        else if (tipoDeProtudo == "2") {
                            let codigo: string = readline.question("Didite o codigo da serie: ");
                            let nome: string = readline.question("Digite o nome da serie: ");
                            let genero: string = readline.question("Digite o genero da serie: ");
                            let preco: number = readline.question("Digite o preco da serie: ");
                            let anoDeLancamento: number = readline.question("Digite o ano de lançamento da serie: ");
                            let faixaEtaria: number = readline.question("Digite a faixa etaria da serie: ");
                            let numeroDeEp: number = readline.question("Digite o numero de episodios dessa série: ");
                            let duraçaoMediaDoEp: number = readline.question("Digite a duração media dos episodios: ");
                            if (codigo != "" || nome != "" || genero != "" || isNaN(preco) || isNaN(anoDeLancamento) || isNaN(faixaEtaria) || isNaN(numeroDeEp) || isNaN(duraçaoMediaDoEp) || produtosRep.retornar(codigo) == undefined) {
                                //essa conparação esta certa ?
                                let serie: Produto = new Serie(codigo, nome, genero, Number(preco), Number(anoDeLancamento), Number(faixaEtaria), Number(numeroDeEp), Number(duraçaoMediaDoEp));
                                produtosRep.adicionar(serie);
                                console.log("Produto cadastrado com sucesso!")
                            }
                            else if (produtosRep.retornar(codigo) != undefined) {
                                console.log("Produto ja exite, não é possivel cadastrar");
                            }
                            else if (codigo == "" || nome == "" || genero == "") {
                                console.log("Lançar erro de campos vazios, não é possivel cadastrar: ");
                            }
                        }
                        else if (tipoDeProtudo == "3") {
                            let codigo: string = readline.question("Didite o codigo da musica: ");
                            let nome: string = readline.question("Digite o nome da musica: ");
                            let genero: string = readline.question("Digite o genero da musica: ");
                            let preco: number = readline.question("Digite o preco da musica: ");
                            let autor: string = readline.question("Digite o nome do autor da musica: ");
                            let duracao: number = readline.question("Digite a duracao da musica: ");
                            let album: string = readline.question("Digite o nome do album a qual essa musica pertence: ");
                            if (codigo != "" || nome != "" || genero != "" || isNaN(preco) || autor != "" || isNaN(duracao) || album != "" || produtosRep.retornar(codigo) == undefined) {
                                //essa conparação esta certa ?
                                let musica: Produto = new Musica(codigo, nome, genero, Number(preco), autor, Number(duracao), album);
                                produtosRep.adicionar(musica);
                                console.log("Produto cadastrado com sucesso!")
                            }
                            else if (produtosRep.retornar(codigo) != undefined) {
                                console.log("Produto ja exite, não é possivel cadastrar");
                            }
                            else if (codigo == "" || nome == "" || genero == "") {
                                console.log("Lançar erro de campos vazios, não é possivel cadastrar: ");
                            }
                        }
                        else if (tipoDeProtudo == "4") {
                            let codigo: string = readline.question("Didite o codigo do podcart: ");
                            let nome: string = readline.question("Digite o nome do podcart: ");
                            let genero: string = readline.question("Digite o genero do podcart: ");
                            let preco: number = readline.question("Digite o preco do podcart: ");
                            let autor: string = readline.question("Digite o nome do autor do podcart: ");
                            let duracao: number = readline.question("Digite a duracao do podcart: ");
                            let tematica: string = readline.question("Digite a tematica do podcast: ");
                            if (codigo != "" || nome != "" || genero != "" || isNaN(preco) || autor != "" || isNaN(duracao) || tematica != "" || produtosRep.retornar(codigo) == undefined) {
                                //essa conparação esta certa ?
                                let podcart: Produto = new Podcast(codigo, nome, genero, Number(preco), autor, Number(duracao), tematica);
                                produtosRep.adicionar(podcart);
                                console.log("Produto cadastrado com sucesso!")
                            }
                            else if (produtosRep.retornar(codigo) != undefined) {
                                console.log("Produto ja exite, não é possivel cadastrar");
                            }
                            else if (codigo == "" || nome == "" || genero == "") {
                                console.log("Lançar erro de campos vazios, não é possivel cadastrar: ");
                            }
                        }

                        else if(tipoDeProtudo == "5"){
                            for (let produto of Array.from(produtosRep.getProdutos())) {
                                console.log(produto);
                            }
                            let opcao : boolean = true;
                            let listaProdutosPac: Array<Produto> = [];
                            while ( opcao ){
                                let produtoPacote : string = readline.question("Digite o codido do produto que voce quer adicionar ao pacote: \n"+
                                "Se quiser para de adicionar digite PARAR: ");
                                if(produtoPacote == "PARAR"){
                                    opcao = false;
                                } else{
                                    let produto: Produto | undefined = produtosRep.retornar(produtoPacote);
                                    if(produto!= undefined){
                                        produtosRep.adicionar(produto);
                                        listaProdutosPac.push(produto);
                                    } else{
                                        console.log("Produto não existe no repositório");
                                    }
                                }
                            }

                            let codPac: string = readline.question("Digite o código do pacote: ");
                            let nomePac: string = readline.question("Digite o nome do pacote: ");
                            let generoPac: string = readline.question("Digite o genero do pacote: ");
                            let diaValPac: number = readline.question("Digite o dia da validade do pacote: ");
                            let mesValPac: number = readline.question("Digite o mês da validade do pacote: ");
                            let anoValPac: number = readline.question("Digite o ano da validade do pacote: ");
                            let dataValPac: Data = new Data(Number(diaValPac), Number(mesValPac), Number(anoValPac));
                            let pacote: Pacote = new Pacote(codPac, nomePac, generoPac, undefined, listaProdutosPac, dataValPac);
                            console.log("Pacote criado: ", pacote);
                            produtosRep.adicionar(pacote);


                        }

                        else {
                            console.log("Lancar erro de comando inválido");
                        }

                    }
                    else if (comandoOperadorDeSistema == "2") {
                        let codigo: string = readline.question("Digite o codigo do produto que voce deseja remover: ");
                        produtosRep.deletar(codigo);
                        console.log("Produto removido");
                    }
                    else if (comandoOperadorDeSistema == "3") {
                        for (let produto of Array.from(produtosRep.getProdutos())) {
                            console.log(produto);
                        }
                    }
                    else if (comandoOperadorDeSistema == "4") {
                        console.log(usuarioRep.listarClientes());
                    }
                    else if (comandoOperadorDeSistema == "5") {
                        let codigo: string = readline.question("Digite o codigo do produto que voce deseja buscar: ");
                        console.log(produtosRep.retornar(codigo));
                    }
                    else if (comandoOperadorDeSistema == "6") {
                        let email: string = readline.question("Digite o email do usuario que voce quer buscar: ");
                        console.log(usuarioRep.retornaUsuario(email));
                    }
                    else if (comandoOperadorDeSistema == "7") {
                        console.log("O operador de sistema " + user.getNome() + " está saindo do sistema.");
                        user = undefined;
                        break;
                    }
                    else {
                        console.log("Comando não existe. Por favor, escolha outra opição: \n")
                    }

                }

                while (user instanceof Cliente) {
                    console.log("---------------------------------------------------- Olá " + user.getNome() + "----------------------------------------------------\n" +
                        " 1 – Listar Produtos da Loja \n" +
                        " 2 – Listar meus Produtos \n" +
                        " 3 – Comprar Produto \n" +
                        " 4 – Play \n" +
                        " 5 – Sair \n");

                    let comandoCliente: string = readline.question("Digite o número da opção que você desejar: ");
                    if (comandoCliente == "1") {
                        for (let produto of Array.from(produtosRep.getProdutos())) {
                            console.log(produto);
                        }
                    }

                    //comandoCliente = readline.question("Digite o número da opção que você desejar: ");

                    else if (comandoCliente == "2") {
                        //arranjar um jeito de comprar o dia, mes e ano
                        //let diaAt = new Date().getDate();
                        //let mesAt = new Date().getMonth()+1;
                        //let anoAt = new Date().getFullYear();

                        //for (let produto of user.getListaDeProdutos()) {
                            /* if (produto instanceof Pacote){
                                if(produto.getValidade() instanceof Data){
                                    produto.getValidade().getAno()
                                }
                                
                            } */
                        if(Array.from(user.getListaDeProdutos()).length == 0){
                            console.log("Você ainda não possui produtos comprados");
                        } else{
                            for(let produto of user.getListaDeProdutos()){
                            console.log(produto);
                            }
                    }
                }

                    else if (comandoCliente == "3") {
                        //preciso adicionaro a lista de produtos comprados
                        //revisar
                        let codigoComprado: string = readline.question("Digite o código do produto que você quer comprar: ");
                        let produtoComprado: Produto | undefined = produtosRep.retornar(codigoComprado);
                        if (produtoComprado != undefined) {
                            try{
                                if (user.getCartaoDeCredito().getLimite() > produtoComprado.getPreco()) {
                                    if (produtoComprado instanceof Pacote) {
                                        let compra: string = readline.question("Você deseja fazer uma assinatura mensal ao invés de comprar o pacote? \n O valor do pacote total é: " + produtoComprado.getPreco() + "\n O valor da assinatura mensal é: " + produtoComprado.getPrecoMensal() + "\n Se sim, digite 1, se não, digite 2: ");
                                        let validade: Data | null = null;
                                        if (compra == "1") {
                                            let dia: number = readline.question("Precisamos da data da sua assinatura mensal. Digite o dia: ");
                                            let mes: number = readline.question("Digite o mes: ");
                                            let ano: number = readline.question("Digite o ano: ");
                                            validade = new Data(Number(dia), Number(mes), Number(ano));
                                            produtoComprado.setValidade(validade);
                                            let limiteAtual: number = user.getCartaoDeCredito().getLimite() - produtoComprado.getPrecoMensal();
                                            user.getCartaoDeCredito().setLimite(limiteAtual);
                                            user.comprarProduto(produtoComprado);
                                        } else {
                                            produtoComprado.setValidade(validade);
                                            let limiteAtual: number = user.getCartaoDeCredito().getLimite() - produtoComprado.getPreco();
                                            user.getCartaoDeCredito().setLimite(limiteAtual);
                                            user.comprarProduto(produtoComprado);
                                        }
                                    }
                                    else {
                                        let limiteAtual: number = user.getCartaoDeCredito().getLimite() - produtoComprado.getPreco();
                                        user.getCartaoDeCredito().setLimite(limiteAtual);
                                        user.comprarProduto(produtoComprado);
    
                                    }
                                    console.log("Produto " + produtoComprado.getNome() + " foi comprado.");
    
    
                                } else {
                                    throw new NoLimitCreditCardError("NoLimitCreditCardError");
                                }
                            } catch(ex){
                                if(ex instanceof NoLimitCreditCardError){
                                    console.log("CARTÃO DE CRÉDITO SEM LIMITE\n" + "O seu limite é: " + user.getCartaoDeCredito().getLimite());
                                    console.log("Tente comprar um produto mais barato.");
                                    let novoComando: string = readline.question("Você deseja tentar efetuar uma nova compra? Se sim, digite 1, se não, digite 2: ");
                                    if(novoComando == "1"){
                                        comandoCliente == "3";
                                    }
                                }
                            }
                            /* if (user.getCartaoDeCredito().getLimite() > produtoComprado.getPreco()) {
                                if (produtoComprado instanceof Pacote) {
                                    let compra: string = readline.question("Você deseja fazer uma assinatura mensal ao invés de comprar o pacote? \n O valor do pacote total é: " + produtoComprado.getNome() + "\n O valor da assinatura mensal é: " + produtoComprado.getPrecoMensal() + "\n Se sim, digite 1, se não, digite 2: ");
                                    let validade: Data | null = null;
                                    if (compra == "1") {
                                        let dia: number = readline.question("Precisamos da data da sua assinatura mensal. Digite o dia: ");
                                        let mes: number = readline.question("Digite o mes: ");
                                        let ano: number = readline.question("Digite o ano: ");
                                        validade = new Data(dia, mes, ano);
                                        produtoComprado.setValidade(validade);
                                        let limiteAtual: number = user.getCartaoDeCredito().getLimite() - produtoComprado.getPrecoMensal();
                                        user.getCartaoDeCredito().setLimite(limiteAtual);
                                    } else {
                                        produtoComprado.setValidade(validade);
                                        let limiteAtual: number = user.getCartaoDeCredito().getLimite() - produtoComprado.getPreco();
                                        user.getCartaoDeCredito().setLimite(limiteAtual);
                                    }
                                }
                                else {
                                    let limiteAtual: number = user.getCartaoDeCredito().getLimite() - produtoComprado.getPreco();
                                    user.getCartaoDeCredito().setLimite(limiteAtual);
                                    user.comprarProduto(produtoComprado);

                                }
                                console.log("Produto " + produtoComprado.getNome() + " foi comprado.")


                            } else {
                                console.log("CARTÃO DE CRÉDITO SEM LIMITE");
                                //throw new NoLimitCreditCardError("CARTÃO DE CRÉDITO SEM LIMITE");
                            } */
                        }
                    }

                    else if (comandoCliente == "4") {
                        console.log(user.getListaDeProdutos());
                        let codigoExecutar: string = readline.question("Digite o código do produto que você quer executar: ");
                        let produtoExe: Produto | undefined = produtosRep.retornar(codigoExecutar);
                        if (produtoExe != undefined) {
                            user.executarMidia(produtoExe);
                        }
                    }

                    else if (comandoCliente == "5") {
                        console.log(user.getNome() + " saindo do SpotFlix! Até logo...");
                        user = undefined;
                        break;
                    }

                    else {
                        console.log("Comando invalio. Por favor, escolha outra opcao: \n");
                    }
                }
            }

            else {
                console.log("Lançar error de senha incorreta");
            }

        }

        else {
            console.log("Lançar error de usuario inexistente ou email incorreto");
        }
    
}

    else if (comando == "2") {
        console.log("Precisamos das suas informações para continuar... ");
        let nome: string = readline.question("Digite o seu nome completo: ");
        let email: string = readline.question("Digite o seu e-mail: ");
        let senha: string = readline.question("Digite uma senha: ");
        let endereco: string = readline.question("Digite o seu endereço ");
        /* let dia, mes, ano: any = readline.question("Digite a sua data de nascimento (DD/MM/ANO): ").split("/");
        let dataNasc: Data  = new Data(Number(dia), Number(mes), Number(ano)); */
        let dia: number = readline.question("Digite o dia do seu nascimento: ");
        let mes: number = readline.question("Digite o mês do seu nascimento: ");
        let ano: number = readline.question("Digite o ano do seu nascimento: ");
        let dataNasc: Data = new Data(Number(dia), Number(mes), Number(ano));
        let numeroCartao: string = readline.question("Digite o número do seu cartão de crédito: ");
        let diaValidadeC: number = readline.question("Digite o dia da validade: ");
        let mesValidadeC: number = readline.question("Digite o mês da validade: ");
        let anoValidadeC: number = readline.question("Digite o ano da validade: ");
        let dataValidadeC: Data = new Data(Number(diaValidadeC), Number(mesValidadeC), Number(anoValidadeC));
        let codigoCCV: number = readline.question("Digite o código CCV do cartão: ");
        let limite: number = readline.question("Digite o limite do seu cartão: ");
        let cartaoDeCredito: CartaoDeCredito = new CartaoDeCredito(numeroCartao, dataValidadeC, Number(codigoCCV),  Number(limite));
        let novoCliente: Cliente = new Cliente(nome, email, senha, endereco, dataNasc, [], cartaoDeCredito);
        usuarioRep.adicionarUsuario(novoCliente);
        usuarioRep.clientes.push(novoCliente);
        console.log("Seu cadastro foi feito com sucesso!!")

}

else if (comando == "3") {
    console.log("Fechando programa");
    break;
    // COLOCAR BREAK
}

}