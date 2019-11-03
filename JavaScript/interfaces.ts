// Defining an Interface
interface Car {
    name: string;
    year: number;
    broken: Boolean;
};

// Typing an Object with an Interface
const lancer: Car = {
    name: 'Lancer',
    year: 2009,
    broken: false
};

// Passing an Interface-Typed Object to a Function
function isWorking(carToCheck: Car): string {
    if (carToCheck.broken) {
        return `${carToCheck.name} is broken!`;
    } else {
        return `${carToCheck.name} is broken!`;
    }
};

// Same Function with Destructuring
function destructuredIsWorking({ name, year, broken }: Car): string {
    if (broken) {
        return `${name} is broken!`;
    } else {
        return `${name} is broken!`;
    }
}

// Interface with a Function
interface NewCar {
    name: string;
    year: number;
    broken: Boolean;
    summary(): string;
};

const newCarObj: NewCar = {
    name: 'RAV4',
    year: 2020,
    broken: false,
    summary() {
        return `${this.name} is gonna be a dope car`;
    }
};


// Generic Interfaces
interface Summarize {
    summary(): string;
};


const summaryFunction = (objToSummarize: Summarize): string => {
    return objToSummarize.summary();
};

summaryFunction(newCarObj);