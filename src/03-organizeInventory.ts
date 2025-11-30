/**
Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

Las claves del objeto serán las categorías de juguetes.
Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
Si el array está vacío, la función debe devolver un objeto vacío {}.
 */

const inventory1: Inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]

const inventory2: Inventory = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
]

const inventory3: Inventory = []

type Inventory = Array<{ name: string, quantity: number, category: string }>

type organizedInventory = {
    [category: string]: {
        [name: string]: number
    }
}

function organizeInventory(inventory: Inventory): organizedInventory {

    const inventoryByCategory = inventory.reduce((key, item) => {
        if (!key[item.category]) {
            key[item.category] = {}
        }
        key[item.category]![item.name] = (key[item.category]![item.name] || 0) + item.quantity
        return key
    }, {} as organizedInventory)

    return inventoryByCategory
}

const firstInventory = organizeInventory(inventory1)
console.log(firstInventory)

const secondInventory = organizeInventory(inventory2)
console.log(secondInventory)

const thirdInventory = organizeInventory(inventory3)
console.log(thirdInventory)

// Resultado esperado 1:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

// Resultado esperado 2:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }

// Resultado esperado 3:
// {}