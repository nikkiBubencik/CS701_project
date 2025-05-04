import { Component } from '@angular/core';
import { BookServiceService } from '../services/book-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthorNamePipe } from '../pipes/author-name.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-search',
  imports: [CommonModule, FormsModule, AuthorNamePipe, RouterLink],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.css'
})
export class BookSearchComponent {
  books: any[] = [];
  query: string = '';

  constructor( private bookService: BookServiceService) {}

  search() {
    if (!this.query) return;

    this.bookService.searchBooks(this.query).subscribe(result => {
      this.books = result.docs;
    });
  }

}
