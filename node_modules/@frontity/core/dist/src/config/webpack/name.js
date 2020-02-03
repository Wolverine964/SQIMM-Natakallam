"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// It is important to use the names 'client' and 'server' for
// webpack-hot-server-middleware.
exports.default = ({ target }) => target === "server" ? "server" : "client";
