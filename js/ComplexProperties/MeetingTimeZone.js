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
var MeetingTimeZone = /** @class */ (function (_super) {
    __extends(MeetingTimeZone, _super);
    function MeetingTimeZone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*fix constructor in StartTimeZonePropertyDefinition - <TimeZoneInfo>value*/
    MeetingTimeZone.prototype.InternalToJson = function (service) { throw new Error("MeetingTimeZone.ts - InternalToJson : Not implemented."); };
    MeetingTimeZone.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("MeetingTimeZone.ts - LoadFromJson : Not implemented."); };
    /**@internal */
    MeetingTimeZone.prototype.ReadAttributesFromXmlJsObject = function (reader) { throw new Error("MeetingTimeZone.ts - ReadAttributesFromXml : Not implemented."); };
    MeetingTimeZone.prototype.ToTimeZoneInfo = function () { throw new Error("MeetingTimeZone.ts - ToTimeZoneInfo : Not implemented."); };
    /**@internal */
    MeetingTimeZone.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("MeetingTimeZone.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    /**@internal */
    MeetingTimeZone.prototype.WriteAttributesToXml = function (writer) { throw new Error("MeetingTimeZone.ts - WriteAttributesToXml : Not implemented."); };
    /**@internal */
    MeetingTimeZone.prototype.WriteElementsToXml = function (writer) { throw new Error("MeetingTimeZone.ts - WriteElementsToXml : Not implemented."); };
    return MeetingTimeZone;
}(ComplexProperty_1.ComplexProperty));
exports.MeetingTimeZone = MeetingTimeZone;
//}
