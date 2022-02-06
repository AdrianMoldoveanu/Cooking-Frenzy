# Cooking Frenzy


# Description

- A full stack CRUD application that allows users to register and log in to create, edit, update and delete recipes.

- This application uses Python on the back-end with the Flask web framework, and uses MongoDB for the database.

- For the front-end it uses Materialize with some custom CSS.

- Built for Milestone Project 3 in the Full Stack Software Development Course at Code Institute for the Data Centric Development module.

- The live project can be viewed [here](https://cooking-frenzy.herokuapp.com/).


# UX
 
- This application was built to allow users create and share recipes, as well as updating and deleting them as necessary. 

- The application provides a registration page for new users to register on the site, and a log in page to sign in after they have registered. 

- Any visitor can browse the recipes created on the site but only logged in users can add, edit and delete recipes.

- The search feature offers searching by category, recipe name, ingredients or author.



# User Stories

As a user I can:

- Navigate through the site with ease by using the navbar or the footer.

- See all recipes without being a registered user.

- Register as a user on the site.

- Log in to the site once registered.

- Have a Profile page where I can see only my recipes.

- Add new recipes to the site (when logged in).

- Edit recipes I create on the site (when logged in).

- Delete any recipes I created on the site (when logged in).

- View a list of recipes stored on the site.

- Search the list of recipes by a recipe name.

- Search the list of recipes by category name.

- Search the list of recipes by ingredients.

- Search the list of recipes by author.

- Click on a recipe to see information about the recipe.

- See the ingredients for a selected recipe.

- Read the method for preparing the recipe.

- Add images to created recipes.

- Contact the site owner through email

- Find the socials in the footer.



 # Features
 
 ## Existing Features

 ## Feature 1  

- The **User Registration and User Login** feature hashes user passwords so user's passwords are not stored in the application database as simple text strings as they are entered by the user when registering. 

- This means that even by viewing the database documents you will not be able to see a user's password. The Registration form and Login forms use a lot of HTML validation including Regex pattern detection to ensure that usernames and password etc are all entered in the correct format. 

- These forms also provide dynamic helper text to let a user know if there are any problems with anything they have entered in one of the fields, or if everything is ok. 

- Usernames also have to be unique and the application will check through the database to ensure usernames aren't already taken before a new user can be registered.


## Feature 2  

- **User Authorisation** built within the application ensures that visitors to the site cannot access URL routes for adding, updating or deleting recipes and will be redirected to the Login page if any of these URLs are entered in the browser address bar. 
  
- Also, once a user is logged in they will only be able to Edit/Update or Delete recipes only created by them alone. They will not be able to do the same to recipes created by other users. 
  
- The option to log out of the site is available to users who are logged into an active session.


## Feature 3 

- The feature for **Adding Recipes** will be available for users who are logged in and is accessed by the 'New Recipe' button in the top right-hand corner of the UI. 
  
- The user can add an image url which will display the image (high resultion images are recommended)

- The user will add a recipe name.

- The user will second a preset category from the dropdown.

- The user will start adding ingredients. The ingredients need to be added one by one n separate fields with the help of the 'Add ingredient' button which will be saved in an unordered list.

- The user will then add preparation steps. Same as ingredients they need to be added one by one with the help of 'Add step' button which will be saved in an ordered list.

- The final step is submitting the form by clicking the 'Add recipe' button at the bottom of the form.


## Feature 4 

- When **Searching Recipes** in the application a user can search recipes by recipe name, ingredients, categories or author name.


## Feature 5 

- **Contact the site owner** can be done through the contact form which can be found in the links section in the footer.

- The form will take the name and email of the user and a message which will be received by the site owner.


## Feature 6 

- When the use is on their **Profile** they can see all the recipes they created.


## Feature 7

- **Responsive** on all devices and browsers.



## Admin Features

## Feature 1
- Admin can add new categories.

- A ' Manage Categories' option will apear in the navbar if the admin is login.

- The form will consist of a field that requires the new category name.

- The category will be created when the submit button is clicked.


## Feature 2

- Admin can delete and edit any recipe without having to be the user that created the recipe.

- If an issue with a recipe is reported through the contact form the admin will be able to investigate and take the recipe down if necessary.



## Future Features

- Feature 1 - A User Dashboard where they can edit their own user details or change their password.

- Feature 2 - A password reset feature would be a useful feature to be built that will allow a user to reset their password when they unfortunately forget the password they entered when they registered to use the application.

- Feature 3 - Users to be able to like other users recipes.

  Maybe eventually a rating system based on scale form 1 - 10.

- Feature 4 - Add a cooking utensils section from which users can purchase desired utensils and the site owner can get a percentage of the sales.

- Feature 5 - Users can share recipes on social media.



# Technologies Used

Languages, frameworks, libraries, and any other tools used to construct this project. 

- [HTML 5](https://en.wikipedia.org/wiki/HTML5)
    - This project uses **HTML** to structure the content of the website.
- [CSS 3](https://en.wikipedia.org/wiki/CSS)
    - The project uses **CSS** to add additional styling to the site and refine responsive beahviour using media queries.
- [Materialize](https://materializecss.com/)
    - This project uses **Materialize** to provide the front-end grid framework and support responsive behaviour.
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
    - The project uses **JavaScript** to add and remove content dynamically and to initialise Materialize components.
- [jQuery](https://jquery.com/)
    - This project uses **jQuery** to assist in making asynchronous requests for and also to simplify DOM node selection and manipulation.
- [Python](https://www.python.org/)
    - This project uses **Python** as the server-side programming language to provide back-end logic and serve dynamic web pages to the browser.
- [Flask](http://flask.pocoo.org/)
    - This project uses **Flask** as the back-end framework to simplify configuration of the application and routing, to render HTML templates, work with client requests  and to assist with user session management.
- [Flask-PyMongo](https://flask-pymongo.readthedocs.io/en/latest/)
    - This project uses **Flask-PyMongo** to connect the application to MongoDB and for retrieving, inserting, updating and deleting data to and from the database.
- [MongoDB](https://www.mongodb.com/)
    - This project uses **MongoDB**, and more specifically MongoDB Atlas, as it's database system used to store data about users and recipes.



# Testing

This project was developed incrementally with continuous use of `console.log` statement in JavaScript and the `print()` function in Python to repeatedly check the changes made in the application and to ensure all changes to source code were providing the desired outcome in the browser. The site was build using Google Chrome browser  and then later tested in other browsers: FireFox and Edge.

This project was tested for responsiveness using the Chrome Developer Tools mobile device simulator. It was also viewed on physical Samsung Galaxy A5 (2017) mobile device to ensure good responsive behaviour. The site was also tested in Mozilla Firefox  and Microsoft Edge  browsers to ensure appearance and functionality of the site was as expected across all 3 of these browsers.

### HTML and CSS files

All of the following files were checked using the W3C Validation Tool [here](http://validator.w3.org), and both HTML and CSS files passed without error:

- Home Page  [View](static/testing/recipes.PNG)

- Log In Page [View](static/testing/login.PNG)

- Register Page [View](static/testing/register.PNG)

- Add Recipe Page [View](static/testing/add_recipe.PNG)

- Edit Recipe Page [View](static/testing/edit_recipe.PNG)
  
  - A number of 3 errors were found upon validation regarding the ingredients and recipe method appearing as duplicates.

  - The fix would be to modify the database and add fields for each ingredient and preparation step.

  - Although it does not break the functionality, it would be something I will work on to fix.

- Manage Categories Page [View](static/testing/manage_categories.PNG)

- Add Category Page [View](static/testing/add_category.PNG)

- CSS validation [View](static/testing/css.PNG)

### JavaScript

The JavaScript part of the website was tested using Beautify Tools [here](https://beautifytools.com/javascript-validator.php) and no errors have been found:

- JavaScript validation [View](static/testing/js.PNG)

### Python 

For validating python code I have used PEP8 Online [here](http://pep8online.com/) and no errors have been found:

- Python Code validation [View](static/testing/python.PNG)

- There are a number of forms used on this application to accept user input including the login form, signup form, search and filter forms on the recipe list page and on the add and edit recipe pages. 

- Various forms and levels of HTML validation has been used on form inputs to verify inputs to each form field. These forms were tested while being developed to ensure that the validation was having the desired effect and providing the desired outcome.

## Further Testing

### Manual Testing buttons and links

- All buttons and links are vissible to the user and they appear to be working consistently on every page of the site [here](static/testing/manual_home_page_navbar.png) [here](static/testing/manual_home_page_footer.png)

### Testing all pages of the site

#### Home page

- The home page welcomes the user with a message to create an account if they wish to add their own recipes and it displays all available recipes [here](static/testing/manual_home_page_navbar.png)

- On log in the message dissapears as it served its purpose.

#### Log In / Register

- The Log In form displays correctly [here](static/testing/manual_login.png)

- The Register form displays correctly [here](static/testing/manual_register.png)

#### Recipe card

- Recipes are display in a card which contains the recipe image and a collapsible section with the recipe details [here](static/testing/manual_recipe_card.png) 

#### New recipe

- After registering the user can add their own reipes.

- To do this they can navigate to 'New Recipe' page in the navbar.

- The add recipe form will be displayed with the required fields [here](static/testing/manual_new_recipe.png)

- To add a new ingredient or step the user needs to click on 'add ingredient' or 'add step' buttons and a new field will appear for each click.

- To remove an ingredient or a step the user can click on 'Remove ingredient' or 'Remove step' buttons which will populate under each corresponding field.

- The maximum number of ingredients is 20.

- The maximum number of steps is 20.

- On reaching that number the user cannot add any more fields.

- A note was added under the  Recipe Image field to guide users on the image upload process.

- All fields are mandatory and require a minimum number of characters.

- After completing all the fields the user can click on add recipe button which will add the recipe in all recipes and the user's profile page

#### Edit Recipe

- The user can edit or delete a recipe by going on their recipe and click the edit or delete buttons at the bottom of the card [here](static/testing/manual_recipe_card.png) 

- On Edit recipe the edit recipe form will be displayed and the user can change all the fields previously completed.

- The form can be submitted via the submit button at the bottom or canceled by the cancel button at the bottom.

#### Profile 

- Every user has a profile page located in the navbar that will display the users name and the recipes they created [here](static/testing/manual_profile.png) 

#### Search

- The search bar is available on the recipes page for users to search by recipe name, ingredients, category and author.

- In this example we look for breakfast category [here](static/testing/manual_search1.png)

- On clicking search only the recipe in breakfast category is displayed [here](static/testing/manualk_search_results.png)

- If the search cannot find any results a 'No results found' message will be displayed.

#### Manage Categories Admin only

- The admin has a special page called manage categories [here](static/testing/manual_manage_categories.png) 

- A list of categories will be displayed which can be edited or deleted.

- To add a new category the add category button will be clicked which will lead to a form [here](static/testing/manual_add category.png)

- After submit the new category will be displayed in the list and available to select for the users when adding a new recipe.

#### Mongo Database

- The collection has three parts: categories, recipes and users [here](static/testing/db_collection.PNG)

- The categories take a unique id with a category_name input [here](static/testing/db_categories.PNG)

- The recipes have their own document which takes six inputs for: recipe_image, recipe_name, category_name, recipe_ingredients, recipe_method and created_by [here](static/testing/db_recipes.PNG)

- The users have each a unique id and take two fields : username and password [here](static/testing/db_users.PNG) (Details have been scribbled for security reasons)

# Design 

## Colour Scheme
           
- The two main colours used are black for text and materialize green accents to impact better with the background image and site goal.
       
## Typography

- Poppins with fallback on Sans Serif is the main font used throughout the website. I find it both attractive and appropiate.

## Imagery 

- As a background image I choose a background with vegetables and chopping board to make the site goal clear from the first seconds.

- For the image I choose clean pictures with enough resolution to not appear pixelated on any screen size.
         

# Wireframes

- Home Page/Recipes Wireframe - [View](static/wireframes/homepage.png)

- Log In/Register Page  Wireframe - [View](static/wireframes/login_register.png)

- New Recipe Page Wireframe - [View](static/wireframes/New_recipe.png)

- Edit Recipe Wireframe - [View](static/wireframes/Edit_recipe.png)

- Profile Page Wireframe - [View](static/wireframes/profile.png)
     
- Contact Page  Wireframe - [View](static/wireframes/contact_form.png)

     
# Deployment

## GitHub Pages

 The project was deployed to GitHub Pages using the following steps...

 1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
 2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
 3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
 4. Under "Source", click the dropdown called "None" and select "Master Branch".
 5. The page will automatically refresh.
 6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

 By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

 1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
 2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
 3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

 1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
 2. Under the repository name, click "Clone or download".
 3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
 4. Open Git Bash
 5. Change the current working directory to the location where you want the cloned directory to be made.
 6. Type `git clone`, and then paste the URL you copied in Step 3.
 
 ```
 $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
 ```

 7. Press Enter. Your local clone will be created.

 ```
 $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
 > Cloning into `CI-Clone`...
 > remote: Counting objects: 10, done.
 > remote: Compressing objects: 100% (8/8), done.
 > remove: Total 10 (delta 1), reused 10 (delta 1)
 > Unpacking objects: 100% (10/10), done.
 ``` 

## Heroku

This project was then deployed to Heroku to host the live application, following the steps below:

1. Log in to [Heroku](https://www.heroku.com/) and create a new app called 'the-open-cookbook'

2. Log in to Heroku in the CLI

3. Add the remote Heroku repo

4. Create the requirements.txt file by running `pip3 freeze --local > requirements.txt` in the CLI

5. Create a Procfile by running `echo web: python run.py > Procfile` in the CLI

6. Start a web process on Heroku by running `heroku ps:scale web=1` in the CLI

7. Set environment variables in Heroku for IP, PORT and MONGO_URI

8. Restart all dynos on Heroku

The live project can be viewed [here](https://cooking-frenzy.herokuapp.com/).


# Credits

- The skeleton for this project is Tim Nelson's Task Manager project from the mini project section of the course (Thank you, Tim!)

- For the fonts I used Google Fonts [View](https://fonts.google.com/)

- For the navbar,footer and colours I used code from Materialize [View](https://materializecss.com/)

- For the background image I used Google Images and found the image which was downloaded from [View](https://wallpapersafari.com/foodservice-backgrounds/)

- To add ingredients and steps dynamically I used Sanwebe tutorial [View](https://www.sanwebe.com/2013/03/addremove-input-fields-dynamically-with-jquery)

- For more clarification on the process I used Kes2401 milestone project [View](https://github.com/Code-Institute-Submissions/online-cookbook-4)


# Acknowledgements

- A special thank you for my girlfriend for support in helping with testing and UX input and just general and moral support :)

- Tim Nelson for the amazing mini project which actually taught me how to use Python and Jinja in particular.



