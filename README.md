## [Resume Crafter Web Application](https://rescrafter.netlify.app/)

## 📌 Project Overview
The **Resume Crafter** is a web application that allows users to create professional resumes with ease. Users can input their details, select a template, and generate a well-structured resume in various formats. Built using **React** and **Redux**, this application ensures a smooth and interactive user experience.

## 🚀 Features
- User-friendly interface for inputting personal, educational, and professional details
- Multiple resume templates to choose from
- Live preview of the resume as users input data
- State management using **Redux** for a seamless experience
- Download resumes in PDF format
- Responsive design for mobile and desktop users

## 🛠️ Tech Stack
- **Frontend:** React, Redux
- **State Management:** Redux Toolkit
- **Styling:**  CSS
- **PDF Generation:** jsPDF
- **Routing:** React Router

## 📂 Project Structure
```
📦 resume-builder
├── 📂 public              # Static assets
├── 📂 src
│   ├── 📂 components      # Reusable UI components
│   ├── 📂 pages           # Application pages
│   ├── 📂 redux           # Redux store & slices
│   ├── 📂 templates       # Resume templates
│   ├── 📂 utilities       # Helper functions
│   ├── 📜 App.js          # Main application component
│   ├── 📜 App.css         # Main styling file
│   ├── 📜 index.js        # Entry point
├── 📜 package.json        # Dependencies & scripts
├── 📜 README.md           # Project documentation
```

## 🎯 Getting Started

### Prerequisites
Ensure you have **Node.js** and **npm** installed on your system.

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/resume-builder.git

# Navigate to the project directory
cd resume-builder

# Install dependencies
npm install
```

### Running the Application
```bash
# Start the development server
npm start
```
The app should now be running at `http://localhost:3000/`

### Build for Production
```bash
npm run build
```

## 🔧 Redux State Management
This project utilizes **Redux Toolkit** for efficient state management. The state is divided into slices such as:
- `userSlice` → Stores personal and professional details
- `templateSlice` → Handles selected resume templates


## 🖼️ Screenshots
![home (4) 1](https://github.com/user-attachments/assets/ab19674c-0b4b-40e0-907e-8a7b451fd709)

![personal-info 1](https://github.com/user-attachments/assets/7902a53e-4384-4d3a-94ef-747fcf5ac2eb)

## 📌 Future Improvements
- Support for more templates
- Integration with cloud storage for saving resumes
- AI-based resume suggestions
- Export as Word document

## 🤝 Contribution
Contributions are welcome! Feel free to fork the repo and submit a pull request.

---
⭐ **Star this repository** if you find it useful!


