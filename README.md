# Demo React JS Project

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [License](#license)

## Project Overview

This is a React-based Demo Project web application that includes a dynamic form with Google reCAPTCHA verification. The application is responsive and provides a dark mode toggle functionality, allowing users to switch between light and dark themes. The main components include a header, a form that slides open and closed, and a footer. The form submission is protected with Google reCAPTCHA, ensuring that only human users can submit the form.

## Features

- **Responsive Design**: The layout adjusts seamlessly across different device sizes.
- **Google reCAPTCHA**: Protects the form from bots.
- **Dark Mode**: Users can toggle between light and dark modes.
- **Form Validation**: Ensures that users fill out all required fields before submitting.
- **Dynamic Sliding Form**: The form slides open or closed with a button click.
- **Reusable Components**: Modular React components for easy maintenance and scalability.

## Technologies Used

- **React**: The core framework for building the UI.
- **Google reCAPTCHA**: To protect form submission.
- **CSS**: For styling and responsiveness.
- **react-icons**: For including icons (e.g., dark mode toggler icons).

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Google reCAPTCHA site key (from [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin))

## Installation

### Step 1: Clone the repository

````bash
git clone https://github.com/tiwariabhi19/new-project
cd New Project


### Step 2: Install dependencies
```bash
npm install


### Step 3: Set up the environment variables

 1. Create a .env file in the root directory of the project.
 2. Add your Google reCAPTCHA site key in the .env file:

 REACT_APP_SITE_KEY=your-recaptcha-site-key
Replace your-recaptcha-site-key with the actual site key you obtained from the Google reCAPTCHA Admin Console.

### Step 4: Start the development server
npm start
The app will be available at http://localhost:3004.

# Usage
    Toggling Dark Mode: Click the moon/sun icon in the top-right corner to toggle between dark and light modes.
    Sliding Form: Click the "Open Form" button to slide the form in or out.
    Form Submission: Fill out the name and email fields, complete the Google reCAPTCHA, and click "Submit" to submit the form.


### Project Structure
    ├── public
├── src
│   ├── components
│   │   ├── Header.js         # Header component
│   │   ├── Footer.js         # Footer component
│   │   ├── Slider.js         # Slider form component with reCAPTCHA
│   │   ├── Navbar.js         # Navbar component for site navigation
│   ├── App.js                # Main component
│   ├── App.css               # Global styles
│   ├── index.css             # Styles for the form and layout
│   └── index.js              # Main entry point
├── .env                      # Environment variables file
├── package.json              # Project dependencies
└── README.md                 # Project documentation


### Environment Variables

    This project uses a .env file for storing the Google reCAPTCHA site key. Ensure you have the following key set in your .env file:

    REACT_APP_SITE_KEY=your-recaptcha-site-key
    Replace your-recaptcha-site-key with your actual site key from the Google reCAPTCHA Admin Console.


### License
This project is licensed under the MIT License - see the LICENSE file for details.


### 4. **Testing the Appearance**
After writing your content:
1. **Test in your local environment** using Markdown preview (e.g., VS Code).
2. **Push it to GitHub** (or another platform like GitLab/Bitbucket), and it will be rendered as clean Markdown on the repository's main page.

If the issue persists, please share specific feedback on what is not looking good so we can tweak it further.
````
