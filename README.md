<p align="center"> This is api server sample which built by Nest framework and developed by lapson.</p>

<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://paypal.me/lapsonwor" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository. This api server sample built by Nest framework and developed by lapson.

## Program Structure

```bash
src
│── common /* Common function and constants */
├── config /* Server config file. */
│── database /* Database migration files and seed files */
└── modules /* All server functions and modules */
    │──xxx/module.ts /* Responsible for define the import, controllers, providers and exports for this module*/
    │── xxx/controller.ts /* Responsible for handling route and forwarding to the service. */
    │── xxx/repository /* Responsible for define the function of getting data from database and return the result. */
    │── xxx/service.ts /* Responsible for implement the api logic and data operation. */
    └── entities /* Responsible for define the model of the data structure for Typeorm. */
```


## Installation

```bash
$ npm install
```

## Running the app

```bash
# data migration to PostgreSQL
$ npm run migration:run

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## License

This sample is [MIT licensed](LICENSE).
