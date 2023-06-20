"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoUsuarioRoutes = void 0;
var Express = require("express");
var TipoUsuarioController_1 = require("../controllers/TipoUsuarioController");
var funcionalidadesValidacao = require('../modules/funcionalidadesValidacao').funcionalidadesValidacao;
var checkAuth = require('../modules/tokenValidation').checkAuth;
exports.tipoUsuarioRoutes = Express.Router();
exports.tipoUsuarioRoutes.get('/tipos-usuario', checkAuth, funcionalidadesValidacao, TipoUsuarioController_1.TipoUsuarioController.tiposUsuario);
exports.tipoUsuarioRoutes.get('/tipos-usuario/:page', checkAuth, TipoUsuarioController_1.TipoUsuarioController.tiposUsuario);
exports.tipoUsuarioRoutes.get('/cadastrar-tipo', checkAuth, funcionalidadesValidacao, TipoUsuarioController_1.TipoUsuarioController.cadastrarTipoUsuario);
exports.tipoUsuarioRoutes.post('/cadastrar-tipo', checkAuth, funcionalidadesValidacao, TipoUsuarioController_1.TipoUsuarioController.cadastrarTipoUsuarioPost);
exports.tipoUsuarioRoutes.post('/remover-tipo', checkAuth, funcionalidadesValidacao, TipoUsuarioController_1.TipoUsuarioController.removerTipoUsuario);
exports.tipoUsuarioRoutes.get('/permissoes/:tipo', checkAuth, funcionalidadesValidacao, TipoUsuarioController_1.TipoUsuarioController.permissoes);
exports.tipoUsuarioRoutes.post('/permissoes', checkAuth, funcionalidadesValidacao, TipoUsuarioController_1.TipoUsuarioController.permissoesPost);
