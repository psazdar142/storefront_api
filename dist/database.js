"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1["default"].config();
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DB = _a.POSTGRES_DB, POSGRES_USER = _a.POSGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, PORT = _a.PORT;
var client = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSGRES_USER,
    password: POSTGRES_PASSWORD
});
exports["default"] = client;
