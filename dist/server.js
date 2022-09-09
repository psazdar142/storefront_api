"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var user_routes_1 = __importDefault(require("./handlers/user_routes"));
var product_routes_1 = __importDefault(require("./handlers/product_routes"));
var order_routes_1 = __importDefault(require("./handlers/order_routes"));
var user_1 = require("./models/user");
var app = (0, express_1["default"])();
var address = "0.0.0.0:3000";
app.use(body_parser_1["default"].json());
app.get('/', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var store, create_test;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res.send('Hello World!');
                    store = new user_1.UserStore();
                    return [4 /*yield*/, store.create({
                            first_name: 'Jimmy',
                            last_name: "Hendrix",
                            password: 'cows',
                            id: 1
                        })];
                case 1:
                    create_test = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
(0, user_routes_1["default"])(app);
(0, product_routes_1["default"])(app);
(0, order_routes_1["default"])(app);
// import { UserStore, User } from './models/user'
// import { ProductStore } from './models/product'
// import { OrderStore } from './models/order'
// <<<< User Model Testing >>>>
// const store = new UserStore()
// const create_test = await store.create({
//     first_name: 'John',
//     last_name: "smith",
//     password: 'cows',
//     id: 1
// });
// const user_index_test = await store.index();
// console.log(user_index_test)
// const user_delete_test = await store.delete(2);
// const user_show_test = await store.show(15);
// console.log(user_show_test)
// <<<< Product Model Testing >>>>
// const store = new ProductStore();
// const create_test = await store.create({
//     product_name: "dog food",
//     product_price: 5,
//     id: 1
// });
// const index_test = await store.index();
// console.log(index_test)
// const user_delete_test = await store.delete(1);
// const show_test = await store.show(7);
// console.log(show_test)
// <<<< Order Model Testing >>>>
// const store = new OrderStore();
// const create_test = await store.create({
//     product_id: 1,
//     product_quantity: 6,
//     user_id: 1,
//     order_status: "INCOMPLETE",
//     id: 1
// });
// const index_test = await store.index();
// console.log(index_test)
// const user_delete_test = await store.delete(1);
// const show_test = await store.show(7);
// console.log(show_test)
