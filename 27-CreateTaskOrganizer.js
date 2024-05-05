function taskManager() {
    const tasks = new Map();

    function addTask(task, tags) {
        const lowercaseTask = task.toLowerCase();
        if (tasks.has(lowercaseTask)) {
            // Si la tarea ya existe, agregamos las nuevas etiquetas al conjunto existente
            const existingTags = tasks.get(lowercaseTask);
            tags.forEach(tag => existingTags.add(tag));
        } else {
            // Si la tarea no existe, creamos un nuevo conjunto de etiquetas
            tasks.set(lowercaseTask, new Set(tags));
        }
    }

    function printTasks() {
        console.log(tasks);
    }

    return {
        addTask,
        printTasks
    };
}

// Ejemplo de uso
const myTaskManager = taskManager();
myTaskManager.addTask("Comprar leche", ["compras", "urgente"]);
myTaskManager.addTask("Sacar al perro", ["mascotas"]);
myTaskManager.addTask("Hacer ejercicio", ["salud"]);

myTaskManager.printTasks();
