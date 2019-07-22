import {ProductoDTO} from  './productoDTO.model';

export class KardexCardDTO{
    id:number;
	descripcion:string;
	existencia:number;
	minimo:number;
	producto:ProductoDTO;
}