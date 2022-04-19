# Setting Up

## Node.js is required to run this project.

Go to the following url:

### https://nodejs.org/en/download/

Download whichever version suits your computer and run the installer.

Then go into the project directory, and run all sql scripts to create the database.

Go back into the projects main folder, and into the client folder. Run the following command:

### `npm i && npm start`

This will open the projects front-end.

Go back a folder, and go into the server folder. Go into index.js, and on line 10, change the password in the quotes to your local instance of MySQL's password.
Then run the following commands:

### `npm install nodemon`

and then

### `npm run devStart`
