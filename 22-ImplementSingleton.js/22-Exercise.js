class Chat {
    constructor() {
      if (!Chat.instance) {
        this.users = [];
        Chat.instance = this;
      }
      return Chat.instance;
    }
  
    static getInstance() {
      if (!Chat.instance) {
        Chat.instance = new Chat();
      }
      return Chat.instance;
    }
  
    addUser(user) {
      if (user instanceof User) {
        this.users.push(user);
      } else {
        throw new Error('El objeto proporcionado no es una instancia de User');
      }
    }
  
    removeUser(name) {
      this.users = this.users.filter(user => user.name !== name);
    }
  
    sendMessage(message) {
      this.users.forEach(user => user.receiveMessage(message));
    }
  }
  
  module.exports = Chat;