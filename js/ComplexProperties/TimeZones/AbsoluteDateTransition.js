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
var Strings_1 = require("../../Strings");
var ServiceLocalException_1 = require("../../Exceptions/ServiceLocalException");
var TimeZoneTransition_1 = require("./TimeZoneTransition");
var AbsoluteDateTransition = /** @class */ (function (_super) {
    __extends(AbsoluteDateTransition, _super);
    function AbsoluteDateTransition(timeZoneDefinition, targetGroup) {
        return _super.call(this, timeZoneDefinition, targetGroup) || this;
    }
    AbsoluteDateTransition.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.AbsoluteDateTransition; };
    AbsoluteDateTransition.prototype.InitializeFromTransitionTime = function (transitionTime) { throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.UnsupportedTimeZonePeriodTransitionTarget); };
    //ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("AbsoluteDateTransition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    /**@internal */
    AbsoluteDateTransition.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DateTime, this.DateTime);
    };
    return AbsoluteDateTransition;
}(TimeZoneTransition_1.TimeZoneTransition));
exports.AbsoluteDateTransition = AbsoluteDateTransition;
