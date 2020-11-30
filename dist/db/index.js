"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'vepalceshi123456',
    database: 'chris'
});
connection.connect(function (err) {
    console.log(err, 'err');
});
exports.default = connection;
