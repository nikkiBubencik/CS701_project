# Reading List Management System

## Project Overview
### Project Overview
The Reading List Management System is a user-friendly Angular web application that helps users manage and track their reading habits. 

### Key features:

- Creating and managing multiple custom reading lists

- Tracking reading progress with status options: Not Read, Reading, and Completed

- Searching for books using real-time data from the Open Library API

- Viewing detailed book information including title, authors, cover, and description

- Leaving and viewing their ratings and written reviews for books

## To Run it in Development Mode

first install dependencies:

> npm install

Then start the development server:

> ng serve

## Running the application

- You can naviagte to the search or reading list pages by clicking on their corresponding links in the header

- Clicking the "Reading List Management" Link in the header will bring you back to the welcome page

### Searching for books

- Once on the Search page type in your search in the input box and click submit

Click on the Book title to navigate to the book detail page

### Seeing book Details

- In Book detail if available the book cover, title, description, and author(s) are displayed

- To add a book to a reading list Click the "Add to reading list" button then choose a list and Add and if successul you will be directed to the reading list

- To rate a book input your rating on a scale from 0 - 5 and any comments you have and press submit

### Seeing all Reading Lists

- You will see your reading lists names and clicking on a name will bring you to a page showing its contents

- To add a new reading list click "Add New List" and input its name and a description and submit or cancel to go back

- Search for a list by typing a list name into the search bar 

### See Reading List Content

- The list name, description, and any books in the list are displayed

- There are buttons to delete the list or edit the list description

- In the table showing the books you can delete a book from a list by clicking the delete button on the left of the table

- CHange the reading status of the book with the dropdown on the right side of the table ( options are "Not Read", "Reading", "Completed")

- Clicking the book title will bring you back to the book detail page

## Built With

- Angular

- LocalStorage

- HTML

- CSS

- Open Library API

## What I Learned
Throughout this project, I gained experience in:

- Implementing Angular routing for smooth navigation between components

- Creating and using Angular services for managing data and API integration

- Building reusable components and custom pipes for cleaner code

- Managing client-side state using LocalStorage
