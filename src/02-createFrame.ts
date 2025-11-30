/**
Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******
 */

function createFrame(names: string[]): string {
    const maxLength = Math.max(...names.map(name => name.length))
    const width = maxLength + 4

    const frameTopBot = '*'.repeat(width)
    let space = ''

    for (const name of names) {
        const spaces = ' '.repeat(maxLength - name.length)
        space += `* ${name}${spaces} *\n`
        // console.log('* ' + name + ' *')
    }

    return `${frameTopBot}\n${space}${frameTopBot}`
}

// const frameCreated = createFrame(['a', 'bb', 'ccc', 'dddd'])
// console.log(frameCreated)

const frameCreated2 = createFrame(['rodrigo', 'poh'])
console.log(frameCreated2)