import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EditbookComponent } from './editbook/editbook.component';
import { ListBookComponent } from './list-book/list-book.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'view/:id', component: ViewComponent
  },
  {
    path:'list', component: ListBookComponent
  },
  {
    path:'edit/:id', component: EditbookComponent
  },
  {
    path:'create', component: CreateComponent
  },
  {
    path:'delete/:id', component: DeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
