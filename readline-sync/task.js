const readline = require("readline-sync")

const tasks = [];

const addTask = ()=> {
    console.log("¿Tienes tareas pendientes por agregar?")
  const task = readline.question('Ingrese tu nueva tarea: ');
  const status = readline.question('Ingrese el estado de su tarea Pendiente o Finalizada: ')
  tasks.push({
    nameTask: task,
    statusTask: status
  });
  console.log(`Tarea "${task}" agregada en estado ${status}.`);

}

function showTasks(status) {
    const tasksStatus = tasks.filter(
        task => {
            if (status === "Pendiente"){
                return task.statusTask === "Pendiente" 
            }else if(status === "Finalizada"){
                return task.statusTask === "Finalizada" }
            else {
                return console.log("No hay tareas pendientes o finalizadas")
            }
        });

  if (status){
        tasksStatus.forEach((task, index) => {
           return console.log(`Listado de tareas en estado: ${status}`), console.log(`${index + 1 }. Descripcion: ${task.nameTask}  estado: ${task.statusTask}`)
        });
    } 
    
    else {
    console.log('Lista de Tareas:');
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. Descripcion: ${task.nameTask} en estado: ${task.statusTask}`);
    });
  }
}


function removeTask() {
  showTasks();
  const index = readline.question('Ingrese el número de la tarea que desea eliminar: ');

  if (index >= 1 && index <= tasks.length) {
    const removedTask = tasks.splice(index - 1, 1);
    const mappRemove = removedTask.map((task)=>{
        return console.log(`Tarea "${task.nameTask}" eliminada.`)
    })
  } else {
    console.log('Número de tarea inválido.');
  }
}


while (true) {
    console.log("Programa lista de tareas")
    console.log("1. Agregar tarea")
    console.log("2. Mostrar tarea")
    console.log("3. Eliminar tarea")
    console.log("4. Conocer el estado de mis tareas")
    console.log("5. Salir del sistema")

    const option = readline.question("Escoge una de las opciones: ")

    switch (option){
        case "1": 
        addTask()
        break;
        case "2": 
        showTasks()
        break;
        case "3":
        removeTask()
        break;
        case "4":
        const status = readline.question( "¿Que tareas deseas ver? Pendiente o Finalizada, escribe una de las dos palabras incluido la mayuscula ")
        showTasks(status)
        break;
        case "5":
        console.log("Saliste del programa lista de tareas")
        process.exit()
        default: console.log("Porfavor selecciona una opcion correcta")
    }
}

