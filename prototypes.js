//prototypes


const animal={
    eats:true,
    walk(){
        if(!this.isSleeping){
             console.log("I walk");
        }
       
    },
    sleep(){
        this.isSleeping=true;
    }
};

const rabbit={
    jumps:true,
    name:'White Rabbit',
    __proto__: animal
};

const longEar={
    earLength:10,
    __proto__: rabbit
}


console.log(rabbit.eats);
console.log(rabbit.jumps)
rabbit.walk()
console.log(longEar.jumps)
longEar.walk(); //true from rabbit


// differences between __proto__  && [[Prototype]]
//[[protype]] is a property of an object.
//_proto_ is a getter/setter for [[protype]]. they are not the same.

rabbit.walk= function(){
    console.log('Rabbit! Hop Hop!')
}

rabbit.walk();

let user={
    name: "John",
    surname: 'Smith',

    set fullName(value){
        [this.name, this.surname]= value.split(' ');
    },

    get fullName(){
        return `${this.name} ${this.surname}`
    }
};

let admin={
    __proto__: user,
    isAdmin: true

};


console.log(admin.fullName);

admin.fullName="Alice Cooper";
console.log(admin.fullName)
console.log(user.fullName)
rabbit.sleep();
console.log(rabbit.isSleeping);
console.log(animal.isSleeping); //undefined because no property in the prototype

console.log(Object.keys(rabbit)); //returns only keys



//challenge
let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__:head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:table
  };
  
  let pockets = {
    money: 2000,
    __proto__:bed
  };

console.log(table.glasses)
console.log(head.glasses)
console.log(pockets.pen)
console.log(bed.glasses)