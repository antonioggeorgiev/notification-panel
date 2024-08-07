# Notification Panel Application

## Introduction

Welcome to the Notification Panel application! This project is designed to provide users with an easy-to-use and efficient notification panel.

## Prerequisites

Before you can set up and run this project, ensure you have the following installed on your machine:

- **Node.js**: Version 20.x.x
- **pnpm**: The package manager we are using for this project.

## Setup Instructions

Follow these steps to set up and run the project:

1. **Install Node.js**

   Ensure you have Node.js version 20 installed. You can download it from the [official Node.js website](https://nodejs.org/).

2. **Install pnpm**

   If you don't have pnpm installed, you can install it globally using npm:

   ```bash
   npm install -g pnpm

   ```

3. **Install Dependencies**

   Navigate to the project directory and install the dependencies by running:

   pnpm install

4. **Run the Project**

   To start the development server, run:

   pnpm run dev

# Notification Panel Application

## Introduction

Welcome to the Notification Panel application! This document provides instructions for using the application.

## User Instructions

### Registration

1. **Register**:

   - Navigate to the registration page.
   - Fill in the required details to create an account.
   - Submit the registration form.

2. **Redirection to Login Page**:
   - After successful registration, you will be redirected to the login page.

### Login

1. **Login**:

   - On the login page, enter your registered credentials.
   - Click the login button.

2. **Dashboard**:
   - Upon successful login, you will see an empty dashboard with a navigation bar on top.

### Navigation Bar

1. **Settings Dropdown**:

   - Located on the far right of the navigation bar.
   - Click to open the dropdown where you can sign out.

2. **Notifications Dropdown**:
   - Located next to the settings dropdown.
   - Click to view a list of unread notifications or create a new notification.

### Notifications

1. **Viewing Notifications**:

   - Click on a notification to perform different actions based on the type of notification.

2. **Creating a Notification**:
   - Click the button in the notifications dropdown to open a dialog.
   - In the dialog, fill in the details to create a notification.

### Types of Notifications

1. **[Platform update]**:

   - **Description**: New features - see what’s new.
   - **Action**: On click, the app shows an alert (`"1.2.3"`).

2. **[Comment Tag]**:

   - **Description**: `<Somebody>` tagged you in a comment.
   - **Action**: On click, the app takes you to `/comments`.

3. **[Access Granted]**:

   - **Description**: `<Somebody>` shared a chat with you.
   - **Action**: On click, the app takes you to `/chats`.

4. **[Join Workspace]**:
   - **Description**: `<Somebody>` joined your workspace.
   - **Action**: On click, the app takes you to `/workspace`.

### Notification Colors

Each type of notification is displayed in a different color for easy identification.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact us at [your-email@example.com](mailto:your-email@example.com).
