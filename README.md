# Tindev

- Login/Register ![Preview-Screens](https://github.com/YagoLopes/tindev/blob/master/doc/assets/img/tindev1.png)

- Feed ![Preview-Screens](https://github.com/YagoLopes/tindev/blob/master/doc/assets/img/tindev2.png)

If you want to take a look on all screens of the App, they are [here](https://w5bcg.csb.app/).

## About this Project

The idea of the App is:

_"Tinder-like app for developers"._

## Why?

This project is part of my personal portfolio, so, I'll be happy if you could provide me any feedback about the project, code, structure or anything that you can report that could make me a better developer!

Email-me: yagolopeslazaro@gmail.com

Connect with me at [LinkedIn](https://www.linkedin.com/in/yago-lopes-l%C3%A1zaro-917536140/).

Also, you can use this Project as you wish, be for study, be for make improvements or earn money with it!

It's free!

## Some Observations about this App

- Run backend is required
- Run MongoDB is required
- To make your application run smoothly, install the docker container and the docker-compose orchestrator
- Login/Register with github user.
- Register more than one user in the application

### Installing

- I chose to use docker-compose in order to minimize application execution failures, if you choose not to use it, you will have to have a url from a mongo bank, and set it in **\*backend/src/index.js[mongoose.connect (" URL ")]**

**Cloning the Repository**

```
$ git clone https://github.com/YagoLopes/tindev

$ cd tindev
```

**Installing dependencies**

```
$ cd frontend
```

```
$ yarn
```

_and_

```
$ cd ../backend
```

```
$ yarn
```

### Running

With all dependencies installed and the environment properly configured, you can now run the app:

Install Docker [here](https://docs.docker.com/install/)

Install Docker Compose [here](https://docs.docker.com/compose/install/)

Run

```
$ docker-compose up --build
```

## Expose

Front-end port: http://localhost:3000
Back-end port: http://localhost:4000
Database port: http://localhost:27017

## Contributing

You can send how many PR's do you want, I'll be glad to analyse and accept them! And if you have any question about the project...

Email-me: yagolopeslazaro@gmail.com

Connect with me at [LinkedIn](https://www.linkedin.com/in/yago-lopes-l%C3%A1zaro-917536140/)

Thank you!

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/YagoLopes/tindev/blob/master/LICENSE) file for details
