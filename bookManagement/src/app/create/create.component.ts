import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private bookService: BookService) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['',[Validators.required]],
      author: ['',[Validators.required]],
      description: ['',[Validators.required]]
    })
  }

  addBook(){
    Object.keys(this.createForm.controls)
    .forEach(key => this.createForm.controls[key].markAsDirty());
    if (this.createForm.invalid) return

    this.bookService.createBook(this.createForm.value).subscribe(
      data => {
        this.toastrService.success(` Created ${this.createForm.value.title} successfully!!`);
        this.createForm.reset();
        this.createForm.patchValue({
          title:"",
          author:"",
          description:""
        })
      }
    )
  }

}
