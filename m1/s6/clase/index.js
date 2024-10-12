const yargs = require('yargs')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs/promises')

const createTask = async ({title, content}) => {
    const id = uuidv4().slice(0, 8)
    const newTask = { id, title, content }
    const taskFile = await fs.readFile('tareas.txt')
    const taskArray = JSON.parse(taskFile)

    taskArray.push(newTask)

    await fs.writeFile('tareas.txt', JSON.stringify(taskArray, null, 2))
    console.log('Nueva tarea agregada')

}

const readTasks = async () => {
    const taskFile = await fs.readFile('tareas.txt')
    const taskArray = JSON.parse(taskFile)

    taskArray.map((task, index) => {
        const { id, title, content } = task
        console.log(`
            Tarea numero ${index + 1}
            - Titulo: ${title}
            - Contenido: ${content}
            - id: ${id}
        `)
    })

}

const updateTask = async({id, title, content}) => {
    const taskFile = await fs.readFile('tareas.txt')
    const taskArray = JSON.parse(taskFile)

    const taskIndex = taskArray.findIndex(task => task.id === id)

    // Validar q la tarea exista
    if (taskIndex === -1) {
        console.log('Ingrese un ID válido')
        return
    }

    taskArray[taskIndex].title = title || taskArray[taskIndex].title
    taskArray[taskIndex].content = content || taskArray[taskIndex].content
    await fs.writeFile('tareas.txt', JSON.stringify(taskArray, null, 2))

    console.log('Tarea actualizada con éxito')
}

const deleteTask = async ({id}) => {
    const taskFile = await fs.readFile('tareas.txt')
    let taskArray = JSON.parse(taskFile)

    taskArray = taskArray.filter(task => task.id !== id)
    await fs.writeFile('tareas.txt', JSON.stringify(taskArray, null, 2))
    console.log('Tarea eliminada con éxito')
}


const createConfig = {
    title: {
        describe: 'El nombre de la tarea a realizar',
        alias: 't',
        demandOption: true
    },
    content: {
        describe: 'Descripción de la tarea a realizar',
        alias: 'c',
        demandOption: true
    }
}

const updateConfig = {
    tile: {
        describe: 'El nombre de la tarea a realizar',
        alias: 't'
    },
    content: {
        describe: 'Descripción de la tarea a realizar',
        alias: 'c'
    },
    id: {
        describe: 'El id de la tarea a actualizar o modificar',
        alias: 'i',
        demandOption: true
    }
}

const deleteConfig = {
    id: {
        describe: 'El id o identificador de la tarea a eliminar',
        alias: 'i',
        demandOption: true
    }
}

const args = yargs
    .command('create', 'Crear una nueva tarea', createConfig, (argv) => createTask(argv))
    .command('read', 'Mostrar todas las tareas', {}, () => readTasks())
    .command('update', 'Actualizar o modificar una tarea', updateConfig, (argv) => updateTask(argv))
    .command('delete', 'Eliminar una tarea', deleteConfig, (argv) => deleteTask(argv))
    .help().argv