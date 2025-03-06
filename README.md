# WanderLust - Your Gateway to Memorable Stays

WanderLust is a comprehensive platform that connects travelers with unique accommodations worldwide. Whether you're seeking a cozy cabin in the mountains or a beachfront villa, 
WanderLust offers a diverse range of options to cater to every traveler's desires.

## Features

- **User Authentication:** Secure sign-up and login functionalities to personalize user experiences.
- **Explore Listings:** Browse through a curated selection of accommodations with detailed descriptions and high-quality images.
- **Responsive Design:** Optimized for seamless experiences across desktops, tablets, and mobile devices.
- **Interactive Map:** Visualize accommodation locations to plan your stay efficiently.
- **User Reviews:** Share and read experiences to make informed decisions.

## Technologies Used

- **Frontend:**
  - **HTML5 & CSS3:** For structured content and styling.
  - **Bootstrap:** Responsive design framework.
  - **JavaScript:** Enhances interactivity and user engagement.
  - **EJS (Embedded JavaScript):** Templating engine for dynamic content rendering.

- **Backend:**
  - **Node.js:** Server-side runtime environment.
  - **Express.js:** Web application framework for routing and middleware management.
  - **MongoDB:** NoSQL database for efficient data storage and retrieval.
  - **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
  - **Passport.js:** Authentication middleware for Node.js.

- **Deployment & Hosting:**
  - **Render:** Cloud platform for deploying web applications.
  - **Cloudinary:** Manages and delivers images efficiently.
  - **MongoDB Atlas:** Cloud-based database service.

## Installation

To set up the WanderLust project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Swathi-Mishra/wanderlust.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd wanderlust
   ```
3. **Install backend dependencies:**
   ```bash
   npm install
   ```
4. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     CLOUD_NAME=your_cloudinary_cloud_name
     CLOUD_API_KEY=your_cloudinary_api_key
     CLOUD_API_SECRET=your_cloudinary_api_secret
     ATLASDB_URL=your_mongodb_atlas_connection_string
     SECRET=your_session_secret
     ```
5. **Start the application:**
   ```bash
   npm start
   ```
6. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Browse Listings:** Explore various accommodations and view details.
- **User Actions:** Sign up or log in to add new listings, edit existing ones, or leave reviews.
- **Interactive Map:** Utilize the map feature to locate accommodations.

## Contributing

We welcome contributions to enhance WanderLust. To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add YourFeature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request detailing your changes.

## License

This project is licensed under the MIT License.

## Contact

For questions or suggestions:

- **GitHub:** [Swathi-Mishra](https://github.com/Swathi-Mishra)

---

Embark on your next adventure with WanderLust!

