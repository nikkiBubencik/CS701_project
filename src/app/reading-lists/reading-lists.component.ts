import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-reading-lists',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './reading-lists.component.html',
  styleUrl: './reading-lists.component.css'
})
export class ReadingListsComponent implements OnInit {
  lists: string[] = [];
  private searchTerm: Subject<string> = new Subject<string>();;
  
  constructor( private storageService: StorageService){}
  
  search(term: string): void{
    this.searchTerm.next(term)
  }

  encode(listName: string): string {
    return encodeURIComponent(listName);
  }
  
  ngOnInit(){
    this.storageService.getListNames().subscribe(result =>
        this.lists = result
    ); 
  
    this.searchTerm = new Subject<string>();
    this.searchTerm.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((term) => this.storageService.getListNames(term))
    ).subscribe((result) => {
      this.lists = result;
    });
    
  }
  
}
