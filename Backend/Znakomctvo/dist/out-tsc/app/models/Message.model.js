"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = (function () {
    function Message(id, from, to, text, sentDate, userId, user) {
        this.id = id;
        this.from = from;
        this.to = to;
        this.text = text;
        this.sentDate = sentDate;
        this.userId = userId;
        this.user = user;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=Message.model.js.map