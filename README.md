# Hotel Booking Frontend

This is a React.js frontend application for the Hotel Booking system. It provides a user interface for viewing hotel details and  room information.

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Running the Application](#running-the-application)
6. [Connecting to the Backend](#connecting-to-the-backend)
7. [Project Structure](#project-structure)
8. [Components](#components)
9. [Available Scripts](#available-scripts)
10. [Deployment](#deployment)
11. [Contributing](#contributing)
12. [License](#license)

## Features

- View detailed information about each hotel
- Display hotel image galleries
- Show available rooms for each hotel
- Present host information
- Display reviews and location details
- Show sleeping arrangements and amenities
- Provide a booking calendar
- Responsive design for mobile and desktop

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Hotel Booking Backend API running (See backend README for setup)

## Installation

To install the Hotel Booking Frontend, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/hotel-booking-frontend.git
   ```

2. Navigate to the project directory:
   ```
   cd hotel-booking-frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Configuration

1. Create a `config.json` file in the `src` directory of the project.
2. Add the following configuration:
   ```json
   {
     "API_BASE_URL": "http://localhost:5000"
   }
   ```
   Replace the URL with your backend API URL if it's different.

## Running the Application

To run the Hotel Booking Frontend, use the following command:

```
npm start
```

This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Connecting to the Backend

The frontend connects to the backend API using the URL specified in the `config.json` file. Ensure that:

1. The backend server is running and accessible.
2. The `API_BASE_URL` in the `config.json` file points to the correct backend URL.
3. CORS is properly configured on the backend to allow requests from the frontend origin.

## Project Structure

```
hotel-booking-frontend/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── AppBanner.js
│   │   ├── ImageGallery.js
│   │   ├── ReviewAndLocation.js
│   │   ├── MeetHost.js
│   │   ├── Footer.js
│   │   ├── LeftColumn.js
│   │   ├── RightColumn.js
│   │   ├── EnhancedNavbar.js
│   │   ├── RentalInfo.js
│   │   ├── HostInfo.js
│   │   ├── CheckInInfo.js
│   │   ├── Description.js
│   │   ├── SleepingArrangement.js
│   │   ├── Amenities.js
│   │   └── Calendar.js
│   │
│   ├── pages/
│   │   └── HotelDetails.js
│   │
│   ├── config.json
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md
```

## Components

The application is composed of several React components:

- `Navbar`: Main navigation component
- `AppBanner`: Displays application banner
- `ImageGallery`: Shows hotel images
- `ReviewAndLocation`: Displays reviews and location information
- `MeetHost`: Shows information about the host
- `LeftColumn` & `RightColumn`: Layout components
- `RentalInfo`: Displays rental information
- `HostInfo`: Shows detailed host information
- `CheckInInfo`: Provides check-in details
- `Description`: Hotel description component
- `SleepingArrangement`: Displays sleeping arrangements
- `Amenities`: Lists hotel amenities
- `Calendar`: Booking calendar component

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production

## Deployment

To deploy the application, run:

```
npm run build
```

This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Contributing

Contributions to the Hotel Booking Frontend are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License.