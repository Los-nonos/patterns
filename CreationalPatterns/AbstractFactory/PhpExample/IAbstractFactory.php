<?php

namespace AbstractFactory;

public interface IAbstractFactory {
    public function MakeComputer(): IComputer;
}