"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("./ExtensionMethods");
var uuid = require("node-uuid");
/** Guid proxy class */
var Guid = /** @class */ (function () {
    function Guid(str) {
        this.guid = null;
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(str) || str === null) {
            throw new TypeError("Guid.ctor - invalid input");
        }
        str = str.replace("-", "").replace("{", "").replace("}", "").toLowerCase();
        var parsed = uuid.parse(str);
        if (parsed) {
            this.guid = uuid.unparse(parsed);
            // if (this.guid.replace("-", "") !== str.toString()) {
            // 	throw new TypeError("Guid.ctor - malformed string")
            // }
        }
    }
    Guid.prototype.ToString = function () {
        return this.guid;
    };
    Guid.Parse = function (str) {
        var parsed = uuid.parse(str);
        if (parsed) {
            return new Guid(str);
        }
    };
    Guid.Empty = new Guid('00000000-0000-0000-0000-000000000000');
    return Guid;
}());
exports.Guid = Guid;
