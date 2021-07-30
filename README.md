# Demo URL

https://tk-messanger-app.herokuapp.com/

# Messanger Application

This application will be using React, Material-UI, React-Router, Node, & Express.js.

## Setting up .env file

To Connect to your local database, set the variable MONGODB_URL to your local path  
You should also set a PORT variable of your desired PORT number. Default is 3001.
Next, set up SECRET variable to use for signing tokens for logins.

Example:

MONGODB_URL="mylocaldatabase.example"  
PORT=3001
SECRET="hatchways"

## Connecting to the Database Server

Install required packages by running "npm install".
Then simply run command "npm run dev"

## Setting up .env file for Testing purposes

When running a test, please ensure that the variable TEST_MONGODB_URL is properly set to your local testing database.

Example:

TEST_MONGODB_URL="testlocaldb.example"