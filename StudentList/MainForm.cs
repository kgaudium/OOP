using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Formatters.Binary;
using System.Windows.Forms;

namespace StudentList
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();
            BirthDatePicker.Value = DateTime.Now - new TimeSpan(5110, 0, 0, 0); 
        }


        private void AddButton_Click(object sender, EventArgs e)
        {
            Student newStudent = new Student(NameTextBox.Text, AddressTextBox.Text, Int32.Parse(GroupTextBox.Text), (Bitmap)PhotoPictureBox.Image, BirthDatePicker.Value);
            
            AppController.StudentsList.Add(newStudent);
            
            StudentListBox.Items.Add(newStudent.ToString());
        }
        
        private void PhotoButton_Click(object sender, EventArgs e)
        {
            PhotoFileDialog.Filter = "Image Files (JPG,PNG,GIF)|*.JPG;*.PNG;*.GIF";
            DialogResult result = PhotoFileDialog.ShowDialog(); // Show the dialog.
            if (result == DialogResult.OK) // Test result.
            {
                PhotoPictureBox.Image = Bitmap.FromFile(PhotoFileDialog.FileName);
            }   
        }
        
        private void StudentListBox_SelectedIndexChanged(object sender, EventArgs e)
        {
            Student student = AppController.StudentsList[StudentListBox.SelectedIndex];

            NameTextBox.Text = student.Name;
            AddressTextBox.Text = student.Address;
            BirthDatePicker.Value = student.BirthDate;
            GroupTextBox.Text = student.Group.ToString();
            PhotoPictureBox.Image = student.Photo;
        }

        private void SaveButton_Click(object sender, EventArgs e)
        {
            BinaryFormatter formatter = new BinaryFormatter();
            SaveFileDialog.Filter = "Data Files (*.dat)|*.dat";
            SaveFileDialog.DefaultExt = "dat";
            DialogResult result = SaveFileDialog.ShowDialog(); // Show the dialog.
            if (result == DialogResult.OK) // Test result.
            {
                FileStream fs = new FileStream(SaveFileDialog.FileName, FileMode.Create);
                formatter.Serialize(fs, AppController.StudentsList);
                fs.Close();
            }
        }

        private void OpenButton_Click(object sender, EventArgs e)
        {
            BinaryFormatter formatter = new BinaryFormatter();
            OpenFileDialog.Filter = "Data Files (*.dat)|*.dat";
            DialogResult result = OpenFileDialog.ShowDialog(); // Show the dialog.
            if (result == DialogResult.OK) // Test result.
            {
                FileStream fs = new FileStream(OpenFileDialog.FileName, FileMode.Open);
                try
                {
                    AppController.StudentsList = (List<Student>)formatter.Deserialize(fs);
                }
                catch (SerializationException)
                {
                    MessageBox.Show("Файл поврежден или не поддерживается!", "Ошибка файла", MessageBoxButtons.OK,
                        MessageBoxIcon.Error);
                }
                finally
                {
                    fs.Close();
                }

                StudentListBox.Items.Clear();
                foreach (Student student in AppController.StudentsList)
                {
                    StudentListBox.Items.Add(student.ToString());
                }
            }
        }

        private void BirthDate_Leave(object sender, EventArgs e)
        {
            TimeSpan age = DateTime.Now - BirthDatePicker.Value;
            if (age.TotalDays < 5110 || age.TotalDays > 23725)
            {
                MessageBox.Show("Возраст должен находиться в пределах от 14 до 65 лет!", "Некорректный возраст", MessageBoxButtons.OK,
                    MessageBoxIcon.Error);
                BirthDatePicker.Value = DateTime.Now - new TimeSpan(5110, 0, 0, 0); 
            }
        }

        private void GroupTextBox_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (!char.IsControl(e.KeyChar) && !char.IsDigit(e.KeyChar))
            {
                e.Handled = true;
            }
        }
    }
}
