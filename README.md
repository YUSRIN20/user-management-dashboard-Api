# User Management Dashboard

This is a User Management Dashboard built with **React** and **Tailwind CSS** that allows users to view, add, edit, and delete user information. The application provides functionalities for managing users, including the ability to perform CRUD (Create, Read, Update, Delete) operations. The project uses a context API to manage the global state of the users.

## Features

- **View Users**: Displays a list of users with their details such as name, username, email, company name, and department.
- **Create Users**: Add new users to the dashboard with the option to input their name, username, email, and company details.
- **Edit Users**: Update user details with the option to modify any existing user’s information.
- **Delete Users**: Remove users from the dashboard based on a unique identifier.
- **Responsive Design**: The dashboard is fully responsive and works well on all screen sizes, thanks to **Tailwind CSS**.

## Tech Stack

- **Frontend**: React, Tailwind CSS, Context API for state management
- **Deployment**: The app is deployed on **Netlify** for easy access and demonstration.
- **Mock API**: **JSONPlaceholder** (https://jsonplaceholder.typicode.com/) is used as the mock API for fetching and managing user data.

## Live Demo

You can check out the live demo of the project [here](https://user-management-dashboard-demo.netlify.app/).

## Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/user-management-dashboard.git
```

### 2. Navigate to the Project Directory

```bash
cd user-management-dashboard
```

### 3. Install Dependencies

Make sure you have **Node.js** installed. Then, run the following command to install the required dependencies:

```bash
npm install
```

### 4. Start the Development Server

```bash
npm start
```

After running this command, open your browser and go to `http://localhost:3500` to see the app running.

## Features Walkthrough

### 1. View Users

When the page loads, you can see a list of all the users. Each user’s details are shown, including their name, username, email, and company information.

### 2. Edit Users

Click the **Edit** button next to any user’s details. This opens a modal where you can modify the user’s information. Once the changes are made, click **Save** to update the user.

### 3. Delete Users

Click the **Delete** button to remove a user from the list. This will delete the user based on their **uniqueId**.

### 4. Create Users

You can add new users by clicking a button to open the **Create Modal**. This allows you to enter details for a new user and add them to the dashboard.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.