import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  bookId: any;
  bookDetail: any;
  editForm: FormGroup = new FormGroup({});
  dataloaded: boolean = false;
  constructor(private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.dataloaded = false;
    this.activatedRoute.params.subscribe(data => {
      this.bookId = data.id;
    });

    if(this.bookId !== ''){
      this.bookService.view(this.bookId)
      .toPromise()
      .then(data => {
        this.bookDetail = data;
        Object.assign(this.bookDetail,data);

        this.editForm = this.formBuilder.group({
          'title': new FormControl(this.bookDetail.title),
          'author': new FormControl(this.bookDetail.author),
          'description': new FormControl(this.bookDetail.description)
        })
        this.dataloaded = true;
      })
    }
  }

  updateBook(){
    this.bookService.updateBook(this.bookId, this.editForm.value).subscribe(
      data => {
        this.toastrService.success(`Edit successfully!`);
      }
    )
  }

}
