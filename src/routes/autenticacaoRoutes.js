"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autenticacaoRoutes = void 0;
var Express = require("express");
var AutenticacaoController_1 = require("../controllers/AutenticacaoController");
var _a = require("../modules/tokenValidation"), notCheckAuth = _a.notCheckAuth, checkAuth = _a.checkAuth;
exports.autenticacaoRoutes = Express.Router();
exports.autenticacaoRoutes.get('/entrar', notCheckAuth, AutenticacaoController_1.AutenticacaoController.entrar);
exports.autenticacaoRoutes.post('/entrar', notCheckAuth, AutenticacaoController_1.AutenticacaoController.entrarPost);
exports.autenticacaoRoutes.get('/esqueceu-senha', notCheckAuth, AutenticacaoController_1.AutenticacaoController.esqueceuSenha);
exports.autenticacaoRoutes.post('/esqueceu-senha', notCheckAuth, AutenticacaoController_1.AutenticacaoController.esqueceuSenhaPost);
exports.autenticacaoRoutes.get('/redefinir-senha', notCheckAuth, AutenticacaoController_1.AutenticacaoController.redefinirSenha);
exports.autenticacaoRoutes.post('/redefinir-senha', notCheckAuth, AutenticacaoController_1.AutenticacaoController.redefinirSenhaPost);
exports.autenticacaoRoutes.get('/sair', checkAuth, AutenticacaoController_1.AutenticacaoController.sair);
exports.autenticacaoRoutes.post('/token-validacao', notCheckAuth, AutenticacaoController_1.AutenticacaoController.tokenValidacao);