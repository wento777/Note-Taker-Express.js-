# Note-Taker-Express.js




 ## Description 

- This project was designed as a homework assignment for KU coding bootcamp in Module 11 Challenge, Express.js Challenge: Note Taker


-  Your challenge is to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

- The application’s front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.

- Testing is key to making code maintainable, you’ll also write unit tests for each part of your code and ensure that it passes all of them.


- A major aspect of this challenge was the balance between figuring out which solution made sense and the solution that would be most efficient.

- Make sure to clone the starter code repository and make your own repository with the starter code. Do not fork the starter code repository!

- You are required to submit BOTH of the following for review:
   The URL of the functional, deployed application.

    The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

NOTE


 ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
 
 
 
 ## Installation

  - Make sure to clone the starter code repository and make your own repository with the starter code. Do not fork the starter code repository!

  - Before you start, clone the starter codeLinks to an external site..

  - In order to install inquirer, i used npm i inquirer@8.2.4.

  - The application will be invoked by using the following command: 'npm start'


## Usage

  - This Challenge will combine many of the skills you’ve learned over the last week of this course. To help you get started, we’ve provided some guidelines in addition to the User Story and Acceptance Criteria.

  - The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.

  - The following HTML routes should be created:
      GET /notes should return the notes.html file.
      GET * should return the index.html file.

  - The following API routes should be created:
      GET /api/notes should read the db.json file and return all saved notes as JSON.

      POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).


  


## User Story


AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Acceptance Criteria

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column


## Tests

  none

 
  # The URL of the functional, deployed application in Heroku
  
  * https://calm-waters-12389.herokuapp.com/
  

  # This project has been deployed to GitHub, here is the link:

  *  https://github.com/wento777/Note-Taker-Express.js-
  
  # Note-Taker-Express.js Screenshots
  
  * ![Screenshot (6)](https://user-images.githubusercontent.com/70625665/222879221-9ffe786e-2dd8-45bf-b587-72a07693d59a.png)

 * ![Screenshot (7)](https://user-images.githubusercontent.com/70625665/222879231-3deeda82-c442-480d-a7b5-a7c78565d2e2.png)

*![Screenshot (8)](https://user-images.githubusercontent.com/70625665/222879246-15a14498-5d26-4b95-a15f-90e9e83dc0b6.png)


## Summary

Your challenge is to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.




## Author
 * ANDREI FLOREA - Initial work - Git Hub Profile
 * Challenge 11 |   Express.js Challenge: Note Take
