class Key {
    private signature: number

    constructor() {
        this.signature = Math.random();
    }

    public getSignature() {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}

    public getKey(): Key {
        return this.key;
    }
}

abstract class House {
    public door: boolean;
    public tenants: Person[] = [];
    constructor(public key: Key) {}

    public comeIn(person: Person) {
        if(this.door) {
            this.tenants.push(person)
        }
    }

    public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    public openDoor(key: Key): void {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true; 
        } else {
            this.door = false;
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};