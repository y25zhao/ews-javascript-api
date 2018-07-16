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
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * ## @internal *Not Implemented*
 */
var GetServerTimeZonesRequest = /** @class */ (function (_super) {
    __extends(GetServerTimeZonesRequest, _super);
    function GetServerTimeZonesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetServerTimeZonesRequest.prototype.CreateServiceResponse = function (service, responseIndex) { throw new Error("GetServerTimeZonesRequest.ts - CreateServiceResponse : Not implemented."); };
    GetServerTimeZonesRequest.prototype.GetExpectedResponseMessageCount = function () { throw new Error("GetServerTimeZonesRequest.ts - GetExpectedResponseMessageCount : Not implemented."); };
    GetServerTimeZonesRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("GetServerTimeZonesRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    GetServerTimeZonesRequest.prototype.GetResponseMessageXmlElementName = function () { throw new Error("GetServerTimeZonesRequest.ts - GetResponseMessageXmlElementName : Not implemented."); };
    GetServerTimeZonesRequest.prototype.GetResponseXmlElementName = function () { throw new Error("GetServerTimeZonesRequest.ts - GetResponseXmlElementName : Not implemented."); };
    GetServerTimeZonesRequest.prototype.GetXmlElementName = function () { throw new Error("GetServerTimeZonesRequest.ts - GetXmlElementName : Not implemented."); };
    GetServerTimeZonesRequest.prototype.Validate = function () { throw new Error("GetServerTimeZonesRequest.ts - Validate : Not implemented."); };
    /**@internal */
    GetServerTimeZonesRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("GetServerTimeZonesRequest.ts - WriteElementsToXml : Not implemented."); };
    return GetServerTimeZonesRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.GetServerTimeZonesRequest = GetServerTimeZonesRequest;
