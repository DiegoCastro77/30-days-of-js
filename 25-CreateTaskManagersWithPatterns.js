class Task {
    constructor(id, description) {
        this.id = id;
        this.description = description;
        this.completed = false;
        this.users = [];
    }

    assignUser(user) {
        this.users.push(user);
    }

    completeTask() {
        this.completed = true;
        this.notifyUsers();
    }

    notifyUsers() {
        this.users.forEach(user => {
            user.notify(this);
        });
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    notify(task) {
        console.log(`El usuario ${this.name} ha sido notificado de que la tarea ${task.description} ha sido completada.`);
    }
}

class Authorization {
    checkAuthorization(user, task) {
        if (!task.users.includes(user)) {
            throw new Error("No autorizado");
        }
    }
}

class TaskDecorator {
    constructor(task, options) {
        this.task = task;
        this.deadline = options.deadline;
        this.priority = options.priority;
    }
}

class TaskBuilder {
    constructor() {
        this.task = null;
    }

    id(id) {
        this.task.id = id;
        return this;
    }

    description(description) {
        this.task.description = description;
        return this;
    }

    completed(completed) {
        this.task.completed = completed;
        return this;
    }

    users(users) {
        this.task.users = users;
        return this;
    }

    build() {
        return this.task;
    }
}

class TaskManager {
    constructor() {
        if (!TaskManager.instance) {
            TaskManager.instance = this;
        }

        this.tasks = [];
        return TaskManager.instance;
    }

    static getInstance() {
        return new TaskManager();
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getTasks() {
        return this.tasks;
    }

    getTaskById(id) {
        return this.tasks.find(task => task.id === id) || null;
    }
}

const taskManager = new TaskManager();

const taskManager1 = TaskManager.getInstance();
const taskManager2 = TaskManager.getInstance();

console.log("Ejemplo 1:");
console.log(taskManager1 === taskManager2); 

const taskManagerExample = TaskManager.getInstance();
const mockTask = new Task(1, "Mock task");

taskManagerExample.addTask(mockTask);
console.log("\nEjemplo 2:");
console.log(taskManagerExample.getTasks());

const authorization = new Authorization();
const user1 = new User("Juan");
const user2 = new User("Maria");
const task = new Task('4', 'Comprar pan');
task.assignUser(user1);

try {
    console.log("\nEjemplo 3:");
    authorization.checkAuthorization(user2, task);
} catch (error) {
    console.log(error.message); 
}

const taskExample = new Task('5', 'Pasear al perro');
const taskDecorator = new TaskDecorator(taskExample, { deadline: '2023-03-31', priority: 'alta' });

console.log("\nEjemplo 4:");
console.log(taskDecorator);
