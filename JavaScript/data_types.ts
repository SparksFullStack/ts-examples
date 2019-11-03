// * Arrays * //
// To initialize an array, all values must be of the same type.
const carMakers: string[] = ['ford', 'toyota', 'mitsubishi'];

// Two Dimensional Arrays: This only works as long as they have the same types of values
const carsByMake: string[][] = [['f150'], ['rav4'], ['lancer']];

// Multi-Typed Arrays
const importantDates: (Date | string)[] = [new Date(), '10-14-1991'];
// ** //

// * Objects * //
const newObj: {
    name: string,
    age: number,
    likesPizza: boolean
} = {
    name: 'MacGruber',
    age: 4,
    likesPizza: true,
};
// ** //


// * Tuples * //
// Here we'll be converting a regular object to a Tuple
const drink = {
    name: 'Coke Zero',
    color: 'brown',
    carbonated: true,
    sugar: 0
};

// Regular Syntax
const cokeZeroTuple: [string, string, Boolean, number] = ['Coke Zero', 'brown', true, 0];

// Type Alias Syntax
type Drink = [string, string, Boolean, number];
const mountainDewTuple: Drink = ['Mountain Dew', 'green', true, 100000];
// ** //