using System.ComponentModel;

namespace Zoo
{
    partial class MainForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }

            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.AllListBox = new System.Windows.Forms.ListBox();
            this.FilterPanel = new System.Windows.Forms.Panel();
            this.FilterButton = new System.Windows.Forms.Button();
            this.FlyCheckBox = new System.Windows.Forms.CheckBox();
            this.WalkCheckBox = new System.Windows.Forms.CheckBox();
            this.SwimCheckBox = new System.Windows.Forms.CheckBox();
            this.FilteredListBox = new System.Windows.Forms.ListBox();
            this.TextListBox = new System.Windows.Forms.ListBox();
            this.BatButton = new System.Windows.Forms.Button();
            this.DuckButton = new System.Windows.Forms.Button();
            this.EagleButton = new System.Windows.Forms.Button();
            this.FishButton = new System.Windows.Forms.Button();
            this.MonkeyButton = new System.Windows.Forms.Button();
            this.PinguinButton = new System.Windows.Forms.Button();
            this.FilterPanel.SuspendLayout();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.Font = new System.Drawing.Font("Comic Sans MS", 20F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte) (0)));
            this.label1.Location = new System.Drawing.Point(334, 14);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(299, 59);
            this.label1.TabIndex = 0;
            this.label1.Text = "Зоопарк";
            this.label1.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // AllListBox
            // 
            this.AllListBox.FormattingEnabled = true;
            this.AllListBox.Location = new System.Drawing.Point(154, 91);
            this.AllListBox.Name = "AllListBox";
            this.AllListBox.Size = new System.Drawing.Size(198, 329);
            this.AllListBox.TabIndex = 1;
            // 
            // FilterPanel
            // 
            this.FilterPanel.Controls.Add(this.FilterButton);
            this.FilterPanel.Controls.Add(this.FlyCheckBox);
            this.FilterPanel.Controls.Add(this.WalkCheckBox);
            this.FilterPanel.Controls.Add(this.SwimCheckBox);
            this.FilterPanel.Location = new System.Drawing.Point(379, 92);
            this.FilterPanel.Name = "FilterPanel";
            this.FilterPanel.Size = new System.Drawing.Size(134, 328);
            this.FilterPanel.TabIndex = 2;
            // 
            // FilterButton
            // 
            this.FilterButton.Location = new System.Drawing.Point(15, 181);
            this.FilterButton.Name = "FilterButton";
            this.FilterButton.Size = new System.Drawing.Size(97, 30);
            this.FilterButton.TabIndex = 4;
            this.FilterButton.Text = "Показать";
            this.FilterButton.UseVisualStyleBackColor = true;
            this.FilterButton.Click += new System.EventHandler(this.FilterButton_Click);
            // 
            // FlyCheckBox
            // 
            this.FlyCheckBox.Location = new System.Drawing.Point(22, 42);
            this.FlyCheckBox.Name = "FlyCheckBox";
            this.FlyCheckBox.Size = new System.Drawing.Size(90, 36);
            this.FlyCheckBox.TabIndex = 3;
            this.FlyCheckBox.Text = "Летают";
            this.FlyCheckBox.UseVisualStyleBackColor = true;
            // 
            // WalkCheckBox
            // 
            this.WalkCheckBox.Location = new System.Drawing.Point(22, 126);
            this.WalkCheckBox.Name = "WalkCheckBox";
            this.WalkCheckBox.Size = new System.Drawing.Size(90, 36);
            this.WalkCheckBox.TabIndex = 2;
            this.WalkCheckBox.Text = "Ходят";
            this.WalkCheckBox.UseVisualStyleBackColor = true;
            // 
            // SwimCheckBox
            // 
            this.SwimCheckBox.Location = new System.Drawing.Point(22, 84);
            this.SwimCheckBox.Name = "SwimCheckBox";
            this.SwimCheckBox.Size = new System.Drawing.Size(90, 36);
            this.SwimCheckBox.TabIndex = 1;
            this.SwimCheckBox.Text = "Плавают";
            this.SwimCheckBox.UseVisualStyleBackColor = true;
            // 
            // FilteredListBox
            // 
            this.FilteredListBox.FormattingEnabled = true;
            this.FilteredListBox.Location = new System.Drawing.Point(534, 91);
            this.FilteredListBox.Name = "FilteredListBox";
            this.FilteredListBox.Size = new System.Drawing.Size(166, 329);
            this.FilteredListBox.TabIndex = 3;
            // 
            // TextListBox
            // 
            this.TextListBox.FormattingEnabled = true;
            this.TextListBox.Location = new System.Drawing.Point(706, 92);
            this.TextListBox.Name = "TextListBox";
            this.TextListBox.Size = new System.Drawing.Size(208, 329);
            this.TextListBox.TabIndex = 4;
            // 
            // BatButton
            // 
            this.BatButton.Location = new System.Drawing.Point(23, 92);
            this.BatButton.Name = "BatButton";
            this.BatButton.Size = new System.Drawing.Size(97, 30);
            this.BatButton.TabIndex = 5;
            this.BatButton.Text = "Лет. Мышь";
            this.BatButton.UseVisualStyleBackColor = true;
            this.BatButton.Click += new System.EventHandler(this.BatButton_Click);
            // 
            // DuckButton
            // 
            this.DuckButton.Location = new System.Drawing.Point(23, 128);
            this.DuckButton.Name = "DuckButton";
            this.DuckButton.Size = new System.Drawing.Size(97, 30);
            this.DuckButton.TabIndex = 6;
            this.DuckButton.Text = "Утка";
            this.DuckButton.UseVisualStyleBackColor = true;
            this.DuckButton.Click += new System.EventHandler(this.DuckButton_Click);
            // 
            // EagleButton
            // 
            this.EagleButton.Location = new System.Drawing.Point(23, 164);
            this.EagleButton.Name = "EagleButton";
            this.EagleButton.Size = new System.Drawing.Size(97, 30);
            this.EagleButton.TabIndex = 7;
            this.EagleButton.Text = "Орёл";
            this.EagleButton.UseVisualStyleBackColor = true;
            this.EagleButton.Click += new System.EventHandler(this.EagleButton_Click);
            // 
            // FishButton
            // 
            this.FishButton.Location = new System.Drawing.Point(23, 200);
            this.FishButton.Name = "FishButton";
            this.FishButton.Size = new System.Drawing.Size(97, 30);
            this.FishButton.TabIndex = 8;
            this.FishButton.Text = "Рыба";
            this.FishButton.UseVisualStyleBackColor = true;
            this.FishButton.Click += new System.EventHandler(this.FishButton_Click);
            // 
            // MonkeyButton
            // 
            this.MonkeyButton.Location = new System.Drawing.Point(23, 236);
            this.MonkeyButton.Name = "MonkeyButton";
            this.MonkeyButton.Size = new System.Drawing.Size(97, 30);
            this.MonkeyButton.TabIndex = 9;
            this.MonkeyButton.Text = "Обезьяна";
            this.MonkeyButton.UseVisualStyleBackColor = true;
            this.MonkeyButton.Click += new System.EventHandler(this.MonkeyButton_Click);
            // 
            // PinguinButton
            // 
            this.PinguinButton.Location = new System.Drawing.Point(23, 272);
            this.PinguinButton.Name = "PinguinButton";
            this.PinguinButton.Size = new System.Drawing.Size(97, 30);
            this.PinguinButton.TabIndex = 10;
            this.PinguinButton.Text = "Пингвин";
            this.PinguinButton.UseVisualStyleBackColor = true;
            this.PinguinButton.Click += new System.EventHandler(this.PinguinButton_Click);
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(945, 461);
            this.Controls.Add(this.PinguinButton);
            this.Controls.Add(this.MonkeyButton);
            this.Controls.Add(this.FishButton);
            this.Controls.Add(this.EagleButton);
            this.Controls.Add(this.DuckButton);
            this.Controls.Add(this.BatButton);
            this.Controls.Add(this.TextListBox);
            this.Controls.Add(this.FilteredListBox);
            this.Controls.Add(this.FilterPanel);
            this.Controls.Add(this.AllListBox);
            this.Controls.Add(this.label1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.MaximizeBox = false;
            this.Name = "MainForm";
            this.Text = "MainForm";
            this.FilterPanel.ResumeLayout(false);
            this.ResumeLayout(false);
        }

        private System.Windows.Forms.Button MonkeyButton;
        private System.Windows.Forms.Button PinguinButton;

        private System.Windows.Forms.Button BatButton;
        private System.Windows.Forms.Button DuckButton;
        private System.Windows.Forms.Button EagleButton;
        private System.Windows.Forms.Button FishButton;

        private System.Windows.Forms.Panel FilterPanel;
        private System.Windows.Forms.ListBox FilteredListBox;
        private System.Windows.Forms.ListBox TextListBox;
        private System.Windows.Forms.CheckBox FlyCheckBox;
        private System.Windows.Forms.CheckBox SwimCheckBox;
        private System.Windows.Forms.CheckBox WalkCheckBox;
        private System.Windows.Forms.Button FilterButton;

        private System.Windows.Forms.ListBox AllListBox;

        private System.Windows.Forms.Label label1;

        #endregion
    }
}