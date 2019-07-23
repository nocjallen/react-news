# React News

React News is a [React](https://reactjs.org/) application, created with [Create React App](https://github.com/facebook/create-react-app) and [Bootstrap](https://getbootstrap.com/), which aggregates news, weather, and stock market information.

## API Keys

React News utilizes the following APIs.

[News API](https://newsapi.org/)

[OpenWeatherMap](https://openweathermap.org/api)

[IEX Cloud](https://iexcloud.io/docs/api/)

Each of these APIs offers a free developer tier which you will need to sign up for. Once you obtain your API keys, save them to `/src/api.json` using the following format.

```json
{
    "iexKey": "youriexkey",
    "newsKey": "yournewskey",
    "weatherKey": "yourweatherkey"
}
```

## Running React News

From the root of the project directory, run `npm start` to run the application in development mode and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Refer to the [Create React App](https://github.com/facebook/create-react-app) documentation to build a production version of this application.