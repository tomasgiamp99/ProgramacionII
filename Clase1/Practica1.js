//1
let subjetc = 'Programación 2';
let year = '2020';

//2
let favoriteSites = ['www.google.com', 'www.digitalhouse.com', 'www.spotify.com']

    //2.a
    //console.log(favoriteSites[2])

    //2.b
    favoriteSites.pop();

    //2.c
    favoriteSites.push('www.instagram.com');

//3 
const person = {
    name: 'Mike',
    lastName: 'Wazouski',
    age: 37
}

let frase = 'Hola mi nombre es ' + person.name + ' ' + person.lastName + ' y tengo ' + person.age + ' años.'

//console.log(frase)

//4
person.sites = favoriteSites;
//console.log(person.sites[2])

//5

    //5.a 
        let cursos = [
            {
                nombre: 'Curso 1',
                descripcion: 'Descripción curso 1',
                alumnos: ['Tomy', 'Juan', 'Ale'],
                dias: ['Lunes', 'Viernes']
            },
            {
                nombre: 'Curso 2',
                descripcion: 'Descripción Curso 2',
                alumnos: ['Tomy', 'Juan', 'Ale'],
                dias: ['Lunes', 'Viernes']
            },
            {
                nombre: 'Curso 3',
                descripcion: 'Descripción Curso 3',
                alumnos: ['Tomy', 'Juan', 'Ale'],
                dias: ['Lunes', 'Viernes']
            },
            {
                nombre: 'Curso 4',
                descripcion: 'Descripción Curso 4',
                alumnos: ['Tomy', 'Juan', 'Ale'],
                dias: ['Lunes', 'Viernes']
            }
        ]
    
    //5.b
        console.log(cursos[2]);
    
    //5.c
        console.log(cursos[3].nombre);

    //5.d
        cursos[1].dias.push('Martes');
        console.log(cursos[1].dias)


