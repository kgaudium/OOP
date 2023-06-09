﻿namespace StudentList
{
    partial class MainForm
    {
        /// <summary>
        /// Обязательная переменная конструктора.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Освободить все используемые ресурсы.
        /// </summary>
        /// <param name="disposing">истинно, если управляемый ресурс должен быть удален; иначе ложно.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Код, автоматически созданный конструктором форм Windows

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MainForm));
            this.AddButton = new System.Windows.Forms.Button();
            this.SaveButton = new System.Windows.Forms.Button();
            this.OpenButton = new System.Windows.Forms.Button();
            this.NameTextBox = new System.Windows.Forms.TextBox();
            this.NameLabel = new System.Windows.Forms.Label();
            this.BirthDateLabel = new System.Windows.Forms.Label();
            this.GroupLabel = new System.Windows.Forms.Label();
            this.AddressLabel = new System.Windows.Forms.Label();
            this.AddressTextBox = new System.Windows.Forms.TextBox();
            this.BirthDatePicker = new System.Windows.Forms.DateTimePicker();
            this.PhotoLabel = new System.Windows.Forms.Label();
            this.PhotoPictureBox = new System.Windows.Forms.PictureBox();
            this.PhotoButton = new System.Windows.Forms.Button();
            this.PhotoFileDialog = new System.Windows.Forms.OpenFileDialog();
            this.StudentListBox = new System.Windows.Forms.ListBox();
            this.SaveFileDialog = new System.Windows.Forms.SaveFileDialog();
            this.OpenFileDialog = new System.Windows.Forms.OpenFileDialog();
            this.GroupTextBox = new System.Windows.Forms.TextBox();
            ((System.ComponentModel.ISupportInitialize)(this.PhotoPictureBox)).BeginInit();
            this.SuspendLayout();
            // 
            // AddButton
            // 
            this.AddButton.Location = new System.Drawing.Point(70, 475);
            this.AddButton.Name = "AddButton";
            this.AddButton.Size = new System.Drawing.Size(75, 25);
            this.AddButton.TabIndex = 0;
            this.AddButton.Text = "Add to List";
            this.AddButton.UseVisualStyleBackColor = true;
            this.AddButton.Click += new System.EventHandler(this.AddButton_Click);
            // 
            // SaveButton
            // 
            this.SaveButton.Location = new System.Drawing.Point(299, 475);
            this.SaveButton.Name = "SaveButton";
            this.SaveButton.Size = new System.Drawing.Size(75, 25);
            this.SaveButton.TabIndex = 1;
            this.SaveButton.Text = "Save As...";
            this.SaveButton.UseVisualStyleBackColor = true;
            this.SaveButton.Click += new System.EventHandler(this.SaveButton_Click);
            // 
            // OpenButton
            // 
            this.OpenButton.Location = new System.Drawing.Point(380, 475);
            this.OpenButton.Name = "OpenButton";
            this.OpenButton.Size = new System.Drawing.Size(75, 25);
            this.OpenButton.TabIndex = 2;
            this.OpenButton.Text = "Open";
            this.OpenButton.UseVisualStyleBackColor = true;
            this.OpenButton.Click += new System.EventHandler(this.OpenButton_Click);
            // 
            // NameTextBox
            // 
            this.NameTextBox.Location = new System.Drawing.Point(14, 34);
            this.NameTextBox.Name = "NameTextBox";
            this.NameTextBox.Size = new System.Drawing.Size(200, 20);
            this.NameTextBox.TabIndex = 3;
            // 
            // NameLabel
            // 
            this.NameLabel.AutoSize = true;
            this.NameLabel.Location = new System.Drawing.Point(14, 15);
            this.NameLabel.Name = "NameLabel";
            this.NameLabel.Size = new System.Drawing.Size(35, 13);
            this.NameLabel.TabIndex = 4;
            this.NameLabel.Text = "Name";
            // 
            // BirthDateLabel
            // 
            this.BirthDateLabel.AutoSize = true;
            this.BirthDateLabel.Location = new System.Drawing.Point(14, 65);
            this.BirthDateLabel.Name = "BirthDateLabel";
            this.BirthDateLabel.Size = new System.Drawing.Size(66, 13);
            this.BirthDateLabel.TabIndex = 6;
            this.BirthDateLabel.Text = "Date of Birth";
            // 
            // GroupLabel
            // 
            this.GroupLabel.AutoSize = true;
            this.GroupLabel.Location = new System.Drawing.Point(14, 172);
            this.GroupLabel.Name = "GroupLabel";
            this.GroupLabel.Size = new System.Drawing.Size(36, 13);
            this.GroupLabel.TabIndex = 10;
            this.GroupLabel.Text = "Group";
            // 
            // AddressLabel
            // 
            this.AddressLabel.AutoSize = true;
            this.AddressLabel.Location = new System.Drawing.Point(14, 122);
            this.AddressLabel.Name = "AddressLabel";
            this.AddressLabel.Size = new System.Drawing.Size(45, 13);
            this.AddressLabel.TabIndex = 8;
            this.AddressLabel.Text = "Address";
            // 
            // AddressTextBox
            // 
            this.AddressTextBox.Location = new System.Drawing.Point(14, 141);
            this.AddressTextBox.Name = "AddressTextBox";
            this.AddressTextBox.Size = new System.Drawing.Size(200, 20);
            this.AddressTextBox.TabIndex = 7;
            // 
            // BirthDatePicker
            // 
            this.BirthDatePicker.Location = new System.Drawing.Point(14, 86);
            this.BirthDatePicker.Name = "BirthDatePicker";
            this.BirthDatePicker.Size = new System.Drawing.Size(200, 20);
            this.BirthDatePicker.TabIndex = 11;
            this.BirthDatePicker.Leave += new System.EventHandler(this.BirthDate_Leave);
            // 
            // PhotoLabel
            // 
            this.PhotoLabel.AutoSize = true;
            this.PhotoLabel.Location = new System.Drawing.Point(14, 233);
            this.PhotoLabel.Name = "PhotoLabel";
            this.PhotoLabel.Size = new System.Drawing.Size(35, 13);
            this.PhotoLabel.TabIndex = 12;
            this.PhotoLabel.Text = "Photo";
            // 
            // PhotoPictureBox
            // 
            this.PhotoPictureBox.Location = new System.Drawing.Point(14, 257);
            this.PhotoPictureBox.Name = "PhotoPictureBox";
            this.PhotoPictureBox.Size = new System.Drawing.Size(200, 200);
            this.PhotoPictureBox.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.PhotoPictureBox.TabIndex = 13;
            this.PhotoPictureBox.TabStop = false;
            // 
            // PhotoButton
            // 
            this.PhotoButton.Location = new System.Drawing.Point(143, 228);
            this.PhotoButton.Name = "PhotoButton";
            this.PhotoButton.Size = new System.Drawing.Size(75, 23);
            this.PhotoButton.TabIndex = 14;
            this.PhotoButton.Text = "Browse...";
            this.PhotoButton.UseVisualStyleBackColor = true;
            this.PhotoButton.Click += new System.EventHandler(this.PhotoButton_Click);
            // 
            // StudentListBox
            // 
            this.StudentListBox.FormattingEnabled = true;
            this.StudentListBox.Location = new System.Drawing.Point(271, 15);
            this.StudentListBox.Name = "StudentListBox";
            this.StudentListBox.Size = new System.Drawing.Size(200, 446);
            this.StudentListBox.TabIndex = 17;
            this.StudentListBox.SelectedIndexChanged += new System.EventHandler(this.StudentListBox_SelectedIndexChanged);
            // 
            // SaveFileDialog
            // 
            this.SaveFileDialog.FileName = "students.dat";
            // 
            // GroupTextBox
            // 
            this.GroupTextBox.Location = new System.Drawing.Point(16, 198);
            this.GroupTextBox.MaxLength = 4;
            this.GroupTextBox.Name = "GroupTextBox";
            this.GroupTextBox.Size = new System.Drawing.Size(200, 20);
            this.GroupTextBox.TabIndex = 18;
            this.GroupTextBox.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.GroupTextBox_KeyPress);
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(487, 507);
            this.Controls.Add(this.GroupTextBox);
            this.Controls.Add(this.StudentListBox);
            this.Controls.Add(this.PhotoButton);
            this.Controls.Add(this.PhotoPictureBox);
            this.Controls.Add(this.PhotoLabel);
            this.Controls.Add(this.BirthDatePicker);
            this.Controls.Add(this.GroupLabel);
            this.Controls.Add(this.AddressLabel);
            this.Controls.Add(this.AddressTextBox);
            this.Controls.Add(this.BirthDateLabel);
            this.Controls.Add(this.NameLabel);
            this.Controls.Add(this.NameTextBox);
            this.Controls.Add(this.OpenButton);
            this.Controls.Add(this.SaveButton);
            this.Controls.Add(this.AddButton);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.Name = "MainForm";
            this.Text = "Student List";
            ((System.ComponentModel.ISupportInitialize)(this.PhotoPictureBox)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();
        }

        private System.Windows.Forms.TextBox GroupTextBox;

        private System.Windows.Forms.OpenFileDialog OpenFileDialog;

        private System.Windows.Forms.SaveFileDialog SaveFileDialog;
        
        private System.Windows.Forms.ListBox StudentListBox;

        #endregion

        private System.Windows.Forms.Button AddButton;
        private System.Windows.Forms.Button SaveButton;
        private System.Windows.Forms.Button OpenButton;
        private System.Windows.Forms.TextBox NameTextBox;
        private System.Windows.Forms.Label NameLabel;
        private System.Windows.Forms.Label BirthDateLabel;
        private System.Windows.Forms.Label GroupLabel;
        private System.Windows.Forms.Label AddressLabel;
        private System.Windows.Forms.TextBox AddressTextBox;
        private System.Windows.Forms.DateTimePicker BirthDatePicker;
        private System.Windows.Forms.Label PhotoLabel;
        private System.Windows.Forms.PictureBox PhotoPictureBox;
        private System.Windows.Forms.Button PhotoButton;
        private System.Windows.Forms.OpenFileDialog PhotoFileDialog;
    }
}

