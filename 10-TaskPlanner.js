function createTaskPlanner() {
    let tasks = [];
  
    function addTask(task) {
      task.completed = false;
      tasks.push(task);
    }
  
    function removeTask(value) {
      tasks = tasks.filter(task => task.id !== value && task.name !== value);
    }
  
    function getTasks() {
      return tasks;
    }
  
    function getPendingTasks() {
      return tasks.filter(task => !task.completed);
    }
  
    function getCompletedTasks() {
      return tasks.filter(task => task.completed);
    }
  
    function markTaskAsCompleted(value) {
      const task = tasks.find(task => task.id === value || task.name === value);
      if (task) {
        task.completed = true;
      }
    }
  
    function getSortedTasksByPriority() {
      return [...tasks].sort((a, b) => a.priority - b.priority);
    }
  
    function filterTasksByTag(tag) {
      return tasks.filter(task => task.tags.includes(tag));
    }
  
    function updateTask(taskId, updates) {
      const taskIndex = tasks.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], ...updates };
      }
    }
  
    return {
      addTask,
      removeTask,
      getTasks,
      getPendingTasks,
      getCompletedTasks,
      markTaskAsCompleted,
      getSortedTasksByPriority,
      filterTasksByTag,
      updateTask
    };
  }

  const planner = createTaskPlanner();

  planner.addTask({ id: 1, name: "Completar informe", priority: 2, tags: ["trabajo"], completed: false });
  planner.addTask({ id: 2, name: "Hacer ejercicio", priority: 3, tags: ["salud"], completed: false });
  planner.addTask({ id: 3, name: "Estudiar para el examen", priority: 1, tags: ["academia"], completed: false });
  
  console.log(planner.getTasks()); // Lista de todas las tareas
  console.log(planner.getPendingTasks()); // Lista de tareas pendientes
  console.log(planner.getCompletedTasks()); // Lista de tareas completadas
  
  planner.markTaskAsCompleted(2); // Marcar una tarea como completada
  
  console.log(planner.getTasks()); // Lista actualizada de todas las tareas
  console.log(planner.getCompletedTasks()); // Lista actualizada de tareas completadas