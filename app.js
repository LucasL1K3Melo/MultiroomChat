/**
 * 
 * Importar configurações do servidor.
 * Importing server configs.
 * 
*/
let app = require('./config/server.js');
 
/**
  * 
  * Parametrizar a porta de escuta.
  * Listener param.
  * 
*/
let server = app.listen(3000,'localhost', () => {
  console.log('[OK] Servidor Online: Porta 3000')
});

// Socket está escutando a porta
let io = require('socket.io').listen(server);


app.set('io', io);

// Cria conexão com Socket
io.on('connection', function(socket){

  console.log("Usuário se conectou.");

  socket.on('disconnect', function(){
    console.log("Usuário desconectou.")
  });
});