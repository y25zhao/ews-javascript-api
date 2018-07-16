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
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * ## *Not Implemented*
 */
var CreateAttachmentResponse = /** @class */ (function (_super) {
    __extends(CreateAttachmentResponse, _super);
    function CreateAttachmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateAttachmentResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("CreateAttachmentResponse.ts - ReadElementsFromJson : Not implemented."); };
    /**@internal */
    CreateAttachmentResponse.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("CreateAttachmentResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); };
    return CreateAttachmentResponse;
}(ServiceResponse_1.ServiceResponse));
exports.CreateAttachmentResponse = CreateAttachmentResponse;
