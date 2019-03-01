"use strict";
exports.__esModule = true;
var UsuarioRep_1 = require("./UsuarioRep");
var Cliente_1 = require("./Cliente");
var Gerente_1 = require("./Gerente");
var OperadorDeSistema_1 = require("./OperadorDeSistema");
var ProdutoRep_1 = require("./ProdutoRep");
var Produto_1 = require("./Produto");
var Filme_1 = require("./Filme");
var Serie_1 = require("./Serie");
var Musica_1 = require("./Musica");
var Podcast_1 = require("./Podcast");
var NoLimitCreditCardError_1 = require("./NoLimitCreditCardError");
var Pacote_1 = require("./Pacote");
var Data_1 = require("./Data");
var CartaoDeCredito_1 = require("./CartaoDeCredito");
var readline = require('readline-sync');
var usuarioRep = new UsuarioRep_1.UsuarioRep();
var produtosRep = new ProdutoRep_1.ProdutoRep();
var operador = new OperadorDeSistema_1.OperadorDeSistema("Erisson", "erisson@", "123", "123", 10);
usuarioRep.adicionarUsuario(operador);
usuarioRep.operadores.push(operador);
var filme1 = new Filme_1.Filme("666", "Conga La Conga", "Porn", 1, 2018, 18, 10);
var filme2 = new Filme_1.Filme("669", "La La Land", "Porn", 9, 2018, 18, 15);
var filme3 = new Filme_1.Filme("699", "Pedra Dura", "Porn", 1, 2018, 18, 15);
var data = new Data_1.Data(18, 6, 2018);
var pacote1 = new Pacote_1.Pacote("44", "testepacote", "drama", undefined, [filme1, filme3], data);
produtosRep.adicionar(pacote1);
produtosRep.adicionar(filme1);
produtosRep.adicionar(filme2);
produtosRep.adicionar(filme3);
var dataNasC = new Data_1.Data(10, 10, 2018);
var dataValCC = new Data_1.Data(10, 1, 20000);
var cartaoCliente = new CartaoDeCredito_1.CartaoDeCredito("123", dataValCC, 123, 100000);
var cliente = new Cliente_1.Cliente("Matt", "matt@", "123", "quixadá", dataNasC, [], cartaoCliente);
usuarioRep.adicionarUsuario(cliente);
usuarioRep.clientes.push(cliente);
var gerente = new Gerente_1.Gerente("Sleila", "gerente@admin.com", "admin", "00", 950);
usuarioRep.adicionarUsuario(gerente);
var user = undefined;
while (true) {
    var comando = readline.question("---------------------------------------------------------- Bem Vindo ao Spotflix -------------------------------------------------------- \n" +
        "1- Logar \n" +
        "2- Cadastrar-se como cliente \n" +
        "3- Sair\n" +
        "Digite o número referente a opção desejada e pressione a tecla enter ");
    if (comando == "1") {
        console.log("------------------------------------------------ Tela de login --------------------------------------------------");
        var emailLogin = readline.question("Digite seu Email: ");
        var senhaLogin = readline.question("Digite sua senha: ");
        var user_1 = usuarioRep.retornaUsuario(emailLogin);
        if (user_1 != undefined) {
            if (user_1.getSenha() == senhaLogin) {
                while (user_1 instanceof Gerente_1.Gerente) {
                    console.log("--------------------------------Bem vindo gerente " + user_1.getNome() + "-------------------------------------- \n" +
                        "1 – Cadastrar Operador \n" +
                        "2 – Remover Operador \n" +
                        "3 – Listar Produtos \n" +
                        "4 – Listar Clientes \n" +
                        "5 – Listar Operadores \n" +
                        "6 – Procurar Produto \n" +
                        "7 – Procurar Cliente \n" +
                        "8 – Procurar Operador \n" +
                        "9 – Sair");
                    var comandoGerente = readline.question("Digite o numero referente a opção desejada e pressione a tecla enter: ");
                    if (comandoGerente == "1") {
                        console.log("---------------------------------- Digite os dados do operador -----------------------------");
                        var nome = readline.question("Digite o nome do operador: ");
                        var email = readline.question("Digite o email do operador: ");
                        var senha = readline.question("Digite a senha do operador: ");
                        var matricula = readline.question("Digite o numero de matricula do operador: ");
                        var salario = Number(readline.question("Digite o salário do operador: "));
                        // Dava pra receber isso numa linha só?
                        // Não seria melhor criar um metodo para instaciar um novo usuario a para cada nova operação?
                        // ou talvez um for que pergunta quantos operadores o gerente quer adicionar
                        // Eu não deveria pegar um  usuario ja existente e instanciar ele como operador colocando os novos dados? 
                        if (nome != "" || email != "" || senha != "" || matricula != "" || isNaN(salario) || usuarioRep.retornaUsuario(email) == undefined) {
                            // essa conparação esta certa?
                            var operador1 = new OperadorDeSistema_1.OperadorDeSistema(nome, email, senha, matricula, Number(salario));
                            usuarioRep.adicionarUsuario(operador1);
                            usuarioRep.operadores.push(operador1);
                            console.log("Operador " + operador1.getNome() + " cadastrado com sucesso! ");
                            //console.log(usuarioRep.retornaUsuario(email) instanceof OperadorDeSistema);
                            //console.log(usuarioRep.retornaUsuario(email));
                            //console.log("Operador cadastrado com sucesso");
                            // Colocar um console.log para afirmar que deu certo?
                        }
                        else if (nome == "" || email == "" || senha == "" || matricula == "" || isNaN(salario)) {
                            console.log("Você deixou um campo vazio, tente novamente");
                        }
                        else if (usuarioRep.retornaUsuario(email) != undefined) {
                            console.log("Usuário já exite, não é possivel cadastrar");
                        }
                    }
                    else if (comandoGerente == "2") {
                        var matricula = readline.question("Digite a matrícula do operador que você deseja remover: ");
                        var emailOp = usuarioRep.retonarEmail(matricula);
                        if (emailOp != undefined) {
                            usuarioRep.removerUsuario(emailOp);
                            for (var _i = 0, _a = usuarioRep.operadores; _i < _a.length; _i++) {
                                var operador_1 = _a[_i];
                                if (operador_1.getEmail() == emailOp) {
                                    var indice = usuarioRep.operadores.indexOf(operador_1);
                                    usuarioRep.operadores.splice(indice, 1);
                                }
                            }
                        }
                    }
                    else if (comandoGerente == "3") {
                        for (var _b = 0, _c = Array.from(produtosRep.getProdutos()); _b < _c.length; _b++) {
                            var produto = _c[_b];
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
                        var codigoProcurado = readline.question("Digite o código do produto que você quer procurar: ");
                        if (produtosRep.retornar(codigoProcurado) instanceof Produto_1.Produto) {
                            console.log(produtosRep.retornar(codigoProcurado));
                        }
                        else {
                            console.log("O produto procurado não existe");
                        }
                    }
                    else if (comandoGerente == "7") {
                        var emailProcurado = readline.question("Digite o e-mail do cliente que você quer procurar: ");
                        if (usuarioRep.retornaUsuario(emailProcurado) instanceof Cliente_1.Cliente) {
                            console.log(usuarioRep.retornaUsuario(emailProcurado));
                        }
                        else {
                            console.log("Cliente não existe");
                        }
                    }
                    else if (comandoGerente == "8") {
                        var emailProcuradoOpe = readline.question("Digite o e-mail do operador que você quer procurar: ");
                        if (usuarioRep.retornaUsuario(emailProcuradoOpe) instanceof OperadorDeSistema_1.OperadorDeSistema) {
                            console.log(usuarioRep.retornaUsuario(emailProcuradoOpe));
                        }
                        else {
                            console.log("Operador não existe no sistema. ");
                        }
                    }
                    else if (comandoGerente == "9") {
                        console.log("O gerente " + user_1.getNome() + " está saindo do sistema.");
                        user_1 = undefined;
                        break;
                        //como faço isso?
                    }
                    else {
                        console.log("Lancar erro de comando invalido DEVEMOS REALMENTE LANÇAR ESSE ERRO???????");
                    }
                }
                while (user_1 instanceof OperadorDeSistema_1.OperadorDeSistema) {
                    console.log("--------------------------------Bem vindo operador de sistema " + user_1.getNome() + "-------------------------------------- \n" +
                        "1 – Cadastrar Produto \n" +
                        "2 – Remover Produto \n" +
                        "3 – Listar Produtos \n" +
                        "4 – Listar Clientes \n" +
                        "5 – Procurar Produto \n" +
                        "6 – Procurar Cliente \n" +
                        "7 – Sair");
                    var comandoOperadorDeSistema = readline.question("Digite o numero referente a opção desejada e pressione a tecla enter: ");
                    if (comandoOperadorDeSistema == "1") {
                        var produto1 = void 0; //ACHO Q ISSO AQUI NÃO
                        console.log("----------------------------------------------------Tipos de produtos------------------------------------------------------\n" +
                            "1 - Filme \n" +
                            "2 - Serie\n" +
                            "3 - Musica\n" +
                            "4 - Podcast\n" +
                            "5 - Pacote \n");
                        var tipoDeProtudo = readline.question("Digite o tipo de produto que voce deseja adicionar: ");
                        if (tipoDeProtudo == "1") {
                            //daria pra fazer um metodo que cadastrasse o produto?  digitar isso tudo nos outros produtos é chato pra caralho :/
                            var codigo = readline.question("Digite o codigo do filme: ");
                            var nome = readline.question("Digite aqui o nome do filme: ");
                            var genero = readline.question("Digite aqui o genero do filme: ");
                            var preco = readline.question("Digite aqui o preço do filme: ");
                            var anoDeLancamento = readline.question("Digite aqui o ano de lançamento do filme: ");
                            var faixaEtaria = readline.question("Digite aqui a faixa etaria do filme: ");
                            var duracao = readline.question("Digite aqui a duração do filme: ");
                            if (codigo != "" || nome != "" || genero != "" || isNaN(preco) || isNaN(anoDeLancamento) || isNaN(faixaEtaria) || isNaN(duracao) || produtosRep.retornar(codigo) == undefined) {
                                //essa conparação esta certa ?
                                var filme = new Filme_1.Filme(codigo, nome, genero, Number(preco), Number(anoDeLancamento), Number(faixaEtaria), Number(duracao));
                                produtosRep.adicionar(filme);
                                console.log("Produto cadastrado com sucesso!");
                            }
                            else if (produtosRep.retornar(codigo) != undefined) {
                                console.log("Produto já exite, não é possivel cadastrar");
                            }
                            else if (codigo == "" || nome == "" || genero == "") {
                                console.log("Lançar erro de campos vazios, não é possivel cadastrar: ");
                            }
                        }
                        else if (tipoDeProtudo == "2") {
                            var codigo = readline.question("Didite o codigo da serie: ");
                            var nome = readline.question("Digite o nome da serie: ");
                            var genero = readline.question("Digite o genero da serie: ");
                            var preco = readline.question("Digite o preco da serie: ");
                            var anoDeLancamento = readline.question("Digite o ano de lançamento da serie: ");
                            var faixaEtaria = readline.question("Digite a faixa etaria da serie: ");
                            var numeroDeEp = readline.question("Digite o numero de episodios dessa série: ");
                            var duraçaoMediaDoEp = readline.question("Digite a duração media dos episodios: ");
                            if (codigo != "" || nome != "" || genero != "" || isNaN(preco) || isNaN(anoDeLancamento) || isNaN(faixaEtaria) || isNaN(numeroDeEp) || isNaN(duraçaoMediaDoEp) || produtosRep.retornar(codigo) == undefined) {
                                //essa conparação esta certa ?
                                var serie = new Serie_1.Serie(codigo, nome, genero, Number(preco), Number(anoDeLancamento), Number(faixaEtaria), Number(numeroDeEp), Number(duraçaoMediaDoEp));
                                produtosRep.adicionar(serie);
                                console.log("Produto cadastrado com sucesso!");
                            }
                            else if (produtosRep.retornar(codigo) != undefined) {
                                console.log("Produto ja exite, não é possivel cadastrar");
                            }
                            else if (codigo == "" || nome == "" || genero == "") {
                                console.log("Lançar erro de campos vazios, não é possivel cadastrar: ");
                            }
                        }
                        else if (tipoDeProtudo == "3") {
                            var codigo = readline.question("Didite o codigo da musica: ");
                            var nome = readline.question("Digite o nome da musica: ");
                            var genero = readline.question("Digite o genero da musica: ");
                            var preco = readline.question("Digite o preco da musica: ");
                            var autor = readline.question("Digite o nome do autor da musica: ");
                            var duracao = readline.question("Digite a duracao da musica: ");
                            var album = readline.question("Digite o nome do album a qual essa musica pertence: ");
                            if (codigo != "" || nome != "" || genero != "" || isNaN(preco) || autor != "" || isNaN(duracao) || album != "" || produtosRep.retornar(codigo) == undefined) {
                                //essa conparação esta certa ?
                                var musica = new Musica_1.Musica(codigo, nome, genero, Number(preco), autor, Number(duracao), album);
                                produtosRep.adicionar(musica);
                                console.log("Produto cadastrado com sucesso!");
                            }
                            else if (produtosRep.retornar(codigo) != undefined) {
                                console.log("Produto ja exite, não é possivel cadastrar");
                            }
                            else if (codigo == "" || nome == "" || genero == "") {
                                console.log("Lançar erro de campos vazios, não é possivel cadastrar: ");
                            }
                        }
                        else if (tipoDeProtudo == "4") {
                            var codigo = readline.question("Didite o codigo do podcart: ");
                            var nome = readline.question("Digite o nome do podcart: ");
                            var genero = readline.question("Digite o genero do podcart: ");
                            var preco = readline.question("Digite o preco do podcart: ");
                            var autor = readline.question("Digite o nome do autor do podcart: ");
                            var duracao = readline.question("Digite a duracao do podcart: ");
                            var tematica = readline.question("Digite a tematica do podcast: ");
                            if (codigo != "" || nome != "" || genero != "" || isNaN(preco) || autor != "" || isNaN(duracao) || tematica != "" || produtosRep.retornar(codigo) == undefined) {
                                //essa conparação esta certa ?
                                var podcart = new Podcast_1.Podcast(codigo, nome, genero, Number(preco), autor, Number(duracao), tematica);
                                produtosRep.adicionar(podcart);
                                console.log("Produto cadastrado com sucesso!");
                            }
                            else if (produtosRep.retornar(codigo) != undefined) {
                                console.log("Produto ja exite, não é possivel cadastrar");
                            }
                            else if (codigo == "" || nome == "" || genero == "") {
                                console.log("Lançar erro de campos vazios, não é possivel cadastrar: ");
                            }
                        }
                        else if (tipoDeProtudo == "5") {
                            for (var _d = 0, _e = Array.from(produtosRep.getProdutos()); _d < _e.length; _d++) {
                                var produto = _e[_d];
                                console.log(produto);
                            }
                            var opcao = true;
                            var listaProdutosPac = [];
                            while (opcao) {
                                var produtoPacote = readline.question("Digite o codido do produto que voce quer adicionar ao pacote: \n" +
                                    "Se quiser para de adicionar digite PARAR: ");
                                if (produtoPacote == "PARAR") {
                                    opcao = false;
                                }
                                else {
                                    var produto = produtosRep.retornar(produtoPacote);
                                    if (produto != undefined) {
                                        produtosRep.adicionar(produto);
                                        listaProdutosPac.push(produto);
                                    }
                                    else {
                                        console.log("Produto não existe no repositório");
                                    }
                                }
                            }
                            var codPac = readline.question("Digite o código do pacote: ");
                            var nomePac = readline.question("Digite o nome do pacote: ");
                            var generoPac = readline.question("Digite o genero do pacote: ");
                            var diaValPac = readline.question("Digite o dia da validade do pacote: ");
                            var mesValPac = readline.question("Digite o mês da validade do pacote: ");
                            var anoValPac = readline.question("Digite o ano da validade do pacote: ");
                            var dataValPac = new Data_1.Data(Number(diaValPac), Number(mesValPac), Number(anoValPac));
                            var pacote = new Pacote_1.Pacote(codPac, nomePac, generoPac, undefined, listaProdutosPac, dataValPac);
                            console.log("Pacote criado: ", pacote);
                            produtosRep.adicionar(pacote);
                        }
                        else {
                            console.log("Lancar erro de comando inválido");
                        }
                    }
                    else if (comandoOperadorDeSistema == "2") {
                        var codigo = readline.question("Digite o codigo do produto que voce deseja remover: ");
                        produtosRep.deletar(codigo);
                        console.log("Produto removido");
                    }
                    else if (comandoOperadorDeSistema == "3") {
                        for (var _f = 0, _g = Array.from(produtosRep.getProdutos()); _f < _g.length; _f++) {
                            var produto = _g[_f];
                            console.log(produto);
                        }
                    }
                    else if (comandoOperadorDeSistema == "4") {
                        console.log(usuarioRep.listarClientes());
                    }
                    else if (comandoOperadorDeSistema == "5") {
                        var codigo = readline.question("Digite o codigo do produto que voce deseja buscar: ");
                        console.log(produtosRep.retornar(codigo));
                    }
                    else if (comandoOperadorDeSistema == "6") {
                        var email = readline.question("Digite o email do usuario que voce quer buscar: ");
                        console.log(usuarioRep.retornaUsuario(email));
                    }
                    else if (comandoOperadorDeSistema == "7") {
                        console.log("O operador de sistema " + user_1.getNome() + " está saindo do sistema.");
                        user_1 = undefined;
                        break;
                    }
                    else {
                        console.log("Comando não existe. Por favor, escolha outra opição: \n");
                    }
                }
                while (user_1 instanceof Cliente_1.Cliente) {
                    console.log("---------------------------------------------------- Olá " + user_1.getNome() + "----------------------------------------------------\n" +
                        " 1 – Listar Produtos da Loja \n" +
                        " 2 – Listar meus Produtos \n" +
                        " 3 – Comprar Produto \n" +
                        " 4 – Play \n" +
                        " 5 – Sair \n");
                    var comandoCliente = readline.question("Digite o número da opção que você desejar: ");
                    if (comandoCliente == "1") {
                        for (var _h = 0, _j = Array.from(produtosRep.getProdutos()); _h < _j.length; _h++) {
                            var produto = _j[_h];
                            console.log(produto);
                        }
                    }
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
                        if (Array.from(user_1.getListaDeProdutos()).length == 0) {
                            console.log("Você ainda não possui produtos comprados");
                        }
                        else {
                            for (var _k = 0, _l = user_1.getListaDeProdutos(); _k < _l.length; _k++) {
                                var produto = _l[_k];
                                console.log(produto);
                            }
                        }
                    }
                    else if (comandoCliente == "3") {
                        //preciso adicionaro a lista de produtos comprados
                        //revisar
                        var codigoComprado = readline.question("Digite o código do produto que você quer comprar: ");
                        var produtoComprado = produtosRep.retornar(codigoComprado);
                        if (produtoComprado != undefined) {
                            try {
                                if (user_1.getCartaoDeCredito().getLimite() > produtoComprado.getPreco()) {
                                    if (produtoComprado instanceof Pacote_1.Pacote) {
                                        var compra = readline.question("Você deseja fazer uma assinatura mensal ao invés de comprar o pacote? \n O valor do pacote total é: " + produtoComprado.getPreco() + "\n O valor da assinatura mensal é: " + produtoComprado.getPrecoMensal() + "\n Se sim, digite 1, se não, digite 2: ");
                                        var validade = null;
                                        if (compra == "1") {
                                            var dia = readline.question("Precisamos da data da sua assinatura mensal. Digite o dia: ");
                                            var mes = readline.question("Digite o mes: ");
                                            var ano = readline.question("Digite o ano: ");
                                            validade = new Data_1.Data(Number(dia), Number(mes), Number(ano));
                                            produtoComprado.setValidade(validade);
                                            var limiteAtual = user_1.getCartaoDeCredito().getLimite() - produtoComprado.getPrecoMensal();
                                            user_1.getCartaoDeCredito().setLimite(limiteAtual);
                                            user_1.comprarProduto(produtoComprado);
                                        }
                                        else {
                                            produtoComprado.setValidade(validade);
                                            var limiteAtual = user_1.getCartaoDeCredito().getLimite() - produtoComprado.getPreco();
                                            user_1.getCartaoDeCredito().setLimite(limiteAtual);
                                            user_1.comprarProduto(produtoComprado);
                                        }
                                    }
                                    else {
                                        var limiteAtual = user_1.getCartaoDeCredito().getLimite() - produtoComprado.getPreco();
                                        user_1.getCartaoDeCredito().setLimite(limiteAtual);
                                        user_1.comprarProduto(produtoComprado);
                                    }
                                    console.log("Produto " + produtoComprado.getNome() + " foi comprado.");
                                }
                                else {
                                    throw new NoLimitCreditCardError_1.NoLimitCreditCardError("NoLimitCreditCardError");
                                }
                            }
                            catch (ex) {
                                if (ex instanceof NoLimitCreditCardError_1.NoLimitCreditCardError) {
                                    console.log("CARTÃO DE CRÉDITO SEM LIMITE\n" + "O seu limite é: " + user_1.getCartaoDeCredito().getLimite());
                                    console.log("Tente comprar um produto mais barato.");
                                    var novoComando = readline.question("Você deseja tentar efetuar uma nova compra? Se sim, digite 1, se não, digite 2: ");
                                    if (novoComando == "1") {
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
                        console.log(user_1.getListaDeProdutos());
                        var codigoExecutar = readline.question("Digite o código do produto que você quer executar: ");
                        var produtoExe = produtosRep.retornar(codigoExecutar);
                        if (produtoExe != undefined) {
                            user_1.executarMidia(produtoExe);
                        }
                    }
                    else if (comandoCliente == "5") {
                        console.log(user_1.getNome() + " saindo do SpotFlix! Até logo...");
                        user_1 = undefined;
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
        var nome = readline.question("Digite o seu nome completo: ");
        var email = readline.question("Digite o seu e-mail: ");
        var senha = readline.question("Digite uma senha: ");
        var endereco = readline.question("Digite o seu endereço ");
        /* let dia, mes, ano: any = readline.question("Digite a sua data de nascimento (DD/MM/ANO): ").split("/");
        let dataNasc: Data  = new Data(Number(dia), Number(mes), Number(ano)); */
        var dia = readline.question("Digite o dia do seu nascimento: ");
        var mes = readline.question("Digite o mês do seu nascimento: ");
        var ano = readline.question("Digite o ano do seu nascimento: ");
        var dataNasc = new Data_1.Data(Number(dia), Number(mes), Number(ano));
        var numeroCartao = readline.question("Digite o número do seu cartão de crédito: ");
        var diaValidadeC = readline.question("Digite o dia da validade: ");
        var mesValidadeC = readline.question("Digite o mês da validade: ");
        var anoValidadeC = readline.question("Digite o ano da validade: ");
        var dataValidadeC = new Data_1.Data(Number(diaValidadeC), Number(mesValidadeC), Number(anoValidadeC));
        var codigoCCV = readline.question("Digite o código CCV do cartão: ");
        var limite = readline.question("Digite o limite do seu cartão: ");
        var cartaoDeCredito = new CartaoDeCredito_1.CartaoDeCredito(numeroCartao, dataValidadeC, Number(codigoCCV), Number(limite));
        var novoCliente = new Cliente_1.Cliente(nome, email, senha, endereco, dataNasc, [], cartaoDeCredito);
        usuarioRep.adicionarUsuario(novoCliente);
        usuarioRep.clientes.push(novoCliente);
        console.log("Seu cadastro foi feito com sucesso!!");
    }
    else if (comando == "3") {
        console.log("Fechando programa");
        break;
        // COLOCAR BREAK
    }
}
