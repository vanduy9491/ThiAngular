import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl: string = 'http://localhost:3000/books/';
  constructor(private http: HttpClient) { }

  listBook(){
    return this.http.get(this.baseUrl);
  }

  createBook(bookObj: any){
    return this.http.post(this.baseUrl, bookObj);
  }
  view(id: string){
    return this.http.get(this.baseUrl + id);
  }

  updateBook(id: any, bookObj: any){
    return this.http.put(this.baseUrl + id, bookObj);
  }
   deleteBook(id: any){
     return this.http.delete(this.baseUrl + id);
   }
}
