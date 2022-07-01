module.exports.iniciaChat = function(application, req, res){

    var dadosForm = req.body;

    // ERRO DURANTE A VALIDAÇÃO DE DADOS, NÃO PERMITE REDIRECIONAR PARA O CHAT
    // Validação de usuário:
    // req.assert('apelido', 'Nome ou apelido é obrigatório.').notEmpty();

    // Retorna os erros
    var errors = req.validationErrors();

    if(errors){
        res.render("index", {validacao : errors});
        return; //Interrompe o código
    }

    application.get('io').emit(
        'msgParaCliente', 
        { apelido: dadosForm.apelido, mensagem: ' acabou de se conectar ao chat' }
    );

    // Renderiza a página do chat:
    res.render("chat", {dadosForm : dadosForm });
};