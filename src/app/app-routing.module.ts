import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
const routes: Routes = [
  {
    path: '',
    component: MenuBarComponent,
    children: [
      {path: '', component: FirstComponentComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
