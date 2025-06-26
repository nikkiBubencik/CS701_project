# Reading List Management System

## Project Overview
CS 701 Term Project

A full-featured Angular web application for organizing, tracking, and reviewing your personal reading lists. Built with Angular, the Open Library API, and localStorage, this project showcases key front-end development skills such as API integration, routing, reusable components, and responsive UI.

[Live Link](https://nikkibubencik.github.io/CS701_project/)

### Key features:

- **Multiple Reading Lists:** Create and manage custom lists with descriptions

- **Book Search:** Search the Open Library API for books by title or keyword

- **Book Details:** View rich metadata including title, authors, cover image, and description

- **User Reviews:** Leave personal ratings (0–5) and written reviews

- **Reading Status Tracking:** Set reading status to Not Read, Reading, or Completed

- **List Management:** Edit list descriptions, delete lists, and remove books from lists

## Tech Stack

- Angular (Routing, Components, Services, Pipes)

- LocalStorage

- HTML

- CSS

- Open Library API

## What I Learned

- Building and routing complex Angular applications

- Creating reusable components and custom pipes

- Managing persistent state with localStorage

- Integrating and handling data from external APIs (Open Library)
  
- Improving UI/UX with dynamic components and form validation


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

- Click on the Book title to navigate to the book detail page

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

