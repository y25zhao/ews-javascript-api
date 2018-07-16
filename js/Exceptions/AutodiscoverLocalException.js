"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceLocalException_1 = require("./ServiceLocalException");
var AutodiscoverLocalException = /** @class */ (function (_super) {
    __extends(AutodiscoverLocalException, _super);
    function AutodiscoverLocalException(message, innerException) {
        if (message === void 0) { message = null; }
        if (innerException === void 0) { innerException = null; }
        return _super.call(this, message, innerException) || this;
    }
    return AutodiscoverLocalException;
}(ServiceLocalException_1.ServiceLocalException));
exports.AutodiscoverLocalException = AutodiscoverLocalException;
