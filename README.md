

## 📝 Student Data Filing Form

A multi-step, responsive student registration form built using **HTML**, **Tailwind CSS**, and **JavaScript**. It collects basic student details like name, contact, birth info, address, and skills — and displays them in the console after submission.

---

### 🌟 Features

* ✅ Multi-step navigation
* ✅ Client-side validation for each step
* ✅ Dynamic age limit (5–35 years)
* ✅ Skill selection with minimum required count
* ✅ Responsive design using **Tailwind CSS**
* ✅ Success message on completion
* ✅ Clean console log of submitted data

---

### 🔗 Live Demo

[👉 Click here to test the form ](https://nimzi-kp.github.io/student-data-filing-form/)
(Test and view console output after submitting)

---

### 🚀 Technologies Used

* HTML5
* Tailwind CSS (via CDN)
* Vanilla JavaScript

---

### 📂 Project Structure

```
.
├── index.html       # Main HTML structure
├── script.js        # Logic for form navigation, validation, and storage
├── bg.png           # Background image
└── README.md        # Project documentation
```

---

### 🧪 How to Use

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/student-data-filing-form.git
   ```
2. Navigate to the folder:

   ```bash
   cd student-data-filing-form
   ```
3. Open `index.html` in your browser.
4. Fill the form → Click through steps → Submit.
5. Open your browser's **console** to view the submitted student data.

---

### ✅ Validation Rules

| Field         | Requirement                              |
| ------------- | ---------------------------------------- |
| First Name    | Required, letters only                   |
| Second Name   | Required, letters only                   |
| Email         | Must be a valid email                    |
| Phone Number  | Exactly 10 digits                        |
| Date of Birth | Must be between 5 and 35 years ago       |
| Gender        | Required                                 |
| Address       | Minimum 8 characters                     |
| Country       | Required (not default)                   |
| Skills        | Minimum of 3 checkboxes must be selected |

---

### 🔄 Resetting the Form

After submission, click **"NEW FORM"** to reload and start fresh. You'll be prompted for confirmation before the form resets.

---

### 🛠️ Future Improvements (Suggestions)

* Add form submission to a backend (Node.js) 
* Display a summary screen before final submission
* Export data to JSON or CSV
* Add localStorage support to preserve form progress

---

### 👨‍💻 Author

Made by KP. 
Feel free to fork or contribute!

--- 
