
// because document.write is not allowed in module
let app = document.getElementById('root');


function print(...words) {
    let appi = app;
    if(words) {
        words.forEach((w)=>appi.append(w));
    }
}

function println(...words) {
    print(words);
    app.insertAdjacentHTML("beforeend", '<br/>');
}

var a = 2; {
    let a = 3;
    print(a);
}
println(a);

const A = "Hello";
println(A);

class Animal {
    constructor() {
        this.type="One-Animal";
    }
    says(word) {
        println(this.type + " says in cosmos language: " + word);
    }
}
let animal = new Animal();
animal.says("你好！");

class Dog extends Animal {
    constructor(){
        super();
        this.type="A-Dog";
    }
    says(word='汪汪') {
        println(this.type + ' says: ' + word);
    }
}
let dog = new Dog();
dog.says();
dog.says("欢迎")


var f = (i) => i*i;
println(f(10));

var animalType = `animal's type: ${animal.type}`;
var dogType =    `dog's type:    ${dog.type}`;
println(animalType);
println(dogType);


var tic = {type: 'Tic', times: 2}
let {type, times} = tic;
println(type, times, JSON.stringify(tic));

import pl from './js/utils'
pl(app);
println();

import foo from './js/utils2'
foo(app);
println();

import './libs/jquery-3.5.1'
print('load traditional module jquery -> ')
println(jQuery.fn.jquery)
