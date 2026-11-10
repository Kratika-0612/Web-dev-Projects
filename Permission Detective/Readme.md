#  Permission Detective

### Understand App Permissions. Make Informed Decisions.

## 🎯 Objective

The objective of **Permission Detective** is to promote digital privacy awareness by helping users understand whether the permissions requested by mobile applications are appropriate for their intended functionality. 

## 📌 About the Project

Permission Detective is a web-based cybersecurity awareness tool that analyses manually selected application permissions based on the application's category.

Users can enter application details, select requested permissions, and generate an organised analysis report containing permission descriptions, risk levels, purposes, and contextual explanations.

## ✨ Key Features

### 1. Application Details
- Enter the application name.
- Select the target platform.
- Choose the application category.

### 2. Manual Permission Selection
- Select permissions requested by an application.
- Analyse multiple permissions in a single assessment.
- Supports seven permission types: Camera, Microphone, Location, Contacts, Storage / Photos, SMS, and Phone.

### 3. Category-Based Permission Analysis
- Evaluates selected permissions against predefined category-based rules.
- Identifies permissions that are generally relevant or potentially unnecessary.
- Considers context-dependent permissions based on application functionality.

### 4. Risk Assessment
- Displays the associated risk level of each selected permission.
- Provides a description and intended purpose for better understanding.

### 5. Detailed Analysis Report
- Generates individual result cards for each selected permission.
- Displays permission status and risk information.
- Provides additional explanations for context-dependent permissions.
- Presents results in a clean and structured format.

## 📊 Permission Classification

| Classification | Description |
|---|---|
| 🟢 Relevant | Generally associated with the selected application category. |
| 🔵 Context-Dependent | May be required depending on the application's specific features. |
| 🟠 Potentially Unnecessary | Not generally expected for the selected application category. |

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure and content |
| CSS3 | Styling and layout |
| JavaScript (Vanilla JS) | Analysis logic and dynamic report generation |

## 📁 Project Structure

```text
Permission-Detective/
│
├── assets/
│   └── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── data.js
│   ├── analyze.js
│   └── main.js
│
└── README.md
```

## ⚙️ How to Run

1. Clone or download the repository.
2. Open the project folder in Visual Studio Code.
3. Open `assets/index.html`.
4. Run the page using the Live Server extension.
5. Enter the application details.
6. Select the permissions to analyse.
7. Click the **Analyse** button to view the generated report.

## ⚠️ Disclaimer

Permission Detective provides general guidance based on predefined application-category rules. It does not perform an actual security scan or verify an application's behaviour.

A permission classified as Relevant does not guarantee that an application is safe. Similarly, a Potentially Unnecessary classification does not automatically indicate malicious activity.

Actual permission requirements depend on the application's functionality and implementation.

## 🚀 Future Scope

- Expand the permission database.
- Introduce more application categories.
- Improve context-aware permission evaluation.
- Enhance analysis reports with additional security insights.
- Expand platform-specific permission guidance.

---

**Developed by :**<br>
Kratika Srivastava
