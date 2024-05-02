class User {
    constructor(name) {
        this.name = name;
        this.loggedIn = false;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    getName() {
        return this.name;
    }
}

const user = new User("1");
user.login()

module.exports = { user };