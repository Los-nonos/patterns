// good inheritance

abstract class Animal
{
    public string Name { get; set; }
    public string Sex { get; set; }
    public int Age { get; set; }
    public int Weight { get; set; }
    public string Color { get; set; }

    public void Breathe()
    {

    }

    public void Eat(object food)
    {

    }

    public void Run(object destination)
    {

    }

    public void Sleep(int hours)
    {

    }
}

class Cat : Animal
{
    public bool IsNasty { get; set; }

    public void Meow()
    {

    }
}

class Dog : Animal
{
    public string bestFriend = "human";

    public void Bark()
    {

    }
}

// bad inheritance

public class Square
{
    public int Size { get; set; }
    public Square(int size)
    {
        this.Size = size;
    }
}

public class Rectangle : Square
{
    public int Width { get { return base.Size; } set { base.Size = value; } }

    public int Height { get; set; }

    public Rectangle(int width, int height) : base(width)
    {
        Height = height;
    }
}