# Demo URL

https://tk-messanger-app.herokuapp.com/

If you do not wish to create an Account, feel free to use the ones below. The best way to test this application is to open two windows and log in to two separate accounts.

#### Dummy Accounts
Email: thomas@gmail.com
Password: thomas123

Email: cheng@gmail.com
Password: cheng123

# Messanger Application

This is a fullstack application built using React with MaterialUI for Frontend and Node.js/Express for Backend. 
For database, I used MongoDB Atlas for cloud storage. 

![Register Page](https://github.com/Tony-Kim09/messenger-app/blob/dev/imgs/MessengerRegisterPage.PNG)

New users can register using this simple and intuitive register page. Validations are used to ensure the values are valid, such as minimum length for password or proper email format. If any of these values are invalid, an error message with helper texts will appear, assisting users to fill in the values correctly. 

![Invalid Input](https://github.com/Tony-Kim09/messenger-app/blob/dev/imgs/InvalidInput.PNG)

After logging in, users can click on any existing users on the left hand side to begin chatting with them. To test it out, I recommend opening two separate browsers for the real time chatting experience. 

![Chat Page](https://github.com/Tony-Kim09/messenger-app/blob/dev/imgs/ChatPage.PNG)

This application is mobile responsive to ensure users can fully experince the app regardless of the device they are using. 

![Mobile Responsive](https://github.com/Tony-Kim09/messenger-app/blob/dev/imgs/MobileResponsive.PNG)

You can also update profile picture with few simple clicks and will be stored using GridFS storage and MongoDB.

![Mobile Responsive](https://github.com/Tony-Kim09/messenger-app/blob/dev/imgs/updateProfilePic.PNG)

I have thoroughly tested the backend to ensure the APIs are properly functioning using Mocha/Chai.

![BackEnd Test](https://github.com/Tony-Kim09/messenger-app/blob/dev/imgs/backendUnitTest.PNG)

Finally, I have also integrated End to End testing using Cypress to make sure the front-end can properly communicate with the back-end.

![E2E Test](https://github.com/Tony-Kim09/messenger-app/blob/dev/imgs/messengerCypress.PNG)

## Setting up .env file

To Connect to your local database, set the variable MONGODB_URL to your local path  
You should also set a PORT variable of your desired PORT number. Default is 3001.
Next, set up SECRET variable to use for signing tokens for logins.

Example:

MONGODB_URL="mylocaldatabase.example"  
PORT=3001
SECRET="hatchways"

## Starting the application

Choose the server directory in the terminal. 
Install required packages by running "npm install".
Then simply run command "npm run dev"

## Setting up .env file for Testing purposes

When running a test, please ensure that the variable TEST_MONGODB_URL is properly set to your local testing database.

Example:

TEST_MONGODB_URL="testlocaldb.example"