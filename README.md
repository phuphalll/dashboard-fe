# React TypeScript Dashboard Application

### Objectives

    The goal of this project is to develop a Dashboard application using React with TypeScript to showcase development skills and experience.

#### Key Features

1. Yearly dashboard Table: Display a yearly basis. in a table format.
2. Filter yearly basis: The capability to select specific years basis filter.
3. Render Data: Display yearly Data in the table list.

#### Functionality

Get yearly report: Filter yearly report.

#### List Yearly data

- Ability to search and compare the data with separate data table.

# Local Development

### Prerequisites

- Node.js 20.x version
- Typescript: 4.9.5
- NPM (Comes with Node.js)

### Setup and Installation

Before you can run the application locally, you need to set up your development environment. Follow these steps to get started:

- Clone the Repository: If you haven't already, clone the repository to your local machine.

  ```
  bash
  git clone https://github.com/phuphalll/dashboard-fe
  cd dashboard-fe
  ```

- Preparing the .env File: The application requires certain environment variables to be set for it to function correctly. These variables are stored in a `.env` and `.env.dev`.
  ```
  REACT_APP_API_URL=<backend-url>
  ```
  - REACT_APP_API_URL: This is the base URL of your API. Replace it with the correct URL if it's different.
- Install Dependencies: Run the following command in the project directory to install the necessary dependencies:

  ```
  npm install
  ```

### Running the Application Locally

After setting up your development environment, you can run the application locally:

- Development Server: To start the development server, run:

  ```
  npm start
  ```

  This will start the server on http://localhost:3000 by default. You can access the application by navigating to this URL in your web browser.

- Using Environment Variables:Development with utilizes .env.dev file. Note: You may have to setup `.env.dev` file
  ```
  npm run dev
  ```
- Run application from build bundle. Require `.env.dev` to be setup
  ```
  npm run build:dev
  npm run serve
  ```
