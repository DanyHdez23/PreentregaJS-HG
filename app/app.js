const tareas = [];

function agregar_tarea() {
    let tarea = prompt("Ingresa una nueva tarea:");
    let fecha = prompt("Ingresa la fecha de la tarea (DD-MM-AAAA):");
    tareas.push({ tarea: tarea, fecha: fecha });
    alert("Tarea agregada");
}

function borrar_tarea() {
    if (tareas.length === 0) {
        alert("La lista de tareas está vacía.");
        return;
    }
    let listaTareas = "";
    tareas.forEach((tarea, index) => {
        listaTareas += `[${index + 1}] ${tarea.tarea} - Fecha: ${tarea.fecha}\n`;
    });
    let indiceBorrar = parseInt(prompt(`Selecciona el número de la tarea que deseas borrar:\n${listaTareas}`));
    if (indiceBorrar >= 1 && indiceBorrar <= tareas.length) {
        tareas.splice(indiceBorrar - 1, 1);
        alert("Tarea borrada.");
    } else {
        alert("Número de tarea inválido.");
    }
}

function mostrar_lista() {
    if (tareas.length === 0) {
        alert("La lista de tareas está vacía.");
        return;
    }
    let listaTareas = "";
    tareas.forEach((tarea, index) => {
        listaTareas += `[${index + 1}] ${tarea.tarea} - Fecha: ${tarea.fecha}\n`;
    });
    alert(`Lista de tareas:\n${listaTareas}`);
}

function main() {
    let terminar = false;

    while (!terminar) {
        let opcion = parseInt(prompt("Selecciona una opción:\n[1] Agregar tarea\n[2] Borrar tarea\n[3] Mostrar lista de tareas\n[4] Salir"));

        switch (opcion) {
            case 1:
                agregar_tarea();
                break;
            case 2:
                borrar_tarea();
                break;
            case 3:
                mostrar_lista();
                break;
            case 4:
                terminar = true;
                break;
            default:
                alert("Opción inválida. Por favor, selecciona una opción válida.");
        }
    }
}

main();
