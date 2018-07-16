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
var AbsoluteMonthTransition_1 = require("./AbsoluteMonthTransition");
var AbsoluteDayOfMonthTransition = /** @class */ (function (_super) {
    __extends(AbsoluteDayOfMonthTransition, _super);
    function AbsoluteDayOfMonthTransition(timeZoneDefinition, targetPeriod) {
        var _this = _super.call(this, timeZoneDefinition, targetPeriod) || this;
        _this.dayOfMonth = null;
        _this.dayOfMonth = timeZoneDefinition;
        return _this;
    }
    Object.defineProperty(AbsoluteDayOfMonthTransition.prototype, "DayOfMonth", {
        get: function () { return this.dayOfMonth; },
        enumerable: true,
        configurable: true
    });
    AbsoluteDayOfMonthTransition.prototype.CreateTransitionTime = function () {
        throw new Error("AbsoluteDayOfMonthTransition.ts - CreateTransitionTime : Not implemented.");
        // return TimeZoneInfo.TransitionTime.CreateFixedDateRule(
        //         new DateTime(this.TimeOffset.Ticks),
        //         this.Month,
        //         this.DayOfMonth); 
    };
    AbsoluteDayOfMonthTransition.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.RecurringDateTransition; };
    AbsoluteDayOfMonthTransition.prototype.InitializeFromTransitionTime = function (transitionTime) {
        _super.prototype.InitializeFromTransitionTime.call(this, transitionTime);
        this.dayOfMonth = transitionTime.Day;
    };
    //ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("AbsoluteDayOfMonthTransition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    /**@internal */
    AbsoluteDayOfMonthTransition.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Day, this.dayOfMonth);
    };
    return AbsoluteDayOfMonthTransition;
}(AbsoluteMonthTransition_1.AbsoluteMonthTransition));
exports.AbsoluteDayOfMonthTransition = AbsoluteDayOfMonthTransition;
