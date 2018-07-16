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
var ComplexProperty_1 = require("./ComplexProperty");
var TimeChange = /** @class */ (function (_super) {
    __extends(TimeChange, _super);
    function TimeChange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**@internal */
    TimeChange.prototype.ReadAttributesFromXmlJsObject = function (reader) { throw new Error("TimeChange.ts - ReadAttributesFromXml : Not implemented."); };
    /**@internal */
    TimeChange.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("TimeChange.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    /**@internal */
    TimeChange.prototype.WriteAttributesToXml = function (writer) { throw new Error("TimeChange.ts - WriteAttributesToXml : Not implemented."); };
    /**@internal */
    TimeChange.prototype.WriteElementsToXml = function (writer) { throw new Error("TimeChange.ts - WriteElementsToXml : Not implemented."); };
    return TimeChange;
}(ComplexProperty_1.ComplexProperty));
exports.TimeChange = TimeChange;
//}
