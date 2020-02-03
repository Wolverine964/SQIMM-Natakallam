"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ target }) => {
    return target === "server" ? "node" : "web";
};
