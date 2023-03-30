using System;
using System.Drawing;

namespace StudentList
{
    [Serializable]
    public class Student
    {
        public string Name;
        public string Address;
        public int Group;
        public Bitmap Photo;

        private DateTime birthDate;

        public DateTime BirthDate { get { return birthDate; } 
            set {
                TimeSpan age = DateTime.Now - value;
                if (age.TotalDays < 5110 || age.TotalDays > 23725)  // TODO: не фурычит
                {
                    throw new ArgumentOutOfRangeException("Age must be greater then 14 or lower then 65");
                }

                birthDate = value;
            } }

        public int Age
        {
            get
            {
                TimeSpan age = DateTime.Now - BirthDate;
                return (int)(age.TotalDays / 365);
            }
        }

        public Student(string name, string address, int group, Bitmap photo, DateTime birthDate) 
        {
            Name = name;
            Address = address;
            Group = group;
            Photo = photo;
            BirthDate = birthDate;
        }

        public override string ToString()
        {
            return $"{Name} ({Age}), группа {Group}";
        }
    }
}
