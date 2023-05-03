using System;

namespace Zoo
{
    class Bat : IAnimal, IFlyable
    {
        public string Kind() => "Я летучая мышь";
        public string Fly() => "Я полетел...";
        public override string ToString() => "Bat";
    }
    
    class Duck : IAnimal, IFlyable, IWalkable, ISwimmable
    {
        public string Kind() => "Я утка!";
        public string Fly() => "Я полетел...";
        public string Walk() => "Ну, я пошёл. Пока.";
        public string Swim() => "Смотри! Я плаваю!";
        public override string ToString() => "Duck";
    }
    
    class Eagle : IAnimal, IFlyable
    {
        public string Kind() => "Я орёл";
        public string Fly() => "Я полетел...";
        public override string ToString() => "Eagle";
    }
    
    class Fish : IAnimal, ISwimmable
    {
        public string Kind() => "Я рыба";
        public string Swim() => "Смотри! Я плаваю!";
        public override string ToString() => "Fish";
    }
    
    class Monkey : IAnimal, IWalkable
    {
        public string Kind() => "Я обезьяна";
        public string Walk() => "Ну, я пошёл. Пока.";
        public override string ToString() => "Monkey";
    }
    
    class Pinguin : IAnimal, IWalkable, ISwimmable
    {
        public string Kind() => "Я пенгвин";
        public string Walk() => "Ну, я пошёл. Пока.";
        public string Swim() => "Смотри! Я плаваю!";
        public override string ToString() => "Pinguin";
    }
}