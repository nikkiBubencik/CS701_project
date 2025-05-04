import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reading-list-add-edit',
  imports: [FormsModule, CommonModule],
  templateUrl: './reading-list-add-edit.component.html',
  styleUrl: './reading-list-add-edit.component.css'
})
export class ReadingListAddEditComponent {
  description!: string;
  name: string = "";
  editForm: boolean = false;
  message: string = "";
  error!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.params['id'];
    if (this.name) {
      this.name = decodeURIComponent(this.name);
      this.message = 'Edit Reading List';
      this.editForm = true;
      this.description = this.storageService.getListDescription(this.name);
      if(this.description == undefined){
        this.message = 'Add Reading List';
        this.description = "";
        this.editForm = false;
      }
    } else {
      this.message = 'Add Reading List';
      this.description = "";
      this.name = "";
      this.editForm = false;
    }
  }

  save() {
    let result: boolean = false;
    if(this.editForm){
      result = this.storageService.updateDescription(this.name, this.description);
      this.error = "Error Editing List, Make sure List Name is spelled correctly";
    }
    else{
      result = this.storageService.addReadingList(this.name, this.description);
      this.error = "Error Adding List. Make sure List Name doesn't already Exist.";
    }
    if(result){ 
      this.router.navigate(['/readingList', encodeURIComponent(this.name)]);
    }
    else{
      alert(this.error);
    }
  }
  cancel(){
    this.router.navigate(['/readingLists']);
  }
}
