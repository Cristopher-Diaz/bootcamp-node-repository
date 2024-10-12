const yargs = require('yargs')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs/promises')

// Configuraciones para los comandos
const createConfig = {
    title: {
        describe: 'Título de la tarea',
        demandOption: true,
        type: 'string'
    },
    content: {
        describe: 'Contenido de la tarea',
        demandOption: true,
        type: 'string'
    }
}

const updateConfig = {
    id: {
        describe: 'ID de la tarea a actualizar',
        demandOption: true,
        type: 'number'
    },
    title: {
        describe: 'Nuevo título de la tarea (opcional)',
        type: 'string'
    },
    content: {
        describe: 'Nuevo contenido de la tarea (opcional)',
        type: 'string'
    }
}

const deleteConfig = {
    id: {
        describe: 'ID de la tarea a eliminar',
        demandOption: true,
        type: 'number'
    }
}

// Función para leer el archivo de tareas y devolver un array de objetos
const readTasksFromFile = async () => {
    try {
        const taskFile = await fs.readFile('tareas.txt', 'utf-8')
        return JSON.parse(taskFile)
    } catch (error) {
        throw new Error('Error al leer el archivo de tareas.')
    }
}

// Función para escribir las tareas en el archivo
const writeTasksToFile = async (taskArray) => {
    try {
        await fs.writeFile('tareas.txt', JSON.stringify(taskArray, null, 2))
        console.log('Archivo actualizado con éxito.')
    } catch (error) {
        throw new Error('Error al escribir en el archivo de tareas.')
    }
}

// Comando para crear una nueva tarea
const createTask = async ({ title, content }) => {
    try {
        const taskArray = await readTasksFromFile()
        const newTask = { id: uuidv4().slice(0, 8), title, content }
        taskArray.push(newTask)
        await writeTasksToFile(taskArray)
        console.log('Tarea creada con éxito.')
    } catch (error) {
        console.error('Error al crear la tarea:', error.message)
    }
}

// Comando para leer todas las tareas
const readTasks = async () => {
    try {
        const taskArray = await readTasksFromFile()
        console.log('Tareas:')
        console.log(taskArray)
    } catch (error) {
        console.error('Error al leer las tareas:', error.message)
    }
}

// Comando para actualizar una tarea existente
const updateTask = async ({ id, title, content }) => {
    try {
        const taskArray = await readTasksFromFile()

        const taskIndex = taskArray.findIndex(task => task.id === id)

        if (taskIndex === -1) {
            console.log('No se encontró una tarea con el ID proporcionado.')
            return
        }

        // Actualizar solo si se proporciona un nuevo valor
        taskArray[taskIndex].title = title || taskArray[taskIndex].title
        taskArray[taskIndex].content = content || taskArray[taskIndex].content

        await writeTasksToFile(taskArray)
        console.log('Tarea actualizada con éxito.')
    } catch (error) {
        console.error('Error al actualizar la tarea:', error.message)
    }
}

// Comando para eliminar una tarea existente
const deleteTask = async ({ id }) => {
    try {
        const taskArray = await readTasksFromFile()

        const newTaskArray = taskArray.filter(task => task.id !== id)

        if (newTaskArray.length === taskArray.length) {
            console.log('No se encontró una tarea con el ID proporcionado.')
            return
        }

        await writeTasksToFile(newTaskArray)
        console.log('Tarea eliminada con éxito.')
    } catch (error) {
        console.error('Error al eliminar la tarea:', error.message)
    }
}

// Configuración de Yargs con los comandos
const args = yargs
    .command('create', 'Crear una nueva tarea', createConfig, (argv) => createTask(argv))
    .command('read', 'Mostrar todas las tareas', {}, () => readTasks())
    .command('update', 'Actualizar o modificar una tarea', updateConfig, (argv) => updateTask(argv))
    .command('delete', 'Eliminar una tarea', deleteConfig, (argv) => deleteTask(argv))
    .help().argv
