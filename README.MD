Express.js API Example
This project is a simple RESTful API built using Express.js. It demonstrates basic CRUD operations and middleware functionality. The API provides random motivational messages, user management, and allows updating user IDs.

Features
Welcome Route: A main route (/) that returns a welcome message.
Random Messages: A route (/grt) that sends a random motivational message from a predefined array.
User Management:
Get Users: Fetches a list of users from the users module.
Delete User: Deletes a user by ID from the users array.
Update User ID: Updates the ID of a specified user based on the provided name and new ID.
Post Users: Returns a list of posts related to users from the posts module.
Middleware
The application includes a simple middleware function that logs a welcome message for each request.

Setup
Clone the repository.
Install dependencies using npm install.
Run the application with node app.js.
Access the API at http://localhost:3000.
Usage
GET /: Returns a welcome message.
GET /grt: Returns a random motivational message.
GET /users: Returns a list of users.
DELETE /user/:id: Deletes a user by ID.
POST /user: Posts user data.
PUT /update_id: Updates a user's ID.
This API can be expanded with additional features and improved error handling as needed.