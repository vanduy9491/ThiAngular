import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  bookId: any ;
  bookDetails: any;
  constructor(private activateRoute: ActivatedRoute,
    private bookService: BookService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.bookId = data.id;
  });
  this.bookService.view(this.bookId).subscribe(data => {
    this.bookDetails = data;
  });
}

}
