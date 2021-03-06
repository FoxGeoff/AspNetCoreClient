# AspNetCoreClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# How to connect to an Asp.Net Core 2.1 Web API Server

## Check: Add in-memory-server
* how-to setup an memory-server for Angular 6.0
* Run: ```npm install angular-in-memory-web-api --save```
* Run: ```ng g service shared/InMemoryData ```
* Run: ```ng g interface interface/blog ```
* Code: in-memory-data.service

## Check: Add message.service
* how-to setup a message service
* Run ```ng g service shared/message --dry-run ```
* Code service

## Check: Add blog.service
* Run ```ng g service shared/blog --dry-run ```
* Code: service

## Check: Add Blogs Component
* Run: ```ng g c blogs --dry-run ```
* Add to app component <app-blog><app-blog>
* Code: html
* Code: blogs component
* Add to app.module:
```
 imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
 )
],

```

 