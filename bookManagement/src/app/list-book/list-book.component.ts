import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  listBook: any;
  bookId: any;
  constructor(private bookService: BookService,
    private activateRoute: ActivatedRoute,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.bookService.listBook().subscribe(data => {
      this.listBook = data
    })
    this.activateRoute.params.subscribe(data => {
      this.bookId = data.id
    })
  }
}
