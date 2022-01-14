//prototypes


const animal={
    eats:true,
    walk(){
        console.log("Animal walk");
    }
};

const rabbit={
    jumps:true,
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

