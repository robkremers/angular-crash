# AngularCrash

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Implementation

- Traversy Media: Angular Crash Course
  - https://www.youtube.com/watch?v=3dHNOWTI7H8&list=PL2JJ4C58058JJPHOsReebVX2SrDVdZoRv&index=2
  - Code:
    - https://github.com/bradtraversy/angular-crash-2021

- $ ng generate component components/header
- Implement styles.css
  - Copied from github, see above.
- $ ng generate component components/button
  - Purpose: reusability.

## Run the application

### The webapp

```shell
# Always use a non-standard port. The standard port 4200 is often used by an official application
$ ng serve --port 4000
```

### The mock database

```shell
# This command is custom and has been defined in package.json; scripts.
$ npm run server
```
