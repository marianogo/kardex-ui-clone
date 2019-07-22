import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KardexCardsComponent } from './kardex-cards/kardex-cards.component';
import { KardexCardDetailComponent } from './kardex-card-detail/kardex-card-detail.component';
import { KardexCardAddComponent } from './kardex-card-add/kardex-card-add.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material';
import { KardexCardService } from './service/kardexCard.service';
import { DialogCardexDetailMovement } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    KardexCardsComponent,
    KardexCardDetailComponent,
    KardexCardAddComponent,
    DialogCardexDetailMovement
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MatTableModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule, MatButtonToggleModule, MatBadgeModule
  ],
  providers: [KardexCardService],
  bootstrap: [AppComponent],
  entryComponents: [DialogCardexDetailMovement]
})
export class AppModule { }
