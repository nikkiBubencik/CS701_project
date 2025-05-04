import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Review } from '../models/Review';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'review-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnChanges {
  @Input () bookKey: string;
  rate: number = 0;
  comments: string = "";

  constructor(private storageService: StorageService){
    this.bookKey = "";
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bookKey'] && this.bookKey) {
      let result = this.storageService.getBookReview(this.bookKey);
      if (result) {
        this.rate = result.rate;
        this.comments = result.comments;
      } 
      else {
        this.rate = 0;
        this.comments = "";
      }
    }
  }

  submitReview():void{
    let newReview: Review = {rate: this.rate, comments: this.comments};
    this.storageService.addUpdateReview(this.bookKey, newReview);
  }
  
}
