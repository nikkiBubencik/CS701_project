import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../services/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ReviewComponent } from '../review/review.component';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-book-detail',
  imports: [CommonModule, ReviewComponent],
  standalone: true,
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit{
  book: any = {};
  authorNames: string[] = [];
  addToList: boolean = false;
  lists: string[] = [];

  constructor (private bookService: BookServiceService,
              private storageServicce: StorageService,
              private route: ActivatedRoute,
              private router: Router
  ) {}

  addToListToggle(){
    this.addToList = !this.addToList;
    if(this.addToList){ // get listNames from localStorage
      this.storageServicce.getListNames().subscribe(result => this.lists=result);
    }
  }

  submitAddToList(list: string): void{
    // add book to localstoarge under that reading list
    let result = this.storageServicce.addBookToList(list, this.book, "Not Read", this.authorNames);
    if(result){
      this.router.navigate(['/readingList', encodeURIComponent(list)]);
    }
    else{
      alert("Error Book may already be in list");
    }
  }
  
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id) {
      this.bookService.getBookDetails(id)
      .pipe(
        catchError(error => {
          console.error('Invalid book ID or network error:', id, error);
          this.router.navigate(['/error']);
          return of(null); 
        })
      )
      .subscribe(result => {
        if (typeof result.description === 'object' && result.description?.value) {
          result.description = result.description.value;
        }
        this.book = result;
        if (this.book.authors) {
          this.book.authors.forEach((authorObj: any) => {
            const authorKey = authorObj.author?.key;
            if (authorKey) {
              this.bookService.getAuthorName(authorKey).subscribe(authorData => {
                this.authorNames.push(authorData.name);
              });
            }
          });
        }
      });
    }
    else {
      this.router.navigate(['/error']);
    }
  }
}
