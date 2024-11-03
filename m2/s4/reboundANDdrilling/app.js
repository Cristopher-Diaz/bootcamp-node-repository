const { addStudent, getStudents, updateStudent, deleteStudent } = require('./crudStudents')
const { addCourse, getCourses, updateCourse, deleteCourse } = require('./crudCourses')

console.log('METODOS DISPONIBLES')
console.log(addStudent, getStudents, updateStudent, deleteStudent)
console.log(addCourse, getCourses, updateCourse, deleteCourse)


async function main() {
    const [command, ...args] = process.argv.slice(2)

    switch (command) {
        case 'addStudent':
            // node app addEstudiante "nombre" edad
            const [studentName, studentLastName, studentAge, numberIdentity] = args
            await addStudent(studentName, studentLastName, parseInt(studentAge), parseInt(numberIdentity))
            break

        case 'getStudents':
            // node app getEstudiantes
            await getStudents()
            break

        case 'updateStudent':
            // node app updateEstudiante id "nombre" edad
            const [idToUpdate, newNombre, newEdad] = args
            await updateStudent(parseInt(idToUpdate, 10), newNombre, parseInt(newEdad, 10))
            break

        case 'deleteStudent':
            // node app deleteEstudiante id
            const [idToDelete] = args
            await deleteStudent(parseInt(idToDelete, 10))
            break

        case 'addCourse':
            // node app addCurso "nombre" "descripcion"
            const [titleCourse, descripcionCourse] = args
            await addCourse(titleCourse, descripcionCourse)
            break

        case 'getCourses':
            // node app getCursos
            await getCourses()
            break

        case 'updateCourse':
            // node app updateCurso id "nombre" "descripcion"
            const [cursoIdToUpdate, newCursoTitle, newDescripcion] = args
            await updateCourse(parseInt(cursoIdToUpdate, 10), newCursoTitle, newDescripcion)
            break

        case 'deleteCourse':
            // node app deleteCurso id
            const [cursoIdToDelete] = args
            await deleteCourse(parseInt(cursoIdToDelete, 10))
            break

        default:
            console.log('Comando no reconocido')
            console.log('Comandos disponibles: addEstudiante, getEstudiantes, updateEstudiante, deleteEstudiante, addCurso, getCursos, updateCurso, deleteCurso')
            break
    }
}

main()