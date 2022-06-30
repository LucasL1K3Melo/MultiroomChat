module.exports.iniciaChat = function(application, req, res){

    let dadosForm = req.body;

    // ERRO DURANTE A VALIDAÇÃO DE DADOS, NÃO PERMITE REDIRECIONAR PARA O CHAT
    // Validação de usuário:
    // req.assert('apelido', 'Nome ou apelido é obrigatório.').notEmpty();

    // Retorna os erros
    let errors = req.validationErrors();

    if(errors){
        res.render("index", {validacao : errors});
        return; //Interrompe o código
    }

    application.get('io').emit('msgParaCliente','Test');

    // Renderiza a página do chat:
    res.render("chat");
};