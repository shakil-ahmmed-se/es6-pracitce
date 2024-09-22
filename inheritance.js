class Parent{
    constructor(){
        this.fatherName = 'karim';
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}

const baby = new Child('rahim');
const baby2 = new Child('sharif');

console.log(baby, baby2);