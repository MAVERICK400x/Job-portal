# Job Portal Application

This is a simple job portal application built with Node.js, Express.js, and EJS for templating. It allows users to browse job listings, apply for jobs, and manage their applications.

## Features

- **Job Listings:** Displays a list of available job openings with details like title, company, requirements, salary, and location.
- **User Authentication:** Users can register and log in to the portal.
- **Job Application:** Logged-in users can apply for jobs.
- **My Jobs:** Users can view a list of jobs they have applied for.
- **Session Management:** Uses `express-session` for managing user sessions.
- **EJS Templating:** Uses EJS for dynamic HTML rendering.
- **Password Hashing:** Uses `bcryptjs` for secure password storage.

## Prerequisites

- Node.js and npm installed on your machine.

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```
2. **Install dependencies:**

   ```bash
   npm install express express-session bcryptjs body-parser ejs
   ```

## Running the Application

1. **Start the server:**

   ```bash
   node app.js
   ```
2. **Open your browser and navigate to `http://localhost:8000`.**Project Structure

## Dependencies

- `express`: Web framework for Node.js.
  - `npm install express`
- `express-session`: Middleware for session management.
  - `npm install express-session`
- `body-parser`: Middleware for parsing request bodies.
  - `npm install body-parser`
- `ejs`: Templating engine.
  - `npm install ejs`
- `bcryptjs`: For hashing passwords.
  - `npm install bcryptjs`

## Usage

1. **Register or log in:** Users can register or log in to access the full functionality of the portal.
2. **Browse jobs:** View the list of available job listings.
3. **Apply for jobs:** Click the "Apply" button to apply for a job.
4. **View applied jobs:** Go to the "My Jobs" page to see the jobs you have applied for.
5. **Logout:** Logout of your account.

## Future Enhancements

- Database integration for persistent data storage.
- User profile management.
- Job search and filtering.
- Admin panel for managing jobs and users.
- Improved UI/UX.
- Add more robust error handling and validation.
- Implement security best practices.

## Author

B srinivasa Ranganath - [maverick400x]([https://github.com/MAVERICK400x](https://github.com/MAVERICK400x))
