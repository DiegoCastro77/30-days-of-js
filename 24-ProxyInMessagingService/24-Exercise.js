    const { user } = require('./24-User');
    const Messages = require('./24-Message');

    class MessagesProxy {
        constructor() {
            this.messages = new Messages();
        }

        sendMessage(text) {
            if (user.isLoggedIn()) {
                this.messages.sendMessage(text);
            } else {
                throw new Error("Usuario no registrado");
            }
        }

        getHistory() {
            if (user.isLoggedIn()) {
                return this.messages.getHistory();
            } else {
                throw new Error("Usuario no registrado");
            }
        }
    }

    module.exports = MessagesProxy;
