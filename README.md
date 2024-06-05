# Movie Library Web Application

## Overview
This project is a movie library web application that allows users to sign up, log in, search for movies, and create personalized lists of their favorite movies. Users can also manage the privacy settings of their lists. The application leverages the OMDB API to fetch movie details and is deployed on Render for demonstration.

## Features
1. **User Authentication:** Users can sign up and log in to the application.
2. **Movie Search:** Users can search for movies and view detailed information about each movie.
3. **Movie Lists:** Users can create, view, and manage lists of movies. These lists can be marked as public or private.
4. **Responsive Design:** The application has a user-friendly layout inspired by popular movie-related websites.

## Live Demo
You can access the live application here: [Movie Library Web Application](https://movieapp-1-43k6.onrender.com/)

## GitHub Repository
The source code is available on GitHub: [GitHub Repository](https://github.com/gargdev/movieapp)

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **API:** OMDB API
- **Deployment:** Render

## Setup and Installation
Follow the steps below to set up and run the project locally.

### Prerequisites
- Node.js
- MongoDB

### Steps to Run

1. **Clone the repository:**
   ```sh
   git clone https://github.com/gargdev/movieapp.git
   cd movieapp
   ```

2. **Install backend dependencies:**
   ```sh
   cd backend
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `backend` directory and add the following variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   OMDB_API_KEY=your_omdb_api_key
   ```

4. **Start the backend server:**
   ```sh
   npm start
   ```

5. **Install frontend dependencies:**
   ```sh
   cd ../frontend
   npm install
   ```

6. **Set up environment variables for the frontend:**
   Create a `.env` file in the `frontend` directory and add the following variable:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

7. **Start the frontend server:**
   ```sh
   npm start
   ```

8. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

## Usage
1. **Sign Up / Log In:** Create a new account or log in with existing credentials.
2. **Search Movies:** Use the search bar on the home screen to find movies.
3. **Create Lists:** Add movies to your lists and manage the visibility of your lists.
4. **View Lists:** Access your movie lists from the home page.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.

## Contact
For any questions or suggestions, please contact Anoop Kumar Pandey at anooppandey937@gmail.com.

---

Feel free to customize this README file as per your specific requirements.