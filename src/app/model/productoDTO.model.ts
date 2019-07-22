import {MarcaDTO} from  './marcaDTO.model';

export class ProductoDTO {
    id: number;
    codigo: number;
    descripcion: string;
    marca: MarcaDTO;
}