const readline = require('readline');
const { user } = require('./24-User');
const MessagesProxy = require('./24-Exercise');

const messagesProxy = new MessagesProxy();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptLogin() {
    console.log("Usuario predefinido:", user);
    rl.question("Ingrese su nombre de usuario: ", function (name) {
        if (name === user.getName()) {
            user.login();
            console.log(`Bienvenido, ${user.getName()}.\n`);
            promptMessage();
        } else {
            console.log("Usuario no registrado.");
            promptLogin();
        }
    });
}

promptLogin();


function promptMessage() {
    rl.question("Ingrese un mensaje (o 'exit' para salir): ", function (message) {
        if (message.toLowerCase() === 'exit') {
            rl.close();
        } else {
            try {
                messagesProxy.sendMessage(message);
                promptMessage();
            } catch (error) {
                console.log(error.message);
                promptMessage();
            }
        }
    });
}


rl.on('close', function () {
    console.log("\nHistorial de mensajes:");
    try {
        const history = messagesProxy.getHistory();
        history.forEach((message, index) => {
            console.log(`${index + 1}. ${message}`);
        });
        console.log("Cerrando Sesion...");
        process.exit(0);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
});

