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
var EmailAddress_1 = require("./EmailAddress");
var MemberStatus_1 = require("../Enumerations/MemberStatus");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var GroupMember = /** @class */ (function (_super) {
    __extends(GroupMember, _super);
    /**
     * Initializes a new instance of the **EmailUserEntity** class.
     */
    function GroupMember() {
        var _this = _super.call(this) || this;
        _this.AddressInformation = new EmailAddress_1.EmailAddress();
        _this.addressInformation = new EmailAddress_1.EmailAddress();
        _this.Namespace = XmlNamespace_1.XmlNamespace.Types;
        return _this;
    }
    // AddressInformationChanged(complexProperty: ComplexProperty): any { throw new Error("GroupMember.ts - AddressInformationChanged : Not implemented."); }
    // InternalToJson(service: ExchangeService): any { throw new Error("GroupMember.ts - InternalToJson : Not implemented."); }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    GroupMember.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlAttributeNames_1.XmlAttributeNames.Key:
                    this.Key = jsObject[key];
                case XmlElementNames_1.XmlElementNames.Status:
                    this.Status = MemberStatus_1.MemberStatus.Normal;
                    break;
                case XmlElementNames_1.XmlElementNames.Mailbox:
                    this.AddressInformation.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                default:
                    break;
            }
        }
    };
    return GroupMember;
}(ComplexProperty_1.ComplexProperty));
exports.GroupMember = GroupMember;
//}
