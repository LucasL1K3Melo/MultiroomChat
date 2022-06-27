module.exports.iniciaChat = function(app, req, res){

    

    let dadosForm = req.body;

    // ERRO DURANTE A VALIDAÇÃO DE DADOS, NÃO PERMITE REDIRECIONAR PARA O CHAT
    // Validação de usuário:
    //req.assert('apelido', 'Nome ou apelido é obrigatório.').notEmpty();

    // REtorna os erros
    let errors = req.validationErrors();

    if(errors){
        res.render("index", {validacao : errors});
        return; //Interrompe o código
    }

    // Renderiza a página do chat:
    res.render("chat");
};