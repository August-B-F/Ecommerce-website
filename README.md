# Ecommerce Website

This project is a React-based e-commerce website created using Create React App. It features a product display, shopping cart functionality, and user account management.

**Live Demo:** You can see the website live at [https://sleeq.netlify.app/](https://sleeq.netlify.app/)

## Project Status

This project is currently in development. The front-end structure is in place, with components for displaying products, managing user interactions, and handling different item categories. Backend integration for fetching product data is in progress.

## Features

* **Homepage:** Displays featured products and categories.
* **Product Listings:** Separate pages for different product categories like T-shirts, Hoodies, Sweatshirts, Sweatpants, and Accessories.
* **Product Display:** Individual product cards showing product name, image, and price.
* **Shopping Cart:**
    * Add items to the cart.
    * Cart preview.
    * Dedicated cart page.
* **User Account:**
    * Dedicated user page with options for Orders, Settings, and Wishlist.
* **Navigation:** A persistent navbar for easy navigation across different sections of the website.
* **Styling:** Custom styling for various components and sections, including a responsive design for different screen sizes.

## Technologies Used

* **Frontend:**
    * React
    * React Router DOM for navigation
    * Material-UI for UI components
    * Axios for making HTTP requests
* **Styling:**
    * CSS
    * Google Fonts (Montserrat)
* **Development Tools:**
    * Create React App
    * ESLint for linting
    * Jest and React Testing Library for testing

## Project Structure

The project follows a standard Create React App structure:

```

ecommerce-website/
├── public/
│   ├── index.html        \# Main HTML file
│   ├── manifest.json     \# Web app manifest
│   └── robots.txt        \# Instructions for web crawlers
│   └── favicon.ico       \# Favicon
│   └── logo192.png       \# Logo for manifest
│   └── logo512.png       \# Logo for manifest
├── src/
│   ├── App.css             \# Main app styles
│   ├── App.js              \# Main App component
│   ├── general.css         \# General global styles
│   ├── index.css           \# Root index styles
│   ├── index.js            \# Entry point of the application
│   ├── reportWebVitals.js  \# Web vitals reporting
│   ├── setupTests.js       \# Jest setup
│   ├── Home/
│   │   ├── Home.jsx        \# Homepage component
│   │   └── homeStyle.css   \# Styles for the homepage
│   ├── Products/
│   │   ├── Product/
│   │   │   ├── Product.jsx \# Single product component
│   │   │   └── styles.js   \# Styles for single product component
│   │   ├── Products.jsx    \# Component to display multiple products
│   │   └── styles.js       \# Styles for products listing
│   ├── itemPages/
│   │   ├── Accessores.jsx
│   │   ├── Hoodies.jsx
│   │   ├── Sweatpants.jsx
│   │   ├── Sweatshirts.jsx
│   │   ├── T-shirts.jsx
│   │   └── ItemCard/
│   │       ├── card.jsx        \# Component for displaying item cards (appears to fetch data)
│   │       └── itemCard.css    \# Styles for item cards
│   ├── userUI/
│   │   ├── Cart.jsx          \# Cart page component
│   │   ├── User.jsx          \# User account page component
│   │   ├── cartPreview.jsx   \# Cart preview component
│   │   ├── cartStyle.css     \# Styles for cart components
│   │   └── userStyle.css     \# Styles for user account page
│   ├── hooks/
│   │   └── useLocalStorage.js \# Custom hook for local storage
│   └── bilder/               \# Image assets (referenced in CSS and JSX)
├── package.json              \# Project dependencies and scripts
└── package-lock.json         \# Exact versions of dependencies

```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Future Enhancements

* Complete backend integration for dynamic product data.
* Implement full shopping cart and checkout functionality.
* Develop user authentication and order history features.
* Refine styling and improve user experience.