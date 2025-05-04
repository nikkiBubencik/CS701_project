import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { ReadingListsComponent } from './reading-lists/reading-lists.component';
import { ReadingListEntityComponent } from './reading-list-entity/reading-list-entity.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ReadingListAddEditComponent } from './reading-list-add-edit/reading-list-add-edit.component';

import { NotFoundComponent } from './not-found/not-found.component';
export const routes: Routes = [
    { path: '',                       component: HomeComponent },
    {path: 'search',              component: BookSearchComponent},
    {path : 'readingLists',      component: ReadingListsComponent},
    {path: 'readingList/:id',            component: ReadingListEntityComponent},
    { path: 'book/:id',   component: BookDetailComponent },
    { path: 'add',                    component: ReadingListAddEditComponent },
    { path: 'edit/:id',       component: ReadingListAddEditComponent },
    { path: '**',         component: NotFoundComponent }];
  