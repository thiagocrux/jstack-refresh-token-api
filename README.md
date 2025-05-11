# JStack's Refresh Token (API)

An API implementation for secure authentication using JWT with refresh token rotation build with Fastify and TypeScript.

For more details on other project components, check out the [web client](https://github.com/thiagocrux/jstack-refresh-token-web).

## Technologies

These are some of the tecnologies used in this project:

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
- `prettier`: A code formatter.
- `prisma`: A modern, type-safe database toolkit and ORM for Node.js and TypeScript.
- `tsx`: A command-line tool and Node.js enhancement that allows you to execute TypeScript files directly without needing to explicitly compile them to JavaScript first.
- `zod`: A TypeScript-first schema validation library with static type inference.

_For more information about other dependencies, see the `package.json` file._

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

```
pnpm install
```

4. Create a `.env` file on the project's root and set the environment variables updating the `user`, `password` and the `database_name` on the `DATABASE_URL` variable. It may be necessary to update the hostname (localhost) and database port (5432) if your Postgres installation is configured differently. It is also necessary to set the `JWT_SECRET` and the `REFRESH_TOKEN_SECRET` variables so the authentication works correctly.

```JavaScript
DATABASE_URL="postgresql://user:password@localhost:5432/database_name?schema=public"
JWT_SECRET=""
REFRESH_TOKEN_SECRET=""
```

5. Generate the Prisma client

```
npx prisma generate
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

## Useful links

- [Live #015 - Implementando refresh tokens em APIs Node.js](https://app.jstack.com.br/classroom/lives/implementando-refresh-tokens-em-apis-node-js)

## License

[MIT](https://choosealicense.com/licenses/mit/)
