<?php

// good abstraction
abstract class Greeter {
    public abstract greet(): string;
}

class EnglishGreet extends Greeter {
    greet() {
        return '¡Hi Students!';
    }
}

class FrenchGreet extends Greeter {
    greet(){
        return '¡Salut les étudiants!';
    }
}