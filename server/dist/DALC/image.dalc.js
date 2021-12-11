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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginatedImages_DALC = exports.getAllImages_DALC = void 0;
var axios_1 = __importDefault(require("axios"));
var getAllImages_DALC = function () { return __awaiter(void 0, void 0, void 0, function () {
    var headers, response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                headers = { 'x-api-key': 'api-key-69d6587b-eadb-4902-8076-30e738ec8613' };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, axios_1.default)('https://api.jonathanczyzyk.com/api/v1/images/small', { headers: headers })];
            case 2:
                response = _a.sent();
                return [2 /*return*/, response.data];
            case 3:
                error_1 = _a.sent();
                return [2 /*return*/, "Error: ".concat(error_1)];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getAllImages_DALC = getAllImages_DALC;
var getPaginatedImages_DALC = function (page, pageSize) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, response, paginatedResponse, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                headers = { 'x-api-key': 'api-key-69d6587b-eadb-4902-8076-30e738ec8613' };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, axios_1.default)('https://api.jonathanczyzyk.com/api/v1/images/small', { headers: headers })
                    // let paginatedResponse=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
                ];
            case 2:
                response = _a.sent();
                paginatedResponse = response.data;
                paginatedResponse.splice(0, (page - 1) * pageSize);
                paginatedResponse.splice(pageSize);
                return [2 /*return*/, paginatedResponse];
            case 3:
                error_2 = _a.sent();
                return [2 /*return*/, "Error: ".concat(error_2)];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getPaginatedImages_DALC = getPaginatedImages_DALC;
