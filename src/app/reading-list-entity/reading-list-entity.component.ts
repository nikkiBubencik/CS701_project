import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { AuthorNamePipe } from '../pipes/author-name.pipe';

@Component({
  selector: 'app-reading-list-entity',
  imports: [CommonModule, FormsModule, AuthorNamePipe, RouterLink],
  templateUrl: './reading-list-entity.component.html',
  styleUrl: './reading-list-entity.component.css'
})
export class ReadingListEntityComponent implements OnInit {
  listName: string = "";
  description: string = "";
  books: Array<any> = [];
  statusOptions: string[] = ["Not Read", "Reading", "Completed"];
  
  constructor(private storageService: StorageService, 
      private route: ActivatedRoute,
      private router: Router){}

  updateStatus(bookKey:string, newStatus: string){
    this.storageService.changeStatus(this.listName, bookKey, newStatus);
  }

  editList(): void{
    this.router.navigate(['/edit', encodeURIComponent(this.listName)]);
  }

  delete(key: string, title: string): void{
    if(confirm("You are about to remove " + title + " from " + this.listName )){
      this.storageService.deleteBookFromList(this.listName, key);
      window.location.reload();
    }
  }
  deleteList(): void{
    if(confirm("You are about to delete"+ this.listName + " reading List")){
      this.storageService.deleteReadingList(this.listName);
      this.router.navigate(['/readingLists']);
    }
  }

  ngOnInit(){
    this.listName = decodeURIComponent(this.route.snapshot.params['id']);
    if(this.storageService.listNameExists(this.listName)){
      let result = this.storageService.getReadingList(this.listName);
      this.description = result.description;
      this.books = result.books;  
    }
    else{
      this.router.navigate(['/error']);
    }
  }
  
}
