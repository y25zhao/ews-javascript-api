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
var DayOfTheWeek_1 = require("../../Enumerations/DayOfTheWeek");
var AbsoluteMonthTransition_1 = require("./AbsoluteMonthTransition");
var RelativeDayOfMonthTransition = /** @class */ (function (_super) {
    __extends(RelativeDayOfMonthTransition, _super);
    function RelativeDayOfMonthTransition(timeZoneDefinition, targetPeriod) {
        var _this = _super.call(this, timeZoneDefinition, targetPeriod) || this;
        _this.dayOfTheWeek = DayOfTheWeek_1.DayOfTheWeek.Sunday;
        _this.weekIndex = null;
        return _this;
    }
    Object.defineProperty(RelativeDayOfMonthTransition.prototype, "DayOfTheWeek", {
        get: function () { return this.dayOfTheWeek; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeDayOfMonthTransition.prototype, "WeekIndex", {
        get: function () { return this.weekIndex; },
        enumerable: true,
        configurable: true
    });
    RelativeDayOfMonthTransition.prototype.CreateTransitionTime = function () {
        throw new Error("RelativeDayOfMonthTransition.ts - CreateTransitionTime : Not implemented.");
        // return TimeZoneInfo.TransitionTime.CreateFloatingDateRule(
        //         new DateTime(this.TimeOffset.Ticks),
        //         this.Month,
        //         this.WeekIndex == -1 ? 5 : this.WeekIndex,
        //         EwsUtilities.EwsToSystemDayOfWeek(this.DayOfTheWeek));
    };
    RelativeDayOfMonthTransition.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.RecurringDayTransition; };
    RelativeDayOfMonthTransition.prototype.InitializeFromTransitionTime = function (transitionTime /*System.TimeZoneInfo.TransitionTime*/) { throw new Error("RelativeDayOfMonthTransition.ts - InitializeFromTransitionTime : Not implemented."); };
    //ReadElementsFromXmlJsObject(reader: any): boolean{ throw new Error("RelativeDayOfMonthTransition.ts - TryReadElementFromXmlJsObject : Not implemented.");}
    /**@internal */
    RelativeDayOfMonthTransition.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DayOfWeek, this.dayOfTheWeek);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Occurrence, this.weekIndex);
    };
    return RelativeDayOfMonthTransition;
}(AbsoluteMonthTransition_1.AbsoluteMonthTransition));
exports.RelativeDayOfMonthTransition = RelativeDayOfMonthTransition;
