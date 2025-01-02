# Anugrah7-MERN-PROJECT-FAIR

A web application built using the MERN stack, designed to manage, showcase, and interact with projects in a dynamic and user-friendly environment. Whether you're a developer, a student, or part of a team, this platform makes it easy to collaborate on projects, display them professionally, and manage them efficiently.

---

## Features

- **User Authentication**
  - Secure login and registration functionality.
  - Token-based authentication for secure access.
  
- **Dashboard**
  - Personalized dashboard for managing projects.
  - Add, edit, view, and delete projects easily.

- **Project Showcase**
  - Display projects in a visually appealing layout.
  - Filter and search functionality for efficient browsing.

- **Responsive Design**
  - Optimized for both desktop and mobile devices.

- **Error Handling**
  - Custom 404 "Page Not Found" component for invalid URLs.

---

## Technologies Used

### Frontend
- **React** (with **Vite** for fast builds and development)
- **CSS** for styling

### Backend (not included in this repo)
- **Node.js** with **Express.js**
- **MongoDB** for database management

### State Management
- **React Context API** for global state sharing

### Code Quality
- **ESLint** for code linting and style enforcement

---

## Project Structure

```Anugrah7-MERN-PROJECT-FAIR/ ├── README.md # Project documentation ├── eslint.config.js # ESLint configuration ├── index.html # Root HTML file ├── package.json # Project dependencies and scripts ├── vite.config.js # Vite configuration ├── public/ # Static assets (e.g., images, icons) ├── src/ │ ├── App.css # Root application styles │ ├── App.jsx # Root React component │ ├── index.css # Global styles │ ├── main.jsx # Entry point for React app │ ├── Components/ # Reusable UI components │ │ ├── Add.jsx │ │ ├── Edit.jsx │ │ ├── Footer.jsx │ │ ├── Header.jsx │ │ ├── Profile.jsx │ │ ├── ProjectCard.jsx │ │ └── View.jsx │ ├── Pages/ # Full-page components for routing │ │ ├── Auth.jsx │ │ ├── Dashboard.jsx │ │ ├── Home.jsx │ │ ├── Pnf.jsx │ │ └── Projects.jsx │ ├── Services/ # API utilities │ │ ├── allAPI.js │ │ ├── commonAPI.js │ │ └── serverUrl.js │ ├── assets/ # Static assets (e.g., images) │ └── context/ # React context files │ ├── ContextShare.jsx │ └── TokenAuth.jsx   ```


