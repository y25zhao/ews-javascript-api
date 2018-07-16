"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XHRDefaults_1 = require("./XHRDefaults");
var XHRFactory = /** @class */ (function () {
    function XHRFactory() {
    }
    Object.defineProperty(XHRFactory, "XHRApi", {
        get: function () {
            if (typeof this.xhrHelper === 'undefined' || this.xhrHelper === null) {
                this.xhrHelper = new XHRDefaults_1.XHRDefaults();
            }
            return this.xhrHelper;
        },
        enumerable: true,
        configurable: true
    });
    return XHRFactory;
}());
exports.XHRFactory = XHRFactory;
