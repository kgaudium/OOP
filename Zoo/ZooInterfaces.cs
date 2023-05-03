using System;

namespace Zoo
{
    public interface IAnimal
    {
        string Kind();
    }
    
    public interface IFlyable
    {
        string Fly();
    }
    
    public interface IWalkable
    {
        string Walk();
    }
    
    public interface ISwimmable
    {
        string Swim();
    }
}