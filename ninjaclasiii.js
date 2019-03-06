class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log("Hello my name is " + this.name);
    }

    showStats() {
        console.log("Name: " + this.name + " - Health: " + this.health + " - Speed: " + this.speed + " - Strength: " + this.strength);
    }

    drinkSake() {
        this.health += 10;
        console.log(this.name + " drinks some sake. Health is now " + this.health);
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log(this.name + " says: What one programmer can do in one month, two programmers can do in two months.")
    }
}

const ninja1 = new Ninja("Shikamaru");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const sensei1 = new Sensei("Asuma");
sensei1.speakWisdom();
sensei1.showStats();
