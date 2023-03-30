using System;
using System.Collections.Generic;
using System.Windows.Forms;

namespace StudentList
{
    internal static class AppController
    {
        /// <summary>
        /// Главная точка входа для приложения.
        /// </summary>
        
        public static List<Student> StudentsList = new List<Student>();
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new MainForm());
            
            

            // Student student = new Student("Kirill", "Lipetsk", 1161, new DateTime(year:1954, month:3, day:25));
            // Console.WriteLine(student.BirthDate);
            // Console.WriteLine("student.BirthDate");
        }
    }
}
