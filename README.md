
# FilmKu

FilmKu app brings details of movies from IMDB APIs.




## Run Locally

Clone the project

```bash
  git clone https://github.com/SundaramSrivastava/FilmKu
```

Go to the project directory

```bash
  cd FilmKu
```

Install dependencies

```bash
  npm install && cd ios && pod install && cd ../
```

Create APP_SECRETS.js file in root directory and copy the below and add API_KEY

```bash
  const APP_SECRETS = {
    API_KEY: 'xxxxxxxxxxxx'
   } 

    export default APP_SECRETS
```

Run it Locally on Android

```bash
  react-native run-android
```
## APP USAGE

App automatically creates registers new users. Directly enter your
email id and password.

For signing out press the account icon on app header and press
logout button.

