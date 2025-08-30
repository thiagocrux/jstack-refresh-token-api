# JStack's Refresh Token (API)

An API implementation for secure authentication using JWT with refresh token rotation build with Fastify and TypeScript.

For more details on other project components, check out the [web client](https://github.com/thiagocrux/jstack-refresh-token-web).

## Technologies

These are some of the technologies used in this project:

- `axios`: A promise-based HTTP client for Node.js and browsers, supporting request/response interception, automatic JSON transformation, and easy error handling.
- `bcryptjs`: A library for hashing and comparing passwords securely in Node.js.
- `commitlint`: A tool that checks your commits and ensures consistency in version control.
- `dotenv`: A module that loads a `.env` file into `process.env`.
- `eslint`: A linting tool for JavaScript/TypeScript code.
- `fastify/cors`: A Fastify plugin for enabling CORS (Cross-Origin Resource Sharing) in web applications.
- `fastify/jwt`: A plugin for Fastify that adds JWT (JSON Web Token) authentication support.
- `fastify`: A fast and low-overhead web framework for Node.js, designed for building efficient HTTP servers.
- `husky`: A tool for adding Git hooks to automate tasks like linting, testing, or commits in JavaScript/Node.js projects.
- `lint-staged`: Runs linters on Git staged files.
- `node.js`: The JavaScript runtime environment that executes your server-side code and runs the Fastify framework.
- `prettier`: A code formatter.
- `prisma`: A modern, type-safe database toolkit and ORM for Node.js and TypeScript.
- `tsx`: A command-line tool and Node.js enhancement that allows you to execute TypeScript files directly without needing to explicitly compile them to JavaScript first.
- `typescript`: A strongly typed programming language that builds on JavaScript, providing static type checking and modern language features for safer and more maintainable code.
- `zod`: A TypeScript-first schema validation library with static type inference.

_For more information about other dependencies, see the `package.json` file._

## Prerequisites

Before installing and running this project, make sure you have the following:

- **PostgreSQL**: You need to have PostgreSQL installed to run this project.
  - The recommended way is to use Docker for easy setup and management.
  - Alternatively, you can install PostgreSQL directly on your system using your package manager.
- **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org/).
- **Package Manager**: You need a package manager for Node.js. This tutorial uses [pnpm](https://pnpm.io/), but you can use npm or yarn if you prefer.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/thiagocrux/jstack-refresh-token-api.git
```

2. Browse to the project folder:

```bash
cd jstack-refresh-token-api
```

3. Install dependencies:

```bash
pnpm install
```

4. Create a `.env` file in the root of the project and set the environment variables as described below:

```bash
# DATABASE_URL: The connection string for your PostgreSQL database.
# Update <user>, <password>, and <database_name> as needed.
# You may also need to change <host> (default: localhost) and <port> (default: 5432) if your PostgreSQL setup is different.
DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database_name>?schema=public"

# JWT_SECRET: Secret key used for signing JWT tokens.
JWT_SECRET=""

# REFRESH_TOKEN_SECRET: Secret key used for signing refresh tokens.
REFRESH_TOKEN_SECRET=""
```

5. Create the database, the tables and generate the Prisma client

```bash
npx prisma migrate dev
```

## Available scripts

This section describes the available scripts in the `package.json` file and their functionalities.

### Development

- #### `dev`

  Starts the server in development mode, enabling faster builds and live-reloading.

  ```bash
  pnpm dev
  ```

### Production

- #### `build`

  Compiles the application for production.

  ```bash
  pnpm build
  ```

- #### `start`

  Start the server for production from the compiled files.

  ```bash
  pnpm start
  ```

### Git hooks

- #### `prepare`

  Automatically configures Git hooks (via `husky`) before each commit.

  ```bash
  pnpm prepare
  ```

### Prisma

- #### `prisma:generate`

  Generates the Prisma client based on the data model defined in the `schema.prisma` file.

  ```bash
  pnpm prisma:generate
  ```

- #### `prisma:migrate`

  Creates and applies a new database migration based on your Prisma schema changes, resets the database (if needed), and generates Prisma Client. It's used during development to sync your schema with the database.

  ```bash
  pnpm prisma:migrate
  ```

- #### `prisma:studio`

  Opens an interactive web-based GUI (at localhost:5555) to view and edit your database tables directly. It helps you explore and manage data visually.

  ```bash
  pnpm prisma:studio
  ```

## Related links

- [Live #015 - Implementando refresh tokens em APIs Node.js](https://app.jstack.com.br/classroom/lives/implementando-refresh-tokens-em-apis-node-js)

## License

[MIT](https://choosealicense.com/licenses/mit/)
