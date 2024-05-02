class Messages {
    constructor() {
        this.history = [];
    }

    sendMessage(text) {
        this.history.push(text);
    }

    getHistory() {
        return this.history;
    }
}

module.exports = Messages;
