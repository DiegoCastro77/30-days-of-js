class Newsletter {
    constructor() {
        this.subscribers = [];
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
        console.log(`El suscriptor ${subscriber.email} se ha suscrito al newsletter.   \n`);
    }

    unsubscribe(email) {
        this.subscribers = this.subscribers.filter(subscriber => {
            if (subscriber.email === email) {
                console.log(`El suscriptor ${email} se ha dado de baja del newsletter. \n`);
                return false;
            }
            return true;
        });
    }

    post(article) {
        console.log(`Se ha publicado un nuevo artículo: "${article.title}"\n`);
        this.subscribers.forEach(subscriber => {
            subscriber.receive(article);
        });
    }
}

class Subscriber {
    constructor(email) {
        this.email = email;
    }

    receive(article) {
        console.log(`El suscriptor ${this.email} ha recibido el artículo: "${article.title}"   \n`);
    }
}

// Ejemplo de uso
const newsletter = new Newsletter();
const subscriber1 = new Subscriber("pepe@mail.com" );
const subscriber2 = new Subscriber("juanito@mail.com");
const subscriber3 = new Subscriber("pedro@mail.com");

newsletter.subscribe(subscriber1);
newsletter.subscribe(subscriber2);
newsletter.subscribe(subscriber3);

const article = {
    title: "30 días de js",
    content: "Aprende js en 30 días"
};

newsletter.post(article);

newsletter.unsubscribe("juanito@mail.com");

const article2 = {
    title: "JavaScript avanzado",
    content: "Domina conceptos avanzados de JavaScript"
};

newsletter.post(article2);
