"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("./ExtensionMethods");
var uuid = require("uuid");
/** Guid proxy class */
var Guid = /** @class */ (function () {
    function Guid(str) {
        this.guid = '00000000-0000-0000-0000-000000000000';
        var regx = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        if (arguments.length > 0) {
            if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(str) || str === null) {
                throw new TypeError("Guid.ctor - invalid input");
            }
            //str = str.replace("-", "").replace("{", "").replace("}", "").toLowerCase();
            str = str.replace("{", "").replace("}", "").toLowerCase();
            if (regx.test(str)) {
                this.guid = str;
            }
            else {
                throw new TypeError("Guid.ctor - invalid input");
            }
        }
    }
    Guid.prototype.ToString = function () {
        return this.guid;
    };
    Guid.prototype.toString = function () {
        return this.guid;
    };
    Guid.NewGuid = function () {
        return new Guid(uuid.v4());
    };
    Guid.Parse = function (str) {
        return new Guid(str);
    };
    Guid.TryParse = function (str, _parsed_output) {
        if (_parsed_output === void 0) { _parsed_output = { guid: null }; }
        try {
            _parsed_output.guid = new Guid(str);
            return true;
        }
        catch (error) {
            return false;
        }
    };
    Guid.Empty = new Guid();
    return Guid;
}());
exports.Guid = Guid;
