"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var fs_1 = __importDefault(require("fs"));
var node_path_1 = __importDefault(require("node:path"));
function resize(name, width, height) {
    var imgstream = fs_1.default.createReadStream(node_path_1.default.resolve("./images/".concat(name, ".jpg")));
    var reziseing = (0, sharp_1.default)();
    if (width || height) {
        reziseing = reziseing.resize(width, height);
    }
    return imgstream.pipe(reziseing);
}
exports.default = resize;
