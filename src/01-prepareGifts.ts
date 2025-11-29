/**
Escribir una función que reciba una lista de
números enteros (que pueden incluir duplicados)
y que devuelva una nueva lista sin duplicados,
ordenada en orden ascendente.
*/

function prepareGifts(gifts: number[]): number[] {
    const numberSet = new Set<number>(gifts)
    const arrayFromSet = Array.from(numberSet)
    return arrayFromSet.sort((a, b) => a - b)
}

const gifts1 = [3, 1, 2, 3, 4, 2, 5] // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5] // [5, 6]

const gifts3: number[] = [] // No hay regalos, la lista queda vacía 

const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1)

const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2)

const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3)