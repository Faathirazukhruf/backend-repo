# Backend Express.js API with TypeScript, Firebase, and CORS

This is a backend API built with **Express.js**, **TypeScript**, and **Firebase Admin SDK**. The API is designed to manage user data using **Firebase Firestore** as the database.  The backend is also configured with **CORS** to allow cross-origin requests from a frontend such as **Next.js**.

## Features

- **User Data Management**: API for updating and fetching user data from Firebase Firestore.
- **Authentication**: Middleware for handling Firebase Authentication tokens (can be enabled/disabled).
- **TypeScript Support**: Built entirely with TypeScript for type safety and scalability.
- **CORS Enabled**: Allows cross-origin requests from other domains.

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **npm** (or **yarn**)
- **Firebase Project** (with Admin SDK enabled)
  
You will also need to set up a **Firebase Service Account** for Firebase Admin SDK.

## Getting Started

Follow these steps to clone the repository and run the project.

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/backend-repo.git
cd backend-repo
```

### 2. Install dependencies

```bash
npm install
```

This will install all the required dependencies including **Express.js**, **TypeScript**, **Firebase Admin SDK**, and **CORS**.

### 3. Set up Firebase Admin SDK

You need to set up Firebase Admin SDK to interact with Firestore. Follow these steps:

- Go to your **Firebase Console**.
- In the **Project Settings**, create a **Service Account** and download the private key as a JSON file.
- Save the downloaded JSON file in the `config/` folder with the name **`firebaseKey.json`**.

Example structure:

```
backend-repo/
├── config/
│   └── firebaseKey.json
├── core/
│   └── app.ts
...
```

### 4. Set up environment variables

Create a **`.env`** file in the root directory of your project to store environment variables.

Example `.env` file:

```
PORT=3000
```

### 5. Run the server

You can run the server in **development mode** using `nodemon` for auto-reload or in **normal mode**.

- **Development mode** (with `nodemon`):
  ```bash
  npm run dev
  ```

- **Normal mode**:
  ```bash
  npm start
  ```

Once the server is running, you should see the following message:

```
Server is running on port 3000
```

You can access the API at `http://localhost:3000`.

## API Endpoints

### 1. Update User Data

- **URL**: `/api/users/update-user-data`
- **Method**: `POST`
- **Body**: JSON object with user data
- **Authorization**: Requires Bearer Token (Firebase Authentication)

**Example Request Body**:

```json
{
  "uid": "user_id",
  "totalAverageWeightRatings": 4.5,
  "numberOfRents": 30,
  "recentlyActive": 1738679612
}
```

### 2. Fetch User Data

- **URL**: `/api/users/fetch-user-data/:uid`
- **Method**: `GET`
- **Authorization**: Requires Bearer Token (Firebase Authentication)

Replace `:uid` with the user’s ID you want to fetch.

## Project Structure

```
backend-repo/
├── config/
│   └── firebaseConfig.ts      # Firebase Admin SDK configuration
├── controller/
│   └── api.ts                 # API logic for updating and fetching user data
├── core/
│   └── app.ts                 # Main Express.js application
├── entities/
│   └── user.ts                # User data model
├── middleware/
│   └── authMiddleware.ts      # Firebase Auth middleware for token verification
├── repository/
│   └── userCollection.ts      # Firestore database interactions for user collection
├── routes/
│   └── userRoutes.ts          # User-related API routes
├── types/
│   └── express/
│       └── index.d.ts         # TypeScript declaration for custom types
├── .env                       # Environment variables (should be created manually)
├── package.json               # Project metadata and dependencies
└── tsconfig.json              # TypeScript configuration
```

## Dependencies

- **Express.js**: Web framework for building RESTful APIs.
- **TypeScript**: Adds type safety and modern JavaScript features.
- **Firebase Admin SDK**: Interact with Firebase Firestore and Firebase Authentication.
- **CORS**: Enable cross-origin requests from different domains.
- **dotenv**: Loads environment variables from a `.env` file.
- **Nodemon** (optional): Automatically restart the server when file changes are detected.

## License

This project is licensed under the MIT License.
```
