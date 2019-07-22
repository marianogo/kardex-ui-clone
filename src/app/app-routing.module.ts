import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KardexCardsComponent } from './kardex-cards/kardex-cards.component';


const routes: Routes = [
     {
       path: 'kardexCards',
       component: KardexCardsComponent,
       data: {title:'Listado de KardexCards'}
     },
     {
       path:'',
       redirectTo: '/kardexCards',
       pathMatch: 'full'
     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
