# nodeAPIStarter
node API starter kit including login/registration with mongodB as database including the full structure with project helpers and routing 
## Requirements
- Mongodb
- node and npm
- VS Code (or any other)
- Postman or other (to test API's)

## Installation

- Pull or clone
- do `npm install`
- make sure mongodb is installed and running 
- I have used 'nodemon' so run the command `npm start`
- Wait for the server running message
- Your API dev server is now running successfully 

## API testing

- Open new tab in Postman 
- Run a POST request `localhost:3030/users/signup`
- Under Body -> x-www-form-urlencoded

-- Add key/values
name:Shubham Agarwal
age:24
email:shubham-agarwal1@abcd.co.in
password:zxc

Hit enter and your registration will be successfull

Other than this there is one more API login- `localhost:3030/users/login`
