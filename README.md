# Sample app for js-embedded-platform
This project contains an example of app for js-embedded-platform. The content of file [index.js](src/app/index.js)
may be deployed to connected devices.

To start the server which will be able to communicate with devices, you need to have [`yarn`](https://yarnpkg.com/lang/en/) and [`Node.js`](https://nodejs.org/en/) installed. If you fulfill those requirements, just execute the following command in the project's root directory:
```bash
  yarn start
``` 

If you want to change some options (for example listening port, source file to be sent to client), you can view the available options using the command:
```bash
  yarn start -h
```


That command starts required servers, which will handle the communication with supported devices. If the server is running and there is no error, you can use the web application to interact with clients whose source files are located in [this repository](https://github.com/Elrohil44/js-embedded-platform-web).

For now there are two ways to achieve that:
1. Follow the instructions in mentioned repository and run webserver on your local host.
2. Visit [that page](https://elrohil44.github.io/js-embedded-platform-web/home). This way, however, does not work in every browser. If you are using Firefox, you will need to perform the following steps:
  * open about:config page
  * set the property `network.websocket.allowInsecureFromHTTPS` to `true`
  
