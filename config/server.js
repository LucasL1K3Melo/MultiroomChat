/**
 * 
 * Importar o módulo do framework Express.
 * Import the Express framework.
 * 
 */
let express = require('express');

/**
 * Iniciar a instancia do Express.
 * Start the Express.
*/
let app = express();

/**
 * 
 * Importar o módulo do Consign.
 * Import the Consign module.
 * 
 */
let consign = require('consign');

/**
 * 
 * Importar o módulo do framework body-parser.
 * Import the body-parser framework.
 * 
 */
let bodyParser = require('body-parser');

/**
 * 
 * Importar o módulo do framework Express Validator.
 * Import the Express-validator framework.
 * 
 */
let  expressValidator = require('express-validator');

/**
 * Engine visual: Setar as variáveis 'view engine' e 'views' do Express.
*/
app.set('view engine', 'ejs'); // Indica a engine
app.set('views', './app/views'); // Indica onde os templates estão

/**
 * 
 * MIDDLEWARE CONFIGS:
 * 
 * Configuração do middleware express.static
*/
app.use(express.static('./app/public'));

/**
 * Configuração do middleware bodyParser
*/
app.use(bodyParser.urlencoded({extended: true}));

/**
 * 
 * Configuração middleware express-validator
 * Middleware config express-validator
 * 
*/
app.use(expressValidator());

/**
 * 
 * Configuração do consign
 * Consign config
 *
*/
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app); // Insere dentro do objeto app


/**
 * Exportar módulos.
 * Export modules.
 */
module.exports = app;

/**
 * Informa no console o módulo carregado
*/
console.log("[OK] Módulo Server - Carregado corretamente.")