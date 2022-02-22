Brief Description:
Weather forecast app, is a simple app, which allows users to search for the cities forecast they want to know,
Cards with data of forecast and location appear after search, on card click opens up a more detailed view of the location's forecast,
which shows current weather and the weather for the next 7 days, user actions are sent back/logged to server.
Simple style allows users to easily navigate through the app and the information is easily accessible.
Installation instructions:
Download the provided code from Github, use npm install to install all the dependencies in the front directory and back directory, use npm install two times in these two different categories.
Tutorial:
Input some location you want find forecasts about, up to 5 cards will appear with the location.
Clicking on the locations card will reveal more data about the current and the next 7 days weather info.
Run the back-end server in back directory, configure it to run port 3000, start the server with nodemon start command in terminal.
Decision log: 001.
React was used for the UI off the app, it is nice divide the app into smaller, reusable components.
https://reactjs.org/docs/getting-started.html - Documentation for React 002.
Redux was used for global state management, tried it with react context, but with @redux/toolkit and redux-react, after refactoring the code into redux state management
It is more readable and easier to understand.
https://redux.js.org/ - Redux documentation 003.
Lodash was used for checking if the data was the same to discourage the app from useless re-renders.
https://lodash.com/docs/4.17.15 - Lodash documentation 004.
React-router-dom was used for the routing solution as it is simple to implement and powerful routing solution.
https://reactrouter.com/docs/en/v6 - React-router-rom documentation 005.
React testing library was used for testing the app, as mentioned before, it is already included in the react library, so it saves some memory
instead of downloading another package.
https://testing-library.com/docs/react-testing-library/intro/ - React testing library 006.
Express was used for the back-end solution off the app as it is easy to configure and customize,
allows to define routes based on HTTP methods and URLs.
https://expressjs.com/ - Express documentation 007.
Node-fetch was used for getting the data from API, as of todays date, Node hasn't implemented fetch method.
The solution was Node-fetch as it is really simple and similar to the regular fetch method.
https://www.npmjs.com/package/node-fetch - Node-fetch documentation 008.
Cors is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS - More about what is CORS.
https://expressjs.com/en/resources/middleware/cors.html - CORS documentation 009.
Nodemon was used for the development environment for the backend as it automatically runs the code after saving the changes/code.
https://www.npmjs.com/package/nodemon - Nodemon documentation 010.
Joi was used for the authentification off the incoming data from front-end to back-end to throw errors if the data is invalid
and to skip invalid data from inserting into the database.
https://joi.dev/api/?v=17.6.0 - Joi documentation 011.
Dotenv was used for the glabal variables off the app, API keys, PORT, and environment was stored in the .env file,
to hide the global variables from the users to disallow users to access those variables for malicious or other use cases.
https://www.npmjs.com/package/dotenv - Dotenv documentation 012.
Mongodb node package was used to allow back-end code to communicate with the database.
https://www.npmjs.com/package/mongodb - Mongodb npm documentation 013.  
MongoDb was used for the database solution
https://docs.mongodb.com/ - MongoDb documentation 014.
Postman was used to check if the server works correctly.
https://learning.postman.com/docs/getting-started/introduction/ - Postman documentation 015.
For getting the data off the weather forecasts, Foreca weather API was used.
https://rapidapi.com/foreca-ltd-foreca-ltd-default/api/foreca-weather/ - Foreeca weather documentation 016.
Styled-components were used for styling as it makes adding styles more intuative, simpler as it uses JavaScript syntax and we can use props inside the styles,
but it has downsides, styles are slower because the styles are loaded from JavaScript, and browser can't store the styles file in the cache, so the user has to download more memory from the server
https://styled-components.com/docs - Styled-components documentation
