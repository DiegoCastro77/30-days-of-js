class Usuario {
    constructor(name, age) {
      this._name = name;
      this._age = age;
      this._friends = [];
      this._messages = [];
    }
  
    addFriend(friend) {
      this._friends.push(friend);
    }
  
    sendMessage(message, friend) {
      this._messages.push(message);
      friend._messages.push(message);
      console.log(`[${this._name}] envió el mensaje "${message}" a [${friend._name}]`);
    }
  
    showMessages() {
      this._messages.forEach(message => {
        console.log(`[${this._name}] mensaje recibido: "${message}"`);
      });
    }
  
    get name() {
      return this._name;
    }
  
    set name(name) {
      if (name.length > 0) {
        this._name = name;
      } else {
        throw new Error("Agregue un nombre válido");
      }
    }
  
    get age() {
      return this._age;
    }
  
    set age(age) {
      if (age > 0) {
        this._age = age;
      } else {
        throw new Error("Agregue una edad válida");
      }
    }
  }
  
  // Ejemplo de uso
  const usuario1 = new Usuario("Juan", 20);
  const usuario2 = new Usuario("Maria", 25);
  usuario1.addFriend(usuario2);
  usuario1.sendMessage("Hola Maria!", usuario2);
  usuario2.showMessages();
  