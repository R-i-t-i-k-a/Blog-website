# Blog Post App

This is a simple blog post application built using Express.js and MongoDB. It allows users to create, view, and delete blog posts.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- Express.js
- body-parser
- MongoDB

## Installation

1. Clone the repository or download the code files.
2. Open a terminal and navigate to the project directory.
3. Install the dependencies by running the following command:

   ```
   npm install
   ```

## Usage

1. Start MongoDB by running the following command:

   ```
   mongod
   ```

2. Start the server by running the following command:

   ```
   node app.js
   ```

3. Access the application by opening a web browser and entering the following URL:

   ```
   http://localhost:3000
   ```

   This will open the home page where you can view existing blog posts and create new ones.

4. Navigate to the "Compose" page by clicking the "Compose" link. Here, you can enter a title and content for your blog post.

5. After entering the post details, click the "Publish" button to create the blog post.

6. To view a specific blog post, click on the post title from the home page. This will open the post page where you can see the full content of the post.

7. To delete a blog post, click the "Delete" button at the bottom of the post page.

## Project Structure

- The project uses Express.js as the web application framework.
- The MongoDB connection is established using the `mongoose` package.
- The blog post data is stored in a MongoDB database.
- The project follows the MVC (Model-View-Controller) pattern:
  - The `blogSchema` defines the structure of the blog post data.
  - The `Post` model represents the MongoDB collection for blog posts.
  - The views are rendered using the EJS (Embedded JavaScript) template engine.
  - The routes handle the different HTTP requests and interact with the database.
  - The `app.js` file sets up the Express.js application and defines the routes.

## Customization

You can customize the application by modifying the EJS templates (`home.ejs`, `about.ejs`, `contact.ejs`, `compose.ejs`, and `post.ejs`) to change the appearance and structure of the pages. Additionally, you can modify the CSS styles in the `public` directory to further customize the visual aspects.

## Contributing

Contributions to this project are welcome. Feel free to fork the repository and submit a pull request with your improvements.
