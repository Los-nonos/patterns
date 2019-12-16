class Coffee {

}

abstract class CoffeeMachine {
    abstract ServeCoffee(): Coffee;
}

class ExpressoCoffeeMachine extends CoffeeMachine {
    ServeCoffee(): Coffee {
        return new Coffee();
    }
}

class FilteredCoffeeMachine extends CoffeeMachine {

    private temperature: number;

    constructor(){
        super();
        this.HeatCoffee();
    }

    private HeatCoffee(): void {
        this.temperature = 40;
    }

    ServeCoffee(): Coffee {

        if (this.temperature < 40){
            this.HeatCoffee();
        }

        // if (this.temperature < 40){
        //     throw new Error("heat coffee");
        // }

        return new Coffee();
    }
}

class Bar {

    private coffeeMachine: CoffeeMachine;

    constructor(coffeeMachine: CoffeeMachine) {
        this.coffeeMachine = coffeeMachine;
    }

    ServeCoffee(): Coffee {

        // this with props public in FilteredCoffeeMachine
        // if(this.coffeeMachine instanceof FilteredCoffeeMachine){
        //     if(this.coffeeMachine.temperature < 40){
        //         this.coffeeMachine.HeatCoffee();
        //     }
        //     else{
        //         return this.coffeeMachine.ServeCoffee();
        //     }
        // }else{
        //     return this.coffeeMachine.ServeCoffee();
        // }

        // or
        // this without props public in FilteredCoffeeMachine
        // try {
        //     this.coffeeMachine.ServeCoffee();
        // } catch (error) {
        //     console.log(error.message);
        // }

        return this.coffeeMachine.ServeCoffee();
    }
}

var bar1 = new Bar(new ExpressoCoffeeMachine());
var bar2 = new Bar(new FilteredCoffeeMachine());