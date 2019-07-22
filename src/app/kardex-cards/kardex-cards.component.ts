import { Component, OnInit, ViewChild } from '@angular/core';
import { KardexCardService } from '../service/kardexCard.service';
import { KardexCardDTO } from '../model/kardexCardDTO.model';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogCardexDetailMovement } from '../dialog/dialog.component';
import { ProductoDTO } from '../model/productoDTO.model';


@Component({
  selector: 'app-kardex-cards',
  templateUrl: './kardex-cards.component.html',
  styleUrls: ['./kardex-cards.component.scss']
})
export class KardexCardsComponent implements OnInit {

  displayedColumns: string[] = ['id','producto', 'marca', 'existencia',  'ingreso','egreso'];
  dataSource;

  kardexCards: KardexCardDTO[];

  kardexCardDTO:any;
  productoDTO:any;

  constructor(private kardexCardService: KardexCardService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.kardexCardDTO = new KardexCardDTO();
    this.productoDTO = new ProductoDTO();
    this.productoDTO.id = 4;
    this.kardexCardDTO.producto = this.productoDTO;
    this.kardexCardDTO.minimo = 0;
    this.kardexCardDTO.descripcion = "Registro Inicial";
    this.kardexCardDTO.existencia = 0;


    this.kardexCardService.getKardexCards().subscribe(
      (kardexCards: KardexCardDTO[])=>{
        console.log(kardexCards);

        if(kardexCards.length == 0){

          this.kardexCardService.addKardexCard(this.kardexCardDTO).subscribe(
            x =>{
             this.kardexCardService.getKardexCards().subscribe(
               (kardexCards: KardexCardDTO[])=>{
                 this.kardexCards = kardexCards;
                 this.dataSource = new MatTableDataSource(kardexCards);
               ;
               }
             )
      
            }
          )
        }else{
          this.kardexCards = kardexCards;
          this.dataSource = new MatTableDataSource(kardexCards);
        }
        
      ;
      }
    );
  }

  ingreso(elemento){
    this.addCardDetail(elemento, 1);
  }

  egreso(elemento){
    this.addCardDetail(elemento,2);
  }

  addCardDetail(elemento,operation){

    const dialogRef = this.dialog.open(DialogCardexDetailMovement, {
      width: '250px',
      data: {"kardexCard" : elemento,"operacion": operation}
    });

    dialogRef.afterClosed().subscribe(result => {
        
        this.kardexCardService.addKardexDetail(result).subscribe(
          x=>{console.log(x);
            this.kardexCardService.getKardexCards().subscribe(
              (kardexCards: KardexCardDTO[])=>{
                this.kardexCards = kardexCards;
                this.dataSource = new MatTableDataSource(kardexCards);
              ;
              }
            );
          }
        )
    });
  }

}
