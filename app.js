/**
 * 
 * Importar configurações do servidor.
 * Importing server configs.
 * 
*/
var app = require('./config/server.js');
 
/**
  * 
  * Parametrizar a porta de escuta.
  * Listener param.
  * 
*/
var server = app.listen(8080,'localhost', () => {
  console.log('[OK] Servidor Online: Porta 8080')
});

// Socket está escutando a porta
var io = require('socket.io').listen(server);


app.set('io', io);

// Cria conexão com Socket
io.on('connection', function(socket){

  console.log("Usuário se conectou.");

  socket.on('disconnect', function(){
    console.log("Usuário desconectou.")
  });

  socket.on('msgParaServidor', function(data){
    socket.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});
  
    socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});
  });

});