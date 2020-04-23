package main;

public class Main {
    public static void main(String[] args) {
        Pizzeria pizzeria = new Pizzeria();

        Pizza shortPizza = pizzeria.makeShortPizza();
        Pizza mediumPizza = pizzeria.makeMediumPizza();
        Pizza longPizza = pizzeria.makeLongPizza();

        System.out.println(shortPizza);
        System.out.println(mediumPizza);
        System.out.println(longPizza);
    }
}