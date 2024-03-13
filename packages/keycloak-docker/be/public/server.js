"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const app = (0, express_1.default)();
function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        return false;
    }
    return compression_1.default.filter(req, res);
}
app.use((0, compression_1.default)({ filter: shouldCompress }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)({}));
app.use((req, res, next) => {
    res.setHeader('Permissions-Policy', 'camera=(), fullscreen=(self), geolocation=(self), magnetometer=(), microphone=(), midi=(), payment=(), sync-xhr=()');
    next();
});
const root = path_1.default.join(__dirname, './build');
app.use(express_1.default.static(root));
app.get('*', (req, res) => {
    res.sendFile(root + '/index.html');
});
app.listen(3000, () => console.log(`Server is listening on port ${3000}`));
