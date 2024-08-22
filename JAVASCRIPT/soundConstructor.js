function Animal (name){
    this.name = name;
    this.speak = function(animalSound){
        this.animalSound = animalSound;
        console.log(`Animal name is ${this.name} and Its sound : ${this.animalSound}`);
    }
}

const myAnimal = new Animal("cat");
myAnimal.speak("meow")