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
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var ComplexProperty_1 = require("./ComplexProperty");
var DictionaryEntryProperty = /** @class */ (function (_super) {
    __extends(DictionaryEntryProperty, _super);
    function DictionaryEntryProperty(key) {
        var _this = _super.call(this) || this;
        _this.key = null;
        _this.key = key;
        return _this;
    }
    Object.defineProperty(DictionaryEntryProperty.prototype, "Key", {
        get: function () {
            return this.key;
        },
        set: function (value) {
            this.key = value;
        },
        enumerable: true,
        configurable: true
    });
    /**@internal */
    DictionaryEntryProperty.prototype.ReadAttributesFromXmlJsObject = function (reader) { throw new Error("DictionaryEntryProperty.ts - ReadAttributesFromXml : Not used."); };
    /**@internal */
    DictionaryEntryProperty.prototype.WriteAttributesToXml = function (writer) { writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Key, this.keyType[this.Key]); };
    DictionaryEntryProperty.prototype.WriteDeleteUpdateToJson = function (service, ewsObject, updates /*System.Collections.Generic.List<T>*/) { throw new Error("DictionaryEntryProperty.ts - WriteDeleteUpdateToJson : Not implemented."); };
    /**@internal */
    DictionaryEntryProperty.prototype.WriteDeleteUpdateToXml = function (writer, ewsObject) { return false; };
    DictionaryEntryProperty.prototype.WriteSetUpdateToJson = function (service, ewsObject, propertyDefinition, updates /*System.Collections.Generic.List<T>*/) { throw new Error("DictionaryEntryProperty.ts - WriteSetUpdateToJson : Not implemented."); };
    /**@internal */
    DictionaryEntryProperty.prototype.WriteSetUpdateToXml = function (writer, ewsObject, ownerDictionaryXmlElementName) { return false; };
    return DictionaryEntryProperty;
}(ComplexProperty_1.ComplexProperty));
exports.DictionaryEntryProperty = DictionaryEntryProperty;
