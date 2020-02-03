"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ mode }) => mode === "development" ? "eval-source-map" : false;
