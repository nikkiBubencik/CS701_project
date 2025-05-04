import { Injectable } from '@angular/core';
import { Review } from '../models/Review';
import { Observable, of } from 'rxjs';
import { ReadingList, ReadingListStorage } from '../models/readingList';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getAllLists(): ReadingListStorage{
    let lists = window.localStorage.getItem('readingLists');
    return lists ? JSON.parse(lists) : {};
  }
  listNameExists(input: string): boolean{
    let lists = this.getAllLists();
    return Object.keys(lists).includes(input);
  }
  getListNames(input?: string): Observable<string[]> {
    let lists = this.getAllLists();
    let result: string[];
    if (!input) { // no input return all lists
      result = Object.keys(lists);
    } else { // only return lists with names including input
      result = Object.keys(lists).filter(name =>
        name.toLowerCase().includes(input.toLowerCase())
      );
    }
  
    return of(result);
  }
  
  
  getReadingList(listName: string): ReadingList {
    let lists = this.getAllLists();
    return lists[listName] || {};
  }

  getListDescription(listName: string): string{
    let list = this.getReadingList(listName);
    return list.description;
  }
  
  addReadingList(listName: string, description: string): boolean{
    const lists = this.getAllLists();
    if(this.listExists(listName)){ //already exists
      return false;
    }
    else {
      lists[listName] = {description: description, books: []};
      window.localStorage.setItem('readingLists', JSON.stringify(lists));
      return true;
    }
  }
  
  updateDescription(listName: string, description: string): boolean{
    let lists = this.getAllLists();
    if(this.getReadingList(listName)){ // list exists
      let listInfo = lists[listName];
      listInfo.description = description;
      window.localStorage.setItem('readingLists', JSON.stringify(lists));
      return true;
    }
    return false;
  }
  deleteReadingList(listName: string): void{
    const lists = this.getAllLists();
    delete lists[listName];
    window.localStorage.setItem('readingLists', JSON.stringify(lists));
  }

  changeStatus(listName: string, bookKey: string, status: string): void {
    const lists = this.getAllLists();
    const books = lists[listName].books;
    books.forEach(book => {
      if (book.book.key === bookKey) {
        book.status = status;
        window.localStorage.setItem('readingLists', JSON.stringify(lists));
        return;
      }
    });
    return;
  }
  
  bookInList(listName: string, bookKey: string): boolean {
    const list = this.getReadingList(listName);
    if (!list || !list.books) {
      return false;
    }
    return list.books.some(book => book.book.key === bookKey);
  }
  
  listExists(listName: string): boolean {
    const lists = this.getAllLists();
    return Object.keys(lists).some(name => name.toLowerCase() === listName.toLowerCase());
  }

  addBookToList(listName: string, book: Book, status: string, authors: string[]): boolean{
    if(this.bookInList(listName, book.key)){
      return false; // book already exists in list
    }
    const lists = this.getAllLists();
    const list = lists[listName];
    list.books.push({book: book, status: status, authorNames: authors});
    window.localStorage.setItem('readingLists', JSON.stringify(lists));
    return true;
  }
  
  deleteBookFromList(listName: string, bookKey: string): void {
    const lists = this.getAllLists();
    const list = lists[listName];
    list.books = list.books.filter(book => book.book.key !==bookKey);
    window.localStorage.setItem('readingLists', JSON.stringify(lists));
  }
    
  getAllReviews(): any{
    const reviews = window.localStorage.getItem('reviews');
    return reviews ? JSON.parse(reviews) : {};
  }
  addUpdateReview(bookKey: string, review: Review): void {
    let reviews = this.getAllReviews();
    reviews[bookKey] = review;
    window.localStorage.setItem('reviews', JSON.stringify(reviews));
  }

  deleteReview(bookKey: string){
    let reviews = this.getAllReviews();
    delete reviews[bookKey];
    window.localStorage.setItem('reviews', JSON.stringify(reviews));
  }

  getBookReview(bookKey: string): Review | undefined {
    let reviews = this.getAllReviews();
    return reviews[bookKey];
  }
    
  clearStorage(): void{
    window.localStorage.clear();
  }
    
}
