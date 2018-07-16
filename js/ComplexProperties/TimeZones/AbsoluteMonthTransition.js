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
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var TimeZoneTransition_1 = require("./TimeZoneTransition");
var AbsoluteMonthTransition = /** @class */ (function (_super) {
    __extends(AbsoluteMonthTransition, _super);
    function AbsoluteMonthTransition(timeZoneDefinition, targetPeriod) {
        var _this = _super.call(this, timeZoneDefinition, targetPeriod) || this;
        _this.timeOffset = null;
        _this.month = null;
        return _this;
    }
    Object.defineProperty(AbsoluteMonthTransition.prototype, "TimeOffset", {
        get: function () { return this.timeOffset; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbsoluteMonthTransition.prototype, "Month", {
        get: function () { return this.month; },
        enumerable: true,
        configurable: true
    });
    AbsoluteMonthTransition.prototype.InitializeFromTransitionTime = function (transitionTime) { throw new Error("AbsoluteMonthTransition.ts - InitializeFromTransitionTime : Not implemented."); };
    //ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("AbsoluteMonthTransition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    /**@internal */
    AbsoluteMonthTransition.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.TimeOffset, EwsUtilities_1.EwsUtilities.TimeSpanToXSDuration(this.timeOffset));
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Month, this.month);
    };
    return AbsoluteMonthTransition;
}(TimeZoneTransition_1.TimeZoneTransition));
exports.AbsoluteMonthTransition = AbsoluteMonthTransition;
