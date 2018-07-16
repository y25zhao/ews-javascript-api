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
var GroupMember_1 = require("./GroupMember");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
var GroupMemberCollection = /** @class */ (function (_super) {
    __extends(GroupMemberCollection, _super);
    function GroupMemberCollection(collection) {
        if (collection === void 0) { collection = null; }
        var _this = _super.call(this) || this;
        if (collection != null) {
            collection.forEach(function (entity) { _this.InternalAdd(entity); });
        }
        return _this;
    }
    //Add(member: GroupMember): any { throw new Error("GroupMemberCollection.ts - Add : Not implemented."); }
    //AddContactEmailAddress(contact: Contact, emailAddressKey: EmailAddressKey): any { throw new Error("GroupMemberCollection.ts - AddContactEmailAddress : Not implemented."); }
    //AddContactGroup(contactGroupId: ItemId): any { throw new Error("GroupMemberCollection.ts - AddContactGroup : Not implemented."); }
    //AddDirectoryContact(address: string, routingType: string): any { throw new Error("GroupMemberCollection.ts - AddDirectoryContact : Not implemented."); }
    //AddDirectoryContact(smtpAddress: string): any { throw new Error("GroupMemberCollection.ts - AddDirectoryContact : Not implemented."); }
    //AddDirectoryPublicFolder(smtpAddress: string): any { throw new Error("GroupMemberCollection.ts - AddDirectoryPublicFolder : Not implemented."); }
    //AddDirectoryUser(address: string, routingType: string): any { throw new Error("GroupMemberCollection.ts - AddDirectoryUser : Not implemented."); }
    //AddDirectoryUser(smtpAddress: string): any { throw new Error("GroupMemberCollection.ts - AddDirectoryUser : Not implemented."); }
    //AddOneOff(displayName: string, address: string, routingType: string): any { throw new Error("GroupMemberCollection.ts - AddOneOff : Not implemented."); }
    //AddOneOff(displayName: string, smtpAddress: string): any { throw new Error("GroupMemberCollection.ts - AddOneOff : Not implemented."); }
    //AddPersonalContact(contactId: ItemId): any { throw new Error("GroupMemberCollection.ts - AddPersonalContact : Not implemented."); }
    //AddPersonalContact(contactId: ItemId, addressToLink: string): any { throw new Error("GroupMemberCollection.ts - AddPersonalContact : Not implemented."); }
    //AddPublicGroup(smtpAddress: string): any { throw new Error("GroupMemberCollection.ts - AddPublicGroup : Not implemented."); }
    //AddRange(members:GroupMember[] /*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("GroupMemberCollection.ts - AddRange : Not implemented."); }
    //Clear(): any { throw new Error("GroupMemberCollection.ts - Clear : Not implemented."); }
    //ClearChangeLog(): any { throw new Error("GroupMemberCollection.ts - ClearChangeLog : Not implemented."); }
    GroupMemberCollection.prototype.CreateComplexProperty = function (xmlElementName) { return new GroupMember_1.GroupMember(); };
    GroupMemberCollection.prototype.CreateDefaultComplexProperty = function () {
        return new GroupMember_1.GroupMember();
    };
    //Find(key: string): GroupMember { throw new Error("GroupMemberCollection.ts - Find : Not implemented."); }
    GroupMemberCollection.prototype.GetCollectionItemXmlElementName = function (member) {
        return XmlElementNames_1.XmlElementNames.Member;
    };
    return GroupMemberCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.GroupMemberCollection = GroupMemberCollection;
//}
