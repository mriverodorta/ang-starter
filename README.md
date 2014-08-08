ang-starter
===========

Angular start point for medium and large applications.

This project is an starting point for develop an AngularJS application. You can use it for medium and long range applications.

Inside this project live a sample application with an app structure thought for large ammount of code.
The application itself doesn't do much, just give a boilerplate of configuration files and wire it all together.

Getting Started
===========
To get you started you simply clone this repository and install the dependencies with bower
I changed the bower components folder to inside the app directory through the .bowerrc file to make ir accesible to the application on the server.

###Clone ang-starter
```
git clone https://github.com/mriverodorta/ang-starter.git
cd ang-starter
```

###Install Dependencies
This project only depends on angular and angular-route packages to get them you can use bower
```
bower install
```

###Directory Layout
```
├── app                                 --> All of the application files
│   ├── css                             --> Css files for the application
│   │   └── app.css                     --> Application main style
│   ├── img                             --> Images folder
│   ├── index.html                      --> Application index
│   ├── js                              --> Application javascript code
│   │   ├── app.js                      --> Application deffinition
│   │   ├── Config                      --> Application config folder
│   │   │   ├── Bootstrap.js            --> Application bootstrap
│   │   │   ├── Constants.js            --> Application Constants
│   │   │   ├── HTTP.js                 --> Application Http configuration
│   │   │   ├── Packages                --> Application packages configuration folder
│   │   │   ├── RequestInterceptor.js   --> Application Request Interceptor
│   │   │   ├── ResponseInterceptor.js  --> Application Response Interceptor
│   │   │   ├── Routes.js               --> Application Routes
│   │   │   └── Security.js             --> Application Security config
│   │   ├── Controllers                 --> Application Controllers folder
│   │   │   ├── AboutCtrl.js            --> Application controller for about page
│   │   │   ├── ContactCtrl.js          --> Application controller for contact page
│   │   │   └── HomeCtrl.js             --> Application controller for home page
│   │   ├── Directives                  --> Application Directives folder
│   │   │   └── year.js                 --> Application Sample Directive
│   │   ├── Filters                     --> Application Filters folder
│   │   │   └── word.js                 --> Application Sample filter
│   │   ├── Models                      --> Application Models folder
│   │   │   └── Crud.js                 --> Application Sample model
│   │   ├── Services                    --> Application Services folder
│   │   │   └── Auth.js                 --> Application Sample service
│   │   └── test.js                     --> Tests
│   └── partials                        --> Application Partials folder
│       ├── about.html                  --> Application about partial
│       ├── contact.html                --> Application contact partial
│       └── home.html                   --> Application home partial
├── bower.json                          --> Application dependencies
├── LICENSE                             --> Application Licence (MIT)
├── README.md                           --> Application this file
└── test                                --> Application Tests folder
```

###Serving files
To serve the application you just need the app directory for production.

###Contact
For any question ask me at mriverodorta@gmail.com, or open an issue, be free to fork or use this project for any application you need to develop.