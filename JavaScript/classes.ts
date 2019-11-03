// * Modifier Methods * //
// Method Types
class Methods {
    public publicLog(): void {
        console.log('this can be accessed from anywhere');
    };

    private privateLog(): void {
        console.log('this can only be called by other functions inside of the class');
    };

    protected protectedLog(): void {
        console.log('this can only be called from methods within this class or within its children');
    };

    callPrivateLog(): void {
        this.privateLog();
    };
};

class ChildMethods extends Methods {
    callProtectedLog(): void {
        this.protectedLog();
    };
};

const parentClass = new Methods;
const childClass = new ChildMethods;

parentClass.callPrivateLog();
childClass.callProtectedLog();
// ** //


// * Value Definitions * //
// Declaring Values with Constructor Methods
class ConstructorDeclaration {
    constructor(public color: string, public name: string) { };
};

const newConstDeclaration = new ConstructorDeclaration('blue', 'test');

// Declaring and Assigning Values on Creation
class ValDeclarations {
    color: string = 'red';
    name: string = 'also test';
};
// ** //



// * Constructors with Super * //
class SuperParent {
    constructor(public color: string, public name: string) { }
};

class SuperChild extends SuperParent {
    constructor(public isNew: Boolean, color, name) {
        super(color, name);
    }
};
// ** //