<?php

namespace AbstractFactory;


public class AppleFactory implements IAbstractFactory {
    public function MakeComputer() {
        return new MacBookPro();
    }
}

public class AsusFactory implements IAbstractFactory {
    public function MakeComputer() {
        return new X501N();
    }
}

public class Main {
    public function execute() {
        IAbstractFactory appleFactory = new AppleFactory();
        
        IComputer macBookPro = appleFactory.MakeComputer();

        IAbstractFactory asusFactory = new AsusFactory();

        IComputer asusNotebook = asusFactory.MakeComputer();
    }
}