# AUTH-SERVICE

Auth Service is a robust authentication service built from scratch using Node.js and PostgreSQL. It provides essential authentication features such as user registration, login, and session management.

![Last Commit](https://img.shields.io/badge/last%20commit-march-blue)
![Language](https://img.shields.io/badge/typescript-100%25-blue)
![Languages Count](https://img.shields.io/badge/languages-1-blue)

---

### Built with the tools and technologies:

![Typescript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
![Yarn](https://img.shields.io/badge/-Yarn-2C8EBB?logo=yarn&logoColor=white)
![Express](https://img.shields.io/badge/-Express-black?logo=express)
![dotenv](https://img.shields.io/badge/-dotenv-8DD6F9?logo=dotenv)
![Nodemon](https://img.shields.io/badge/-Nodemon-76D04B?logo=nodemon)
![Redis](https://img.shields.io/badge/-Redis-DC382D?logo=redis&logoColor=white)
![Prisma](https://img.shields.io/badge/-Prisma-080A2E?logo=prisma&logoColor=white)
![Postgres](https://img.shields.io/badge/-PostgreSQL-336791?logo=postgresql&logoColor=white)
![AWS S3](https://img.shields.io/badge/-AWS_S3-569A31?logo=amazon-aws&logoColor=white)
![Winston Logger](https://img.shields.io/badge/-Winston_Logger-F05A22?logo=logstash&logoColor=white)

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/auth-service.git
   ```
2. Navigate to the project directory:
   ```
   cd auth-service
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and configure your environment variables.

5. Build the application:
   ```
   npm run build
   ```

## Usage

To start the application, run:

```
npm start
```

For development with auto-reloading:

```
npm run dev
```

## Features

- User registration
- User login
- Session management
- etc.

## Technologies

- Node.js
- Express
- TypeScript
- PostgreSQL
- Prisma
- JSON Web Tokens (JWT)
- bcryptjs

## Project Structure

```
auth-service/
├── docs/              # Project documentation
├── prisma/            # Prisma models and migration files
├── scripts/           # Utility scripts
├── src/               # Main source code
│   ├── config/        # Configuration files
│   ├── controllers/   # Request handlers
│   ├── db/            # Database setup and models
│   ├── docs/          # swagger documentation
│   ├── logger/        # Logging functionality
│   ├── middlewares/   # Middleware for authentication and validation
│   ├── routes/        # API routes
│   ├── schemas/       # Request validation schemas
│   ├── service/       # Business logic
│   ├── types/         # TypeScript types
│   ├── utils/         # Utility functions
│   ├── validators/    # Input validation functions
│   ├── app.ts         # Entry point for the application
│   └── constants.ts   # Application constants
│   └── index.ts       # Starting point of project
├── .env               # Environment variables
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation

```

## Configuration

Create a `.env.development` file in the root directory, copy the [`.env.sample`](.env.sample) file set value according to your environment

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.

## Contact

For any inquiries, please contact:
Jayash Saini
Email: jayashysaini7361@gmail.com
LinkedIn: [Jayash Saini](https://www.linkedin.com/in/jayash-saini-371bb0267/)
