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

// Cria conexão com Socket
io.on('connection', function(socket){

  console.log('Conexão realizada.')

  socket.on('disconnect', function(){
    console.log("Usuário desconectou.")
  });
});