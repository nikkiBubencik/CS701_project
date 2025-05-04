import { Book } from "./Book";
export class ReadingList {
    description!: string;
    books!: BookArray[];
}
export class BookArray{
    book!: Book;
    status!: string;
    authorNames!: string[];
}
export class ReadingListStorage {
    [listName: string]: ReadingList;
}