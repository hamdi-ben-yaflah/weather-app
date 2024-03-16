# Weather App

This is a weather application built with Next.js using [openweathermap](https://openweathermap.org/forecast5) API.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/)
- Or you can download [docker desktop](https://www.docker.com/products/docker-desktop/) and run the application via docker.

## Installing Weather App

To install Weather App, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/yourusername/weather-app.git
```

2. Navigate into the project directory:

```
cd weather-app
```

3. Install the dependencies:

```
npm install
```

## Using Weather App

To use Weather App, follow these steps:

1. Create `.env` file and insert your openweathermap api key, check `.env.example`

2. Start the development server:

```
npm run dev
```

2. Open your web browser and navigate to `http://localhost:3000`.

## With Docker

1. Build the docker image with:

```
docker build . -t 'insert image name'
```

2. Run the image with:

```
docker run -p 3000:3000 'image name'
```

3. Open your web browser and navigate to `http://localhost:3000`.

## Running Tests

This project uses Jest for unit testing / component testing and Cypress for end-to-end testing.

To run the Jest tests:

```
npm run test
```

To run the Cypress tests:

1. Build and start the application:

```
npm run build & npm run start
```

2. run cypress tests:

```
npm run cypress:run
```
