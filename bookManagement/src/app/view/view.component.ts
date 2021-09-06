import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  bookId: any ;
  bookDetails: any;
  constructor(private bookService: BookService,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(data => {
      this.bookId = data.id;
    })

    this.bookService.view(this.bookId).subscribe(data => {
      this.bookDetails = data;
    })
  }

}
