# Reviews Application

This is a React application designed to showcase a review system with pagination and language selection. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

* [Task Description](#task-description)
* [Features](#features)
* [Live Demo](#live-demo)
* [Getting Started](#getting-started)
* [Possible Improvements](#possible-improvements)

## Task Description
**Task**

You need to develop a simple SPA:

- The "Header" block consists of an image (from open sources), a language dropdown list (ru, en), and a "Watch" component in the "hh:mm:ss" format (the clock should display real time).
- The "Main" block consists of a list of reviews (data from [data.json](https://disk.yandex.ru/d/1zUh9hte3u2emQ) in the format (client name, review, date). The number of reviews per page is 10 (max). If there are more reviews, pagination should be implemented in the format (min ... mid ... max).
  The client's name format: Иванов И.

**Stack**

- React (class component)
- Redux
- Typescript
- Webpack

The implementation of styles is at the candidate's discretion.
It will be a plus if no third-party libraries are used!

## Features

- **Header**: A fixed header with a logo, language selector, and a clock.
- **Pagination**: Allows users to navigate through reviews with pagination controls.
- **Language Selector**: Switch between Russian and English languages.
- **Review Formatting**: Displays names in a formatted style (last name with first name initial).
- **Dynamic Styling**: Responsive design and interactive elements.
- **Custom Hook**: Uses a custom hook for managing localStorage with enhanced error handling and validation.
- **Testing**: Comprehensive tests for components using `@testing-library/react` to ensure proper rendering and functionality.

## Live Demo

You can view the live version of the application [here](https://tema-skakun.github.io/business-solutions/).

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installing

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/tema-skakun/business-solutions.git
cd business-solutions
```

Install the necessary dependencies:

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Possible Improvements

- **Performance Optimization**: Improve the performance of the app by optimizing the rendering of components and utilizing React.memo where appropriate.
- **Accessibility**: Enhance accessibility features, ensuring all interactive elements are accessible via keyboard and screen readers.
- **UI/UX Enhancements**: Refine the user interface and user experience, including animations and transitions, to make the app more engaging.
- **CSS Modules**: Implement CSS Modules to scope CSS by component and avoid global style conflicts.
- **Error Handling**: Improve error handling throughout the app, especially for network requests and localStorage operations.
- **Code Splitting**: Implement code splitting to reduce the initial load time of the application.
- **API Integration**: Integrate with a real backend API for fetching reviews, allowing for dynamic updates and user submissions.
- **State Management**: Evaluate and potentially refactor state management to use modern solutions like Redux Toolkit for simplified and efficient state management.
- **Dockerization**: Provide a Docker setup for easier deployment and development environment consistency.
