using System;
using System.Linq;
using System.Windows.Forms;

namespace Zoo
{
    public partial class MainForm : Form
    {
        public delegate void AddListHandler();

        public event AddListHandler? UpdateList;
        
        public MainForm()
        {
            InitializeComponent();
            UpdateList += FillList;
        }

        private void BatButton_Click(object sender, EventArgs e)
        {
            AddAnimal(new Bat());
        }

        private void DuckButton_Click(object sender, EventArgs e)
        {
            AddAnimal(new Duck());
        }

        private void EagleButton_Click(object sender, EventArgs e)
        {
            AddAnimal(new Eagle());
        }

        private void FishButton_Click(object sender, EventArgs e)
        {
            AddAnimal(new Fish());
        }

        private void MonkeyButton_Click(object sender, EventArgs e)
        {
            AddAnimal(new Monkey());
        }

        private void PinguinButton_Click(object sender, EventArgs e)
        {
            AddAnimal(new Pinguin());
        }
        
        void AddAnimal(IAnimal animal)
        {
            AppController.Animals.Add((object) animal);
            UpdateList?.Invoke();
        }

        public void FillList()
        {
            AllListBox.Items.Clear();
            AllListBox.Items.AddRange(AppController.Animals.Select(animal => animal.ToString()).ToArray());
        }
        
        private void FilterButton_Click(object sender, EventArgs e)
        {
            FilteredListBox.Items.Clear();
            TextListBox.Items.Clear();


            foreach (var animal in AppController.Animals)
            {
                if (animal is IFlyable && FlyCheckBox.Checked)
                {
                    FilteredListBox.Items.Add(animal.ToString());
                    TextListBox.Items.Add(((IFlyable) animal).Fly());
                }
                if (animal is ISwimmable && SwimCheckBox.Checked)
                {
                    FilteredListBox.Items.Add(animal.ToString());
                    TextListBox.Items.Add(((ISwimmable) animal).Swim());
                }
                if (animal is IWalkable && WalkCheckBox.Checked)
                {
                    FilteredListBox.Items.Add(animal.ToString());
                    TextListBox.Items.Add(((IWalkable) animal).Walk());
                }
            }
            
        }
    }
}